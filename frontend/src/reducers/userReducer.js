import { USER_LIST, USER_DETAIL } from '../actions/type';

const initialState = {
    userList: [],
    userDetail: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LIST:
      return {
        ...state,
        userList: action.payload
      };
    case USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload
      }
    default:
      return state;
  }
}