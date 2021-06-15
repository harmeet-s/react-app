import { put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { selectUserId, selectPassword } from './selectors';
import { loginPageActions as actions } from '.';
import { AppActions } from '../../../slice';
import { API_BASE_URL } from '../../../env-constants.js';
import { push } from 'connected-react-router';

function login(userId: any, password: any) {
  console.log(userId);
  console.log(password);
  return axios({
    url: `${API_BASE_URL}/auth/login`,
    method: 'POST',
    headers: {},
    data: {
      userId,
      password,
    },
  });
}

export function* loginSaga() {
  const userId: string = yield select(selectUserId);
  const password: string = yield select(selectPassword);
  yield put(AppActions.changeShowLoading(true));
  let response: any;
  try {
    response = yield login(userId, password);
    console.log(response);
    // const { token, user } = response.data.data;
    // yield put(loginSuccessful(user, token));
    yield put(push('/main'));
  } catch (err) {
  } finally {
    yield put(AppActions.changeShowLoading(false));
  }
}

export function* loginPageSaga() {
  yield takeLatest(actions.login.type, loginSaga);
}
