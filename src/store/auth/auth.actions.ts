import AuthService from '@/services/auth/auth.service';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  IProfileBody,
  ISignInBody,
  ISignUpBody,
} from '@/services/auth/auth.types';
import { removeFromStorage } from '@/services/auth/auth.helper';

export const signUpRequest = createAsyncThunk(
  'auth/signUp',
  async (data: ISignUpBody, { rejectWithValue }) => {
    try {
      const response = await AuthService.fetchSignUp(data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const signInRequest = createAsyncThunk(
  'auth/signIn',
  async (data: ISignInBody, { rejectWithValue }) => {
    try {
      const response = await AuthService.fetchSignIn(data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const signOutRequest = createAsyncThunk('auth/signOut', async () => {
  try {
    const response = await AuthService.fetchSignOut();
    removeFromStorage();
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
});

export const profileRequest = createAsyncThunk<IProfileBody | null>(
  'profile/request',
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthService.fetchProfile(); // Замените на реальный метод
      return response.data as IProfileBody; // Убедитесь, что данные соответствуют типу IProfileBody
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch profile');
    }
  },
);
