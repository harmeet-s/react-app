import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { AppState } from './types';

export const initialState: AppState = {
  showLoading: false,
  token: '',
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeShowLoading(state, action: PayloadAction<boolean>) {
      state.showLoading = action.payload;
    },
    changeToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { actions: AppActions, reducer } = slice;

export const useAppSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
