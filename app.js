'use strict';
//const sslRedirect = require('heroku-ssl-redirect');
const cookieSession = require('cookie-session');

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//var connect = require('connect');
const expressValidator = require('express-validator');//applies validation methods to every single request
const sassMiddleware = require('node-sass-middleware');
const routes = require('./routes/index');
const helpers = require('./helpers');
const errorHandlers = require('./handlers/errorHandlers');

const helmet = require('helmet');
const session = require('express-session');//https://expressjs.com/en/advanced/best-practice-security.html

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


app.all('*',function(req,res,next){
  if((req.headers['x-forwarded-proto']!='https')&& (process.env.NODE_ENV === 'production')) {
    res.redirect(`https://${req.get('host')}`+req.url);
  } else {
    next(); /* Continue to other routes if we're not redirecting */
  }
});

// Set headers https://www.smashingmagazine.com/2017/04/secure-web-app-http-headers/
// curl -vI https://www.juliettetworsey.com

// function requestHandler(req, res) {
//     res.setHeader('Cache-Control','no-cache,no-store,max-age=0,must-revalidate');
//     res.setHeader('Pragma','no-cache');
//     res.setHeader('Expires','-1');
//     res.setHeader('Strict-Transport-Security','max-age=31536000; includeSubDomains; preload');
//     res.setHeader('X-XSS-Protection','1;mode=block');
// }
//
//
//
// app.use(express.static('public', requestHandler));


// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too


app.set('trust proxy', 1);// trust first proxy
app.use(session({
  secret: 's3Cur3',
  name: 'sessionId'
}));
// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet());
// Takes the raw requests and turns them into usable properties on req.body

let expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  cookie: {
    secure: true,
    httpOnly: true, //protect against cross-site scripting attacks
    domain: 'https://juliettetworsey.com',
    path: 'foo/bar',
    expires: expiryDate
  }
}));


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
