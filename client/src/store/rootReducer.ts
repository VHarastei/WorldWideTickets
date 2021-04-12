import { flightsReducer } from './ducks/flights/reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  flights: flightsReducer,
});
