import { LOGIN_USER } from '../actions/type';

const initialState = {
    logedUser: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
      case LOGIN_USER:
        return {
          ...state,
          logedUser: action.payload
        };
      default:
        return state;
    }
}