import { RootState } from './../../store';
import { createSelector } from 'reselect';
import { LoadingState } from './contracts/store';

export const selectFlights = (state: RootState) => state.flights;

export const selectFlightsItems = createSelector(selectFlights, (flights) => flights.items);

export const selectIsFlightsLoaded = (state: RootState) =>
  selectFlights(state).loadingState === LoadingState.LOADED;

export const selectIsFlightsLoading = (state: RootState) =>
  selectFlights(state).loadingState === LoadingState.LOADING;

export const selectIsFlightsNever = (state: RootState) =>
  selectFlights(state).loadingState === LoadingState.NEVER;

export const selectIsFlightsError = (state: RootState) =>
  selectFlights(state).loadingState === LoadingState.ERROR;

export const selectTotalPages = (state: RootState) => selectFlights(state).totalPages;
