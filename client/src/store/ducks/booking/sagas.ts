import { call, put, takeLatest } from 'redux-saga/effects';
import { BookingApi } from '../../../services/api/bookingApi';
import { FlightsApi } from '../../../services/api/flightsApi';
import {
  BookingActionsType,
  CreateBookingTicketsActionInterface,
  FetchBookingFlightActionInterface,
  setBookingFlight,
  setBookingLoadingState,
  setBookingTickets,
  setCreateBookingTicketsState,
} from './actionCreators';
import { BookingState, LoadingState, CreateTicketsState } from './contracts/store';

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

export function* createTicketsRequest({ payload }: CreateBookingTicketsActionInterface) {
  try {
    const tickets: BookingState['bookingTickets'] = yield call(BookingApi.createTickets, payload);

    yield put(setBookingTickets(tickets));
  } catch (err) {
    yield put(setCreateBookingTicketsState(CreateTicketsState.ERROR));
  }
}

export function* bookingSaga() {
  yield takeLatest(BookingActionsType.FETCH_BOOKING_FLIGHT, fetchFlightRequest);
  yield takeLatest(BookingActionsType.CREATE_BOOKING_TICKETS, createTicketsRequest);
}
