import { SET_USER, UNSET_USER, CLEAR_ERRORS, SET_ERRORS } from './type';

export const loginUser = user => dispatch => {
  return fetch('http://localhost:8000/auth/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
};

export const registerUser = user => dispatch => {
  return fetch('http://localhost:8000/auth/register', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
};

export const logoutUser = () => dispatch => {
  fetch('http://localhost:8000/auth/logout', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      dispatch(logedUser())
    })
}

export const logedUser = () => dispatch => {
  fetch('http://localhost:8000/auth/loged', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      if(res.param === false){
        dispatch(unsetLogedUser())
      }
      else{
        dispatch(setLogedUser(res))
      }
    })
}

export const clearErrors = () => dispatch =>{
  dispatch({
    type: CLEAR_ERRORS
  })
}

export const setErrors = errors => dispatch =>{
  dispatch({
    type: SET_ERRORS,
    payload: errors
  })
}

export const setLogedUser = user => dispatch => {
  dispatch({
    type: SET_USER,
    payload: user
  })
}

export const unsetLogedUser = () => dispatch => {
  dispatch({
    type: UNSET_USER
  })
}