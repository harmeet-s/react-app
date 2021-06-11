import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { Saga } from './saga';
import { CurrentUser, CurrentUserState } from './types';

// TODO: Change this to null after testing
let currentUser: CurrentUser = { userId: '1234567890', role: 'VENDOR_ADMIN', vendor: 'VENDOR_1', fullName: 'Brijesh' };

try {
  const parsedUser = JSON.parse(localStorage.getItem('user') || '{}') || {};
  if (parsedUser && 'userId' in parsedUser && 'vendor' in parsedUser && 'role' in parsedUser) {
    currentUser = parsedUser;
  }
} catch (error) {
  console.log(error); // TODO: Think of what to do with this
}
export const initialState: CurrentUserState = {
  user: currentUser,
};

const slice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    logout(state, action: PayloadAction<void>) {
      localStorage.removeItem('user');
      state.user = null;
    },
  },
});

export const { actions: Actions } = slice;

export const useSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: Saga });
  return { actions: slice.actions };
};
