var express = require('express');
var router = express.Router();
// var passport = require('passport');

router.post('/', function(req, res){
  // console.log(req.user);
	res.send(req.user ? req.user : {param: false})

  // return res.send(req.user);
});

module.exports = router;