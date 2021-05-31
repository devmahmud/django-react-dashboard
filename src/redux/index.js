import { combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './authSlice';

const rootReducer = combineReducers({
  // Put reducers here
  auth: AuthReducer,
});

export default rootReducer;
