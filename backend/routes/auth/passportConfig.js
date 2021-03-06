import mongoose from 'mongoose';
import bCrypt from './bCrypt.js';
var User = mongoose.model('user');

module.exports = function (passport, LocalStrategy) {

	passport.serializeUser(function (user, done) {
		console.log('serializing user:', user.email);
		done(null, user._id);
	});

	passport.deserializeUser(function (id, done) {
	  User.findById(id, (err, user) => {
	  	console.log('deserializing user:',user);
	    done(err, user);
	  });
	});

	passport.use('register', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback : true
		},
		(req ,email, password, done) => { 
			User.findOne({ 'email' :  email }, function (err, user) {

				if (user) {
					console.log('This mail is already taken');
					return done(null, false);
				} 

				var newUser = new User({
					email: email,
          password: bCrypt.createHash(password),
          type: req.body.type,
				});
        
				newUser.save((err) => {
					if (err){
						throw err;  
					}
					return done(null, newUser);
				});
			});
		}
	));

	passport.use('login', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password'
		},
		function (email, password, done) { 

			User.findOne({ 'email' :  email }, function(err, user) {
				if (err){
					return done(err);
				}
				if (!user){
					return done(null, false);                 
				}

				if (!bCrypt.isValidPassword(user, password)){
					return done(null, false);
				}
				return done(null, user);
			});
		}
	));
};
