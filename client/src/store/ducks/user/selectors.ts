import { RootState } from '../../store';
import { LoadingState } from './contracts/store';

export const selectUser = (state: RootState) => state.user;

export const selectUserData = (state: RootState) => selectUser(state).data;

export const selectIsSignInSuccess = (state: RootState) =>
  selectUser(state).loadingState === LoadingState.LOADING;
