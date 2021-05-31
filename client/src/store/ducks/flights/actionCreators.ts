import { Action } from 'redux';
import { FetchFlightsPayload } from '../../../services/api/flightsApi';
import { FlightsPayload, LoadingState } from './contracts/store';

export enum FlightsActionsType {
  SET_FLIGHTS = 'flights/SET_FLIGHTS',
  FETCH_FLIGHTS = 'flights/FETCH_FLIGHTS',
  SET_LOADING_STATE = 'flights/SET_LOADING_STATE',
}

export interface SetFlightsActionInterface extends Action<FlightsActionsType> {
  type: FlightsActionsType.SET_FLIGHTS;
  payload: FlightsPayload;
}

export interface FetchFlightsActionInterface extends Action<FlightsActionsType> {
  type: FlightsActionsType.FETCH_FLIGHTS;
  payload: FetchFlightsPayload;
}

export interface SetFlightsLoadingStateActionInterface extends Action<FlightsActionsType> {
  type: FlightsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setFlights = (payload: FlightsPayload): SetFlightsActionInterface => ({
  type: FlightsActionsType.SET_FLIGHTS,
  payload,
});

export const fetchFlights = (payload: FetchFlightsPayload): FetchFlightsActionInterface => ({
  type: FlightsActionsType.FETCH_FLIGHTS,
  payload,
});

export const setFlightsLoadingState = (
  payload: LoadingState
): SetFlightsLoadingStateActionInterface => ({
  type: FlightsActionsType.SET_LOADING_STATE,
  payload,
});

export type FlightsActions =
  | SetFlightsActionInterface
  | FetchFlightsActionInterface
  | SetFlightsLoadingStateActionInterface;
