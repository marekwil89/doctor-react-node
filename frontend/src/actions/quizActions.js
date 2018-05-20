import { QUIZ_LIST, QUIZ_DETAIL } from './type';

export const fetchQuizListOthers = (filters) => dispatch => {

  fetch('http://localhost:8000/quiz/list/others', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(filters)
  })
    .then(res => res.json())
    .then(quizList => {
      dispatch({
        type: QUIZ_LIST,
        payload: quizList
      })
    });
};

export const fetchQuizList = (filters) => dispatch => {
  fetch('http://localhost:8000/quiz/list', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(filters)
  })
    .then(res => res.json())
    .then(quizList => {
      dispatch({
        type: QUIZ_LIST,
        payload: quizList
      })
    });
};

export const fetchQuizDetail = (id) => dispatch => {
  fetch(`http://localhost:8000/quiz/detail/${id}`)
    .then(res => res.json())
    .then(quizDetail => {
      dispatch({
        type: QUIZ_DETAIL,
        payload: quizDetail
      })
    });
}
export const fetchSolvedQuiz = (quiz) => dispatch => {
  return fetch('http://localhost:8000/quiz/solve', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(quiz)
  })
}