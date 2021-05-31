import { UserApi } from './../../../services/api/userApi';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthApi } from './../../../services/api/authApi';
import {
  FetchSignInActionInterface,
  FetchSignUpActionInterface,
  setUserData,
  setUserLoadingState,
  setUserOrders,
  setUserOrdersLoadingState,
  UserActionsType,
} from './actionCreators';
import { LoadingState, User, Order } from './contracts/store';

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
  try {
    const data: User = yield call(AuthApi.signIn, payload);
    window.localStorage.setItem('token', data.token);
    yield put(setUserData(data));
  } catch (err) {
    yield put(setUserLoadingState(LoadingState.ERROR));
  }
}

export function* fetchSignUpRequest({ payload }: FetchSignUpActionInterface) {
  try {
    yield call(AuthApi.signUp, payload);
    yield put(setUserLoadingState(LoadingState.SUCCESS));
  } catch (err) {
    yield put(setUserLoadingState(LoadingState.ERROR));
  }
}

export function* fetchUserDataRequest() {
  try {
    const data: User = yield call(AuthApi.getMe);
    yield put(setUserData(data));
  } catch (err) {
    yield put(setUserLoadingState(LoadingState.NEVER));
  }
}

export function* fetchUserOrdersRequest() {
  try {
    const orders: Order[] = yield call(UserApi.fetchOrders);
    yield put(setUserOrders(orders));
  } catch (err) {
    yield put(setUserOrdersLoadingState(LoadingState.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
  yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest);
  yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest);
  yield takeLatest(UserActionsType.FETCH_USER_ORDERS, fetchUserOrdersRequest);
}
