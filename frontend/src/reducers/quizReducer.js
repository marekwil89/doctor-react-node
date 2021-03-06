import { QUIZ_LIST, QUIZ_DETAIL } from '../actions/type';

const initialState = {
    quizList: [],
    quizDetail: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case QUIZ_LIST:
      return {
        ...state,
        quizList: action.payload
      };
    case QUIZ_DETAIL:
      return {
        ...state,
        quizDetail: action.payload
      }
    default:
      return state;
  }
}