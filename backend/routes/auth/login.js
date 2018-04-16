import express from 'express';
import passport from 'passport';
import passConfig from './passportConfig.js';
import localStrategy from 'passport-local';

let router = express.Router();

passConfig(passport, localStrategy.Strategy);

router.post('/', passport.authenticate('login', {
    successRedirect: '/response/alreadyLoged',
    failureRedirect: '/response/loginFail'
  })
)

export default router;