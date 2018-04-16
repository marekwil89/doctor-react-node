var express = require('express');
var router = express.Router();
// var passport = require('passport');

router.get('/getLogedUser', function(req, res){
  console.log(req.user);
  return res.send(req.user)
});

module.exports = router;