import { bookingReducer } from './ducks/booking/reducer';
import { flightsReducer } from './ducks/flights/reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  flights: flightsReducer,
  //booking: bookingReducer
});
