import { FETCH_QUIZ_LIST, FETCH_QUIZ_DETAIL } from '../actions/type';

const initialState = {
    quizList: [],
    quizDetail: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUIZ_LIST:
      return {
        ...state,
        quizList: action.payload
      };
    case FETCH_QUIZ_DETAIL:
      return {
        ...state,
        quizDetail: action.payload
      }
    default:
      return state;
  }
}