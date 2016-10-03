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

module.exports = router;
