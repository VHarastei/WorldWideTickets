import { Action } from 'redux';
import { FlightsState, LoadingState } from './contracts/store';

export enum FlightsActionsType {
  SET_FLIGHTS = 'flights/SET_FLIGHTS',
  FETCH_FLIGHTS = 'flights/FETCH_FLIGHTS',
  SET_LOADING_STATE = 'flights/SET_LOADING_STATE',
}

export interface SetFlightsActionInterface extends Action<FlightsActionsType> {
  type: FlightsActionsType.SET_FLIGHTS;
  payload: FlightsState['items'];
}

export interface FetchFlightsActionInterface extends Action<FlightsActionsType> {
  type: FlightsActionsType.FETCH_FLIGHTS;
}

export interface SetFlightsLoadingStateActionInterface extends Action<FlightsActionsType> {
  type: FlightsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const SetFlights = (payload: FlightsState['items']): SetFlightsActionInterface => ({
  type: FlightsActionsType.SET_FLIGHTS,
  payload,
});

export const FetchFlights = (): FetchFlightsActionInterface => ({
  type: FlightsActionsType.FETCH_FLIGHTS,
});

export const SetFlightsLoadingState = (
  payload: LoadingState
): SetFlightsLoadingStateActionInterface => ({
  type: FlightsActionsType.SET_LOADING_STATE,
  payload,
});

export type FlightsActions =
  | SetFlightsActionInterface
  | FetchFlightsActionInterface
  | SetFlightsLoadingStateActionInterface;
