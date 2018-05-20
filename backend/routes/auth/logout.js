var express = require('express');
var router = express.Router();
// var passport = require('passport');
// var mongoose = require('mongoose'); 
// var User = mongoose.model('User');

router.post('/', function(req, res){
  req.logOut();
  console.log(req.user);
	return res.json({msg: 'success'});
});

module.exports = router;