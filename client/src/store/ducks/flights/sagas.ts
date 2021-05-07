import { call, put, takeLatest } from 'redux-saga/effects';
import { FlightsApi } from '../../../services/api/flightsApi';
import {
  FetchFlightsActionInterface,
  FlightsActionsType,
  setFlights,
  setFlightsLoadingState,
} from './actionCreators';
import { FlightsPayload, LoadingState } from './contracts/store';

export function* fetchFlightsRequest({ payload }: FetchFlightsActionInterface) {
  try {
    const flightsPayload: FlightsPayload = yield call(FlightsApi.fetchFlights, payload);

    yield put(setFlights(flightsPayload));
  } catch (err) {
    yield put(setFlightsLoadingState(LoadingState.ERROR));
  }
}

export function* flightsSaga() {
  yield takeLatest(FlightsActionsType.FETCH_FLIGHTS, fetchFlightsRequest);
}
