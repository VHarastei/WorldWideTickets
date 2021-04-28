import { all } from '@redux-saga/core/effects';
import { bookingSaga } from './ducks/booking/sagas';
import { flightsSaga } from './ducks/flights/sagas';

export function* rootSaga() {
  yield all([flightsSaga(), bookingSaga()]);
}
