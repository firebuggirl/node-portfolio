const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const { catchErrors } = require('../handlers/errorHandlers'); //{ catchErrors } = object destructuring/es6 ....pulling in entire object into variable



router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});



router.get('/musicSection', function(req, res, next) {
  res.render('/musicSection', {title: "Music Section"});
});


// GET /about
router.get('/about', function(req, res, next) {
  return res.render('/about', { title: 'About' });
});



module.exports = router;
