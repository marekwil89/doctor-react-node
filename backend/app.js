import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import logger from 'morgan';
import expressSession from 'express-session';
import cookieParser from 'cookie-parser';

mongoose.connect('mongodb://localhost/doctor', {
  // useMongoClient: true
});


import './models/user.js';
import './models/quiz.js';


import register from './routes/auth/register.js';
import login from './routes/auth/login.js';
import response from './routes/auth/response.js';
import quizCreate from './routes/quiz/create.js';
import quizList from './routes/quiz/list.js';
import quizDetail from './routes/quiz/detail.js';
import quizSolve from './routes/quiz/solve.js';


let app = express();

app.use(logger('dev'));
app.use(expressSession({
  secret: 'keyboard cat',
  name: 'itsname',
  proxy: true,
  resave: true,
  saveUninitialized: true
}));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin:['http://localhost:3000'],
  methods:['GET','POST'],
  credentials: true // enable set cookie
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


app.use('/auth/register', register);
app.use('/auth/login', login);
app.use('/response', response);
app.use('/quiz/create', quizCreate);
app.use('/quiz/list', quizList);
app.use('/quiz/detail', quizDetail);
app.use('/quiz/solve', quizSolve);


// app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  //   res.header("Access-Control-Allow-Credentials",true);
  //   next();
  // });
  
  // npm run server
  
  app.listen('8000', () => console.log('localhost:8000'))
  console.log('database connection: ' + mongoose.connection.readyState + ' | 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting');