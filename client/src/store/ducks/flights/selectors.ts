import { RootState } from './../../store';
import { createSelector } from 'reselect';
import { LoadingState } from './contracts/store';

export const selectFlights = (state: RootState) => state.flights;

export const selectFlightsItems = createSelector(selectFlights, (flights) => flights.items);

export const selectIsFlightsLoaded = (state: RootState) =>
  selectFlights(state).loadingState === LoadingState.LOADED;
