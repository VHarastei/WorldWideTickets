import { FlightsActionsType, SetFlights, SetFlightsLoadingState } from './actionCreators';
import { FlightsApi } from '../../../services/api/flightsApi';
import { FlightsState, LoadingState } from './contracts/store';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* fetchFlightsRequest() {
  try {
    //const items: FlightsState['items'] = yield call(FlightsApi.fetchFlights);

    // because I have no backend at the moment
    const items: any = ({} = yield call(FlightsApi.fetchFlights));
    const newItems = items.map((item: any) => {
      const { seats, ...newItem } = item;
      return newItem;
    });

    yield put(SetFlights(newItems));
  } catch (err) {
    yield put(SetFlightsLoadingState(LoadingState.ERROR));
  }
}

export function* flightsSaga() {
  yield takeLatest(FlightsActionsType.FETCH_FLIGHTS, fetchFlightsRequest);
}
