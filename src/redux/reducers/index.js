import { combineReducers } from 'redux';
// eslint-disable-next-line
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
