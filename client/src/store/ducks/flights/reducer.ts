import produce, { Draft } from 'immer';
import { FlightsActions, FlightsActionsType } from './actionCreators';
import { FlightsState, LoadingState } from './contracts/store';

const initialState: FlightsState = {
  totalItems: undefined,
  totalPages: undefined,
  currentPage: undefined,
  items: [],
  loadingState: LoadingState.NEVER,
};

export const flightsReducer = produce((draft: Draft<FlightsState>, action: FlightsActions) => {
  switch (action.type) {
    case FlightsActionsType.SET_FLIGHTS:
      draft.totalItems = action.payload.totalItems;
      draft.totalPages = action.payload.totalPages;
      draft.currentPage = action.payload.currentPage;
      draft.items = [...draft.items, ...action.payload.items];
      draft.loadingState = LoadingState.LOADED;
      break;
    case FlightsActionsType.FETCH_FLIGHTS:
      if (draft.loadingState === LoadingState.NEVER) {
        draft.items = [];
      }
      draft.loadingState = LoadingState.LOADING;
      break;
    case FlightsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;
  }
}, initialState);
