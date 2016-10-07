var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var icons = [
   '/images/footerimg2.png',
   '/images/footerimg3.png',
   '/images/footerimg4.png',
   '/images/footerimg5.png',
   '/images/footerimg6.png']
  
  res.render('index', { 
    title: 'Charlotte Uprising',
    icons: icons,
  });
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
