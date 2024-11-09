import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../utils/axios';

export const loginGoogleUser = createAsyncThunk(
  'user/loginGoogleUser',
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/user/login/google`, body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || '로그인 실패'
      );
    }
  }
);

export const authUser = createAsyncThunk(
  'user/authUser',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`user/auth`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  `user/logoutUser`,
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/user/logout`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);
