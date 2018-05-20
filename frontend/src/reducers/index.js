import {combineReducers} from 'redux';
import authReducer from './authReducer';
import quizReducer from './quizReducer';
import userReducer from './userReducer';

export default combineReducers({
  auth: authReducer,
  quiz: quizReducer,
  user: userReducer,
});