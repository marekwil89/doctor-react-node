import { LOGIN_USER } from './type';

export const loginUser = user => dispatch => {
    dispatch({
        type: LOGIN_USER,
        payload: user
    })
};