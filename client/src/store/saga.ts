import { all } from '@redux-saga/core/effects';
import { bookingSaga } from './ducks/booking/sagas';
import { flightsSaga } from './ducks/flights/sagas';
import { userSaga } from './ducks/user/sagas';

export function* rootSaga() {
  yield all([flightsSaga(), bookingSaga(), userSaga()]);
}
