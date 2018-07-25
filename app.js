'use strict';
require('dotenv').config({ path: 'variables.env' });
const express = require('express');
const helmet = require('helmet');//initiate security headers
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');//applies validation methods to every single request
const sassMiddleware = require('node-sass-middleware');
const routes = require('./routes/index');
const helpers = require('./helpers');
const errorHandlers = require('./handlers/errorHandlers');

const fs = require("fs");


var pugBeautify = require('pug-beautify');
var code = fs.readFileSync('views/layout.pug','utf8');
var option = {
    fill_tab: true,
    omit_div: false,
    tab_size: 4
};
try {
    var output = pugBeautify(code,option);
}catch(error){
    // Error occurred
}

// create Express app
const app = express();
app.use(helmet());//get security report here: https://securityheaders.io/
//app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
// app.use(helmet.contentSecurityPolicy({
//   directives: {
//     defaultSrc: ["'self'", 'https://www.juliettetworsey.com/', 'http://localhost:7777/'],
//     styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com'],
//     sandbox: ['allow-forms', 'allow-scripts']
//   }
// }));

app.all('*',function(req,res,next){
  if((req.headers['x-forwarded-proto']!='https')&& (process.env.NODE_ENV === 'production')) {
    res.redirect(`https://${req.get('host')}`+req.url);
  } else {
    next(); /* Continue to other routes if we're not redirecting */
  }
});



// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

//app.use(require('prerender-node').set('prerenderToken', process.env.PRERENDER_TOKEN));
//// manually modify middleware to check for Googlebot by their user agent directly
// https://prerender.io/documentation/google-support
// have been some reported issues with Googlebot rendering JavaScript on the first
// request to a URL that still uses the ?_escaped_fragment_= protocol
const prerender = require('prerender-node').set('prerenderToken', process.env.PRERENDER_TOKEN);
prerender.crawlerUserAgents.push('googlebot');
prerender.crawlerUserAgents.push('bingbot');
prerender.crawlerUserAgents.push('yandex');


// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
app.use(expressValidator());

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
});


// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes);


// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);


// done! we export it so we can start the site in start.js
module.exports = app;
