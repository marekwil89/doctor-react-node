import { SET_USER, UNSET_USER, SET_ERRORS, CLEAR_ERRORS } from '../actions/type';

const initialState = {
    user: {},
    errors: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case UNSET_USER:
      return {
        ...state,
        user: {}
      }
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: []
      };
    default:
      return state;
  }
}