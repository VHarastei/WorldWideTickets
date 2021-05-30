import { Action } from 'redux';
import { SignInPropsType, SignUpPropsType } from './../../../services/api/authApi';
import { LoadingState, UserState } from './contracts/store';

export enum UserActionsType {
  SET_USER_DATA = 'user/SET_USER_DATA',
  FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
  FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
  SIGN_OUT = 'user/SIGN_OUT',
  FETCH_USER_DATA = 'user/FETCH_USER_DATA',
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
  FETCH_USER_ORDERS = 'user/FETCH_USER_ORDERS',
  SET_USER_ORDERS = 'user/SET_USER_ORDERS',
}

export interface SetUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_DATA;
  payload: UserState['data'];
}

export interface FetchSignInActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_IN;
  payload: SignInPropsType;
}

export interface FetchSignUpActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_UP;
  payload: SignUpPropsType;
}

export interface SignOutActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SIGN_OUT;
}
export interface FetchUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_USER_DATA;
}

export interface SetUserLoadingStateActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchUserOrdersActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_USER_ORDERS;
}

export interface SetUserOrdersActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_ORDERS;
  payload: UserState['orders'];
}

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export const fetchSignIn = (payload: SignInPropsType): FetchSignInActionInterface => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload,
});

export const fetchSignUp = (payload: SignUpPropsType): FetchSignUpActionInterface => ({
  type: UserActionsType.FETCH_SIGN_UP,
  payload,
});

export const signOut = (): SignOutActionInterface => ({
  type: UserActionsType.SIGN_OUT,
});
export const fetchUserData = (): FetchUserDataActionInterface => ({
  type: UserActionsType.FETCH_USER_DATA,
});

export const fetchUserOrders = (): FetchUserOrdersActionInterface => ({
  type: UserActionsType.FETCH_USER_ORDERS,
});

export const setUserOrders = (payload: UserState['orders']): SetUserOrdersActionInterface => ({
  type: UserActionsType.SET_USER_ORDERS,
  payload,
});

export const setUserLoadingState = (payload: LoadingState): SetUserLoadingStateActionInterface => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});

export type UserActions =
  | SetUserDataActionInterface
  | FetchSignInActionInterface
  | FetchSignUpActionInterface
  | SignOutActionInterface
  | FetchUserDataActionInterface
  | SetUserLoadingStateActionInterface
  | SetUserOrdersActionInterface
  | FetchUserOrdersActionInterface;
