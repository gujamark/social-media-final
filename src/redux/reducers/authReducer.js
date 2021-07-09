import * as actionType from '../action-types/auth-types';
import { AUTH_TOKEN, USER_DATA } from '../../utils/constants';

const initialState = {
  error: null,
  isAuthenticated: localStorage.getItem(AUTH_TOKEN) !== null,
  userData: JSON.parse(localStorage.getItem(USER_DATA)),
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_AUTH_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
