import { SET_AUTH_USER } from '../action-types';

export const setAuthUserAction = (payload) => ({
  type: SET_AUTH_USER,
  payload,
});
