import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGoodDeedResponse } from '@/services/good-deeds/good-deeds.types';
import {
  createGoodDeed,
  deleteGoodDeed,
  fetchGoodDeeds,
  updateGoodDeed,
} from '@/store/good-deeds/good-deeds.actions';

interface GoodDeedState {
  goodDeeds: IGoodDeedResponse[];
  loading: boolean;
  error: string | null;
}

const initialState: GoodDeedState = {
  goodDeeds: [],
  loading: false,
  error: null,
};

const goodDeedsSlice = createSlice({
  name: 'goodDeeds',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoodDeeds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchGoodDeeds.fulfilled,
        (state, action: PayloadAction<IGoodDeedResponse[]>) => {
          state.loading = false;
          state.goodDeeds = action.payload;
        },
      )
      .addCase(fetchGoodDeeds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch good deeds';
      })
      .addCase(createGoodDeed.fulfilled, (state, action) => {
        state.goodDeeds.push(action.payload);
      })
      .addCase(updateGoodDeed.fulfilled, (state, action) => {
        const index = state.goodDeeds.findIndex(
          (deed) => deed.id === action.payload.id,
        );
        if (index !== -1) {
          state.goodDeeds[index] = action.payload;
        }
      })
      .addCase(deleteGoodDeed.fulfilled, (state, action) => {
        state.goodDeeds = state.goodDeeds.filter(
          (deed) => deed.id !== action.payload,
        );
      });
  },
});

export default goodDeedsSlice.reducer;
