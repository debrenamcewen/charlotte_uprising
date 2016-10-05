var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Charlotte Uprising' });
});

router.get('/volunteer', function(req, res, next) {
  res.render('volunteer');
});

router.get('/donate', function(req, res, next) {
  res.render('donate');
});

router.get('/petition', function(req, res, next){
  res.render('petition');
});

router.get('/volunteer', function(req, res, next){
  res.render('volunteer');
});


router.get('/updates', function(req, res, next){
  res.render('updates');
});

router.get('/wishlist', function(req, res, next){
  res.render('wishlist');
});

router.get('/support', function(req, res, next){
  res.render('support');
});


module.exports = router;
