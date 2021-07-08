import * as actionType from '../action-types/auth-types';
import { AUTH_TOKEN, AUTH_USERNAME } from '../../utils/constants';
import { AUTHORIZATION } from '../../services/api';

const initialState = {
  error: null,
  isAuthenticated: localStorage.getItem(AUTH_TOKEN) !== null,
  userData: AUTHORIZATION.getUserData(localStorage.getItem(AUTH_USERNAME)),
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case action.type === actionType.SET_AUTH_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
