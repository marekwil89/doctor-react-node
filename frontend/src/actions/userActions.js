import { USER_LIST, USER_DETAIL } from './type';
import { fetchQuizListOthers } from './quizActions';

export const fetchUserList = () => dispatch => {
  fetch('http://localhost:8000/user/list')
    .then(res => res.json())
    .then(userList => {
      dispatch({
        type: USER_LIST,
        payload: userList
      })
    });
};

export const fetchUserDetail = (id) => dispatch => {
  fetch(`http://localhost:8000/user/detail/${id}`)
    .then(res => res.json())
    .then(userDetail => {
      dispatch({
        type: USER_DETAIL,
        payload: userDetail
      })
    });
}

export const fetchUserRecommend = (recommend) => dispatch => {
  fetch('http://localhost:8000/user/recommend', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(recommend)
  })
    .then(res => {
      dispatch(fetchQuizListOthers({selectedUserId: recommend.userId}))      
    });
}