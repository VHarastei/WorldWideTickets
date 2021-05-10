import { call, put, takeLatest } from 'redux-saga/effects';
import { BookingApi } from '../../../services/api/bookingApi';
import { FlightsApi } from '../../../services/api/flightsApi';
import {
  BookingActionsType,
  CreateBookingTicketActionInterface,
  FetchBookingFlightActionInterface,
  setBookingFlight,
  setBookingLoadingState,
  setBookingTicket,
  setCreateBookingTicketState,
} from './actionCreators';
import { BookingState, LoadingState, CreateTicketState } from './contracts/store';

export function* fetchFlightRequest({ payload: flightNumber }: FetchBookingFlightActionInterface) {
  try {
    let flight: BookingState['bookingFlight'];
    let [firstFlightNumber, secondFlightNumber] = flightNumber.split('+');

    if (!secondFlightNumber) {
      flight = yield call(FlightsApi.fetchFlight, firstFlightNumber);
    } else {
      flight = {
        firstFlight: yield call(FlightsApi.fetchFlight, firstFlightNumber),
        lastFlight: yield call(FlightsApi.fetchFlight, secondFlightNumber),
      };
    }

    yield put(setBookingFlight(flight));
  } catch (err) {
    yield put(setBookingLoadingState(LoadingState.ERROR));
  }
}

export function* createTicketRequest({ payload }: CreateBookingTicketActionInterface) {
  try {
    const ticket: BookingState['bookingTicket'] = yield call(BookingApi.createTicket, payload);

    yield put(setBookingTicket(ticket));
  } catch (err) {
    yield put(setCreateBookingTicketState(CreateTicketState.ERROR));
  }
}

export function* bookingSaga() {
  yield takeLatest(BookingActionsType.FETCH_BOOKING_FLIGHT, fetchFlightRequest);
  yield takeLatest(BookingActionsType.CREATE_BOOKING_TICKET, createTicketRequest);
}
