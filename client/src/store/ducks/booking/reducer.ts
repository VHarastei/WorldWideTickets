import { BookingActions, BookingActionsType } from './actionCreators';
import { BookingState, LoadingState, BookingData, CreateTicketState } from './contracts/store';
import produce, { Draft } from 'immer';
import { isPair } from '../../../Components/FlightCard/FlightCard';

const initialBookingData: BookingData = {
  flightNumber: undefined,
  passengerData: undefined,
  seatData: undefined,
};

const initialState: BookingState = {
  bookingFlight: undefined,
  bookingData: initialBookingData,
  loadingState: LoadingState.NEVER,
  bookingTicket: undefined,
  createTicketState: CreateTicketState.NEVER,
};

export const bookingReducer = produce((draft: Draft<BookingState>, action: BookingActions) => {
  switch (action.type) {
    case BookingActionsType.SET_BOOKING_FLIGHT:
      draft.bookingFlight = action.payload;
      if (draft.bookingFlight) {
        if (isPair(draft.bookingFlight)) {
          draft.bookingData.flightNumber = [
            draft.bookingFlight.firstFlight.flightNumber,
            draft.bookingFlight.lastFlight.flightNumber,
          ];
        } else {
          draft.bookingData.flightNumber = [draft.bookingFlight.flightNumber];
        }
      }
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
      draft.createTicketState = CreateTicketState.CREATING;
      break;
    case BookingActionsType.SET_BOOKING_TICKET:
      draft.bookingTicket = action.payload;
      draft.createTicketState = CreateTicketState.CREATED;
      break;
    case BookingActionsType.SET_BOOKING_TICKET_STATE:
      draft.createTicketState = action.payload;
      break;
  }
}, initialState);
