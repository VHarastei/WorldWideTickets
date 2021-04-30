import { call, put, takeLatest } from 'redux-saga/effects';
import { FlightsApi } from '../../../services/api/flightsApi';
import {
  FetchFlightsActionInterface,
  FlightsActionsType,
  setFlights,
  setFlightsLoadingState,
} from './actionCreators';
import { FlightsState, LoadingState } from './contracts/store';

export function* fetchFlightsRequest({ payload }: FetchFlightsActionInterface) {
  try {
    const items: FlightsState['items'] = yield call(FlightsApi.fetchFlights, payload);

    yield put(setFlights(items));
  } catch (err) {
    yield put(setFlightsLoadingState(LoadingState.ERROR));
  }
}

export function* flightsSaga() {
  yield takeLatest(FlightsActionsType.FETCH_FLIGHTS, fetchFlightsRequest);
}
