import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.loginPage || initialState;

export const selectUserId = createSelector(
  [selectDomain],
  loginPageState => loginPageState.userId,
);

export const selectPassword = createSelector(
  [selectDomain],
  loginPageState => loginPageState.password,
);
