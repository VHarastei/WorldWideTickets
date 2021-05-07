import { FlightsState, LoadingState } from './contracts/store';
import produce, { castDraft, Draft } from 'immer';
import { FlightsActions, FlightsActionsType } from './actionCreators';

const initialState: FlightsState = {
  totalItems: undefined,
  totalPages: undefined,
  currentPage: undefined,
  items: {
    directFlights: [],
    connectingFlights: [],
  },
  loadingState: LoadingState.NEVER,
};

export const flightsReducer = produce((draft: Draft<FlightsState>, action: FlightsActions) => {
  switch (action.type) {
    case FlightsActionsType.SET_FLIGHTS:
      draft.totalItems = action.payload.totalItems;
      draft.totalPages = action.payload.totalPages;
      draft.currentPage = action.payload.currentPage;
      draft.items.directFlights = [
        ...draft.items.directFlights,
        ...action.payload.items.directFlights,
      ]; // [...old, new]
      draft.items.connectingFlights = [
        ...draft.items.connectingFlights,
        ...action.payload.items.connectingFlights,
      ]; // [...old, new]
      draft.loadingState = LoadingState.LOADED;
      break;
    case FlightsActionsType.FETCH_FLIGHTS:
      //draft.items = undefined;
      draft.loadingState = LoadingState.LOADING;
      break;
    case FlightsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;
  }
}, initialState);
