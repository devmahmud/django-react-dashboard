import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import userAPI from '../services/userAPI';

const initialState = {
  users: [],
  usersRequestStatus: '',
};

const getAllUsersAsync = createAsyncThunk(
  'user/getAllUser',
  userAPI.getAllUsers
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsersAsync.pending]: (state) => {
      state.usersRequestStatus = 'pending';
    },
    [getAllUsersAsync.rejected]: (state, action) => {
      state.usersRequestStatus = 'rejected';
    },
    [getAllUsersAsync.fulfilled]: (state, action) => {
      state.usersRequestStatus = 'fulfilled';
      state.users = action.payload;
    },
  },
});

export { getAllUsersAsync };
export default userSlice.reducer;
