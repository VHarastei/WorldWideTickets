import { BookingActions, BookingActionsType } from './actionCreators';
import { BookingState, LoadingState, BookingData } from './contracts/store';
import produce, { Draft } from 'immer';

const initialBookingData: BookingData = {
  passengerData: undefined,
  SeatData: undefined,
};

const initialState: BookingState = {
  bookingFlight: undefined,
  bookingData: initialBookingData,
  loadingState: LoadingState.NEVER,
};

export const bookingReducer = produce((draft: Draft<BookingState>, action: BookingActions) => {
  switch (action.type) {
    case BookingActionsType.SET_BOOKING_FLIGHT:
      draft.bookingFlight = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;
    case BookingActionsType.FETCH_BOOKING_FLIGHT:
      draft.bookingFlight = undefined;
      draft.loadingState = LoadingState.LOADING;
      break;
    case BookingActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;
    case BookingActionsType.SET_BOOKING_PASSENGER_DATA:
      draft.bookingData.passengerData = action.payload;
      break;
    case BookingActionsType.SET_BOOKING_SEAT_DATA:
      draft.bookingData.SeatData = action.payload;
      break;
  }
}, initialState);
