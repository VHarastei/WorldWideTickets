import { RootState } from '../../store';
import { LoadingState } from './contracts/store';

export const selectUser = (state: RootState) => state.user;

export const selectUserData = (state: RootState) => selectUser(state).data;
export const selectIsAuth = (state: RootState) => !!selectUser(state).data;

export const selectIsAuthError = (state: RootState) =>
  selectUser(state).loadingState === LoadingState.ERROR;

export const selectIsAuthSuccess = (state: RootState) =>
  selectUser(state).loadingState === LoadingState.SUCCESS;

export const selectIsSignInLoading = (state: RootState) =>
  selectUser(state).loadingState === LoadingState.LOADING;
