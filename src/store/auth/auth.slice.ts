import { createSlice } from '@reduxjs/toolkit';
import { ISignUpResponse, ISignInResponse } from '@/services/auth/auth.types';
import { signUpRequest, signInRequest } from '@/store/auth/auth.actions';

interface AuthState {
  user: ISignUpResponse['user'] | ISignInResponse['user'] | null;
  accessToken: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Sign Up
      .addCase(signUpRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
      })
      .addCase(signUpRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Sign In
      .addCase(signInRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
      })
      .addCase(signInRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
