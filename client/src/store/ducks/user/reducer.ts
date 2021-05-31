import produce, { Draft } from 'immer';
import { UserActionsType, UserActions } from './actionCreators';
import { UserState, LoadingState } from './contracts/store';

const initialState: UserState = {
  data: undefined,
  orders: {
    items: [],
    loadingState: LoadingState.NEVER,
  },
  loadingState: LoadingState.NEVER,
};

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {
  switch (action.type) {
    case UserActionsType.SET_USER_DATA:
      draft.data = action.payload;
      draft.loadingState = LoadingState.SUCCESS;
      break;
    case UserActionsType.SET_USER_ORDERS:
      draft.orders.items = action.payload;
      draft.orders.loadingState = LoadingState.SUCCESS;
      break;
    case UserActionsType.FETCH_SIGN_IN:
    case UserActionsType.FETCH_SIGN_UP:
    case UserActionsType.FETCH_USER_DATA:
      draft.data = undefined;
      draft.loadingState = LoadingState.LOADING;
      break;
    case UserActionsType.SIGN_OUT:
      draft.data = undefined;
      draft.orders.items = [];
      draft.loadingState = LoadingState.NEVER;
      break;
    case UserActionsType.FETCH_USER_ORDERS:
      draft.orders.items = [];
      draft.orders.loadingState = LoadingState.LOADING;
      break;
    case UserActionsType.SET_USER_ORDERS_LOADING_STATE:
      draft.orders.loadingState = action.payload;
      break;
    case UserActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;
  }
}, initialState);
