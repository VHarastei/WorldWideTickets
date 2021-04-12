import { all } from '@redux-saga/core/effects';
import { flightsSaga } from './ducks/flights/sagas';

export function* rootSaga() {
  yield all([flightsSaga()]);
}
