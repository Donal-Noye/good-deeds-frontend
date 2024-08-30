import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectGoodDeedsState = (state: RootState) => state.goodDeeds;

export const selectGoodDeeds = createSelector(
	[selectGoodDeedsState],
	(goodDeedsState) => goodDeedsState.goodDeeds
);

export const selectLoading = createSelector(
	[selectGoodDeedsState],
	(goodDeedsState) => goodDeedsState.loading
);

export const selectError = createSelector(
	[selectGoodDeedsState],
	(goodDeedsState) => goodDeedsState.error
);

export const goodDeedSelectors = {
	selectGoodDeeds,
	selectLoading,
	selectError,
};