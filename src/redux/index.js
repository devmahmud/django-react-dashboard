import { combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './authSlice';
import UserReducer from './userSlice';

const rootReducer = combineReducers({
  // Put reducers here
  auth: AuthReducer,
  user: UserReducer,
});

export default rootReducer;
