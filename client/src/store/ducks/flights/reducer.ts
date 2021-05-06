import { FlightsState, LoadingState } from './contracts/store';
import produce, { Draft } from 'immer';
import { FlightsActions, FlightsActionsType } from './actionCreators';

const initialState: FlightsState = {
  items: undefined,
  loadingState: LoadingState.NEVER,
};

export const flightsReducer = produce((draft: Draft<FlightsState>, action: FlightsActions) => {
  switch (action.type) {
    case FlightsActionsType.SET_FLIGHTS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case FlightsActionsType.FETCH_FLIGHTS:
      draft.items = undefined;
      draft.loadingState = LoadingState.LOADING;
      break;
    case FlightsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;
  }
}, initialState);
