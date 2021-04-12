import { FlightsActionsType, SetFlights, SetFlightsLoadingState } from './actionCreators';
import { FlightsApi } from '../../../services/api/flightsApi';
import { FlightsState, LoadingState } from './contracts/store';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* fetchFlightsRequest() {
  try {
    const items: FlightsState['items'] = yield call(FlightsApi.fetchFlights);
    yield put(SetFlights(items));
  } catch (err) {
    yield put(SetFlightsLoadingState(LoadingState.ERROR));
  }
}

export function* flightsSaga() {
  yield takeLatest(FlightsActionsType.FETCH_FLIGHTS, fetchFlightsRequest);
}
