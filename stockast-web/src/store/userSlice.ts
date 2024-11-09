import { createSlice } from '@reduxjs/toolkit';
import { authUser, loginGoogleUser, logoutUser } from '../api/userApi';

export interface UserType {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
}

export interface UserState {
  user: UserType;
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginGoogleUser.pending, (state: UserState) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginGoogleUser.fulfilled, (state: UserState, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuth = true;
        localStorage.setItem('accessToken', action.payload.accessToken);
        console.log(`access Token : ${action.payload.accessToken}`);
        console.log(`login user : ${JSON.stringify(action.payload, null, 2)}`);
      })
      .addCase(loginGoogleUser.rejected, (state: UserState, action) => {
        state.isLoading = false;
        state.error = action.payload || '로그인 실패';
      })
      .addCase(authUser.pending, (state: UserState) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authUser.fulfilled, (state: UserState, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuth = true;
        console.log(`auth user : ${JSON.stringify(action.payload, null, 2)}`);
      })
      .addCase(authUser.rejected, (state: UserState, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.user = initialState.user;
        state.isAuth = false;
        localStorage.removeItem('accessToken');
      })
      .addCase(logoutUser.pending, (state: UserState) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state: UserState) => {
        state.isLoading = false;
        state.user = initialState.user;
        state.isAuth = false;
        localStorage.removeItem('accessToken');
      })
      .addCase(logoutUser.rejected, (state: UserState, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
