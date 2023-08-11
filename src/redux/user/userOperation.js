import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const $instants = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  $instants.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearToken = () => {
  $instants.defaults.headers.common['Authorization'] = '';
};

export const userRegisterThunk = createAsyncThunk(
  'users/registration',
  async (user, thunkApi) => {
    try {
      const { data } = await $instants.post('/users/signup', user);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLoginThunk = createAsyncThunk(
  'users/login',
  async (user, thunkApi) => {
    try {
      const { data } = await $instants.post('/users/login', user);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userCurrentThunk = createAsyncThunk(
  'users/current',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.authentication.token;
    try {
      setToken(token);
      const { data } = await $instants.get('/users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLogOutThunk = createAsyncThunk(
  'users/logOut',
  async (_, thunkApi) => {
    try {
      const { data } = await $instants.post('/users/logout');
      clearToken();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
