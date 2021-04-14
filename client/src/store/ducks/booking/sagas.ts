import { call, put, takeLatest } from 'redux-saga/effects';
import { FlightsApi } from '../../../services/api/flightsApi';
import {
  BookingActionsType,
  FetchBookingFlightActionInterface,
  SetBookingFlight,
  SetBookingLoadingState,
} from './actionCreators';
import { BookingState, LoadingState } from './contracts/store';

export function* fetchFlightRequest({ payload: flightId }: FetchBookingFlightActionInterface) {
  try {
    const flight: BookingState['bookingFlight'] = yield call(FlightsApi.fetchFlight, flightId);

    yield put(SetBookingFlight(flight));
  } catch (err) {
    yield put(SetBookingLoadingState(LoadingState.ERROR));
  }
}

export function* bookingSaga() {
  yield takeLatest(BookingActionsType.FETCH_BOOKING_FLIGHT, fetchFlightRequest);
}
