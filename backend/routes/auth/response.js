import express from 'express';
// import passport from 'passport';
import mongoose from 'mongoose';

let router = express.Router();
// var passport = require('passport');
// var mongoose = require('mongoose'); 
// var User = mongoose.model('user');

//Authenticate routes

router.get('/alreadyLoged', (req, res) => {
	console.log('already loged : ' + req.user)
	return res.send(req.user)
})

// router.get('/logout', function(req, res){
//   req.logOut();
//   res.redirect('/');
// });

//response 

router.get('/registerFail', (req, res) => {
	console.log('register fail');
	res.send([{msg: 'Ten email już istnieje w bazie', param: 'fail'}])
});

router.get('/loginFail', (req, res) => {
	console.log('login fail');
	res.send([{msg: 'Zły login lub hasło', param: 'fail'}])
});	

// router.get('/userList', function(req, res){
//   User.find({}, function(err, user){
//     if(err){
//       throw err
//     }
//     return res.send(user)
//   })
// });

// passport.deserializeUser(function(id, done) {
// 	User.findById(id, function(err, user) {
// 		if(user){
// 			console.log('deserializing user:',user.email);
// 			done(err, user);				
// 		}
// 		else{
// 			User.findById(id, function(err, user){
// 				console.log('deserializing user:',user.email);
// 				done(err, user);					
// 			})
// 		}
// 	});
// });

export default router;