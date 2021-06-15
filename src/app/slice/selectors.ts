import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.app || initialState;

export const selectToken = createSelector(
  [selectDomain],
  appState => appState.token,
);

export const selectLoadingStatus = createSelector(
  [selectDomain],
  appState => appState.showLoading,
);
