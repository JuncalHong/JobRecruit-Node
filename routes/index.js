var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome! Hello World!');
});

router.get('/index',function(req,res,next){
	res.render('job/index');
});
module.exports = router;