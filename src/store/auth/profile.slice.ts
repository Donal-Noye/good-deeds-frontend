import { createSlice } from '@reduxjs/toolkit';
import { profileRequest } from '@/store/auth/auth.actions';
import { IProfileBody } from '@/services/auth/auth.types';

interface ProfileState {
  profile: IProfileBody | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  profile: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profileRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(profileRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(profileRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default profileSlice.reducer;
