import { SignInPropsType } from './../../../services/api/authApi';
import { Action } from 'redux';
import { FetchFlightsPayload } from '../../../services/api/api';
import { LoadingState, UserState } from './contracts/store';

export enum UserActionsType {
  SET_USER_DATA = 'user/SET_USER_DATA',
  FETCH_SIGN_IN = 'user/FETCH_USER',
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
}

export interface SetUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_DATA;
  payload: UserState['data'];
}

export interface FetchSignInActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_IN;
  payload: SignInPropsType;
}

export interface SetUserLoadingStateActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export const fetchSignIn = (payload: SignInPropsType): FetchSignInActionInterface => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload,
});

export const setUserLoadingState = (payload: LoadingState): SetUserLoadingStateActionInterface => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});

export type UserActions =
  | SetUserDataActionInterface
  | FetchSignInActionInterface
  | SetUserLoadingStateActionInterface;
