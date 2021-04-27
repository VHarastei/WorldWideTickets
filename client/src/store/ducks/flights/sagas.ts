import { call, put, takeLatest } from 'redux-saga/effects';
import { FlightsApi } from '../../../services/api/flightsApi';
import { FlightsActionsType, SetFlights, SetFlightsLoadingState } from './actionCreators';
import { LoadingState, FlightsState } from './contracts/store';

export function* fetchFlightsRequest() {
  try {
    const items: FlightsState['items'] = yield call(FlightsApi.fetchFlights);

    // because I have no backend at the moment
    // const items: any = ({} = yield call(FlightsApi.fetchFlights));
    // const newItems = items.map((item: any) => {
    //   const { seats, ...newItem } = item;
    //   return newItem;
    // });

    yield put(SetFlights(items));
    console.log(items);
  } catch (err) {
    yield put(SetFlightsLoadingState(LoadingState.ERROR));
  }
}

export function* flightsSaga() {
  yield takeLatest(FlightsActionsType.FETCH_FLIGHTS, fetchFlightsRequest);
}
