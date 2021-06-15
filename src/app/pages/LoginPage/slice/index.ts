import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginPageSaga } from './saga';
import { LoginPageState } from './types';

export const initialState: LoginPageState = {
  userId: '',
  password: '',
};

const slice = createSlice({
  name: 'loginPage',
  initialState,
  reducers: {
    changeUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
    changePassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    login(state) {},
    // loginSuccessful(state, action: PayloadAction)
  },
});

export const { actions: loginPageActions, reducer } = slice;

export const useLoginPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: loginPageSaga });
  return { actions: slice.actions };
};
