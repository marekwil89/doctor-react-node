import { FETCH_QUIZ_LIST, FETCH_QUIZ_DETAIL } from './type';

export const fetchQuizList = () => dispatch => {
  fetch('http://localhost:8000/quiz/list')
    .then(res => res.json())
    .then(quizList => {
      dispatch({
        type: FETCH_QUIZ_LIST,
        payload: quizList
      })
    });
};

export const fetchQuizDetail = (id) => dispatch => {
  fetch(`http://localhost:8000/quiz/detail/${id}`)
    .then(res => res.json())
    .then(quizDetail => {
      dispatch({
        type: FETCH_QUIZ_DETAIL,
        payload: quizDetail
      })
    });
}