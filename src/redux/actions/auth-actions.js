import { SET_AUTH_USER } from '../action-types';

export const setAuthUserAction = (payload) => {
  console.log(payload);
  return { type: SET_AUTH_USER, payload };
};
