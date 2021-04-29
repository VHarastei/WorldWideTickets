import { BookingActions, BookingActionsType } from './actionCreators';
import { BookingState, LoadingState, BookingData, createTicketState } from './contracts/store';
import produce, { Draft } from 'immer';

const initialBookingData: BookingData = {
  passengerData: undefined,
  seatData: undefined,
};

const initialState: BookingState = {
  bookingFlight: undefined,
  bookingData: initialBookingData,
  loadingState: LoadingState.NEVER,
  bookingTicket: undefined,
  createTicketState: createTicketState.NEVER,
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
      draft.bookingData.seatData = action.payload;
      break;
    case BookingActionsType.CREATE_BOOKING_TICKET:
      draft.bookingTicket = undefined;
      draft.createTicketState = createTicketState.CREATING;
      break;
    case BookingActionsType.SET_BOOKING_TICKET:
      draft.bookingTicket = action.payload;
      draft.createTicketState = createTicketState.CREATED;
      break;
  }
}, initialState);
