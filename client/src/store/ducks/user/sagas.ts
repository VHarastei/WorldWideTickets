import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthApi } from './../../../services/api/authApi';
import {
  FetchSignInActionInterface,
  setUserData,
  setUserLoadingState,
  UserActionsType,
} from './actionCreators';
import { LoadingState, User } from './contracts/store';

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
  try {
    const data: User = yield call(AuthApi.signIn, payload);
    window.localStorage.setItem('token', data.token);
    yield put(setUserData(data));
  } catch (err) {
    yield put(setUserLoadingState(LoadingState.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
}
