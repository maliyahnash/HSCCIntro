var express = require('express');
var router = express.Router();

/* GET BDPA History page. */
router.get('/', function(req, res, next) {
  res.render('bdpahistory', { title: 'BDPA History' });
});

module.exports = router;
