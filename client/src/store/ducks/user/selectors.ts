import { RootState } from '../../store';
import { LoadingState } from './contracts/store';

export const selectUser = (state: RootState) => state.user;

export const selectIsAuth = (state: RootState) =>
  !!selectUser(state).data && !!selectIsAuthSuccess(state);

export const selectUserData = (state: RootState) => selectUser(state).data;

export const selectIsAuthError = (state: RootState) =>
  selectUser(state).loadingState === LoadingState.ERROR;

export const selectIsAuthNever = (state: RootState) =>
  selectUser(state).loadingState === LoadingState.NEVER;

export const selectIsAuthSuccess = (state: RootState) =>
  selectUser(state).loadingState === LoadingState.SUCCESS;

export const selectIsAuthLoading = (state: RootState) =>
  selectUser(state).loadingState === LoadingState.LOADING;

export const selectUserOrders = (state: RootState) => selectUser(state).orders.items;

export const selectIsUserOrdersLoading = (state: RootState) =>
  selectUser(state).orders.loadingState === LoadingState.LOADING;
