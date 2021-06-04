import { UserState } from './ducks/user/contracts/store';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BookingState } from './ducks/booking/contracts/store';
import { FlightsState } from './ducks/flights/contracts/store';
import { rootReducer } from './rootReducer';
import { rootSaga } from './saga';

export interface RootState {
  flights: FlightsState;
  booking: BookingState;
  user: UserState;
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  //@ts-ignore
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
