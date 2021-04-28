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
} from './actionCreators';
import { BookingState, LoadingState } from './contracts/store';

export function* fetchFlightRequest({ payload: flightNumber }: FetchBookingFlightActionInterface) {
  try {
    const flight: BookingState['bookingFlight'] = yield call(FlightsApi.fetchFlight, flightNumber);
    console.log(flight);
    yield put(setBookingFlight(flight));
  } catch (err) {
    yield put(setBookingLoadingState(LoadingState.ERROR));
  }
}

export function* createTicketRequest({ payload }: CreateBookingTicketActionInterface) {
  try {
    const ticket: BookingState['bookingTicket'] = yield call(BookingApi.createTicket, payload);

    console.log(ticket);
    yield put(setBookingTicket(ticket));
  } catch (err) {
    yield put(setBookingLoadingState(LoadingState.ERROR));
  }
}

export function* bookingSaga() {
  yield takeLatest(BookingActionsType.FETCH_BOOKING_FLIGHT, fetchFlightRequest);
}
