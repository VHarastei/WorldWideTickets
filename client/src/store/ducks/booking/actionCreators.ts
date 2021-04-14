import { Action } from 'redux';
import { BookingState, LoadingState, PassengerData, SeatData } from './contracts/store';

export enum BookingActionsType {
  SET_BOOKING_FLIGHT = 'booking/SET_BOOKING_FLIGHT',
  FETCH_BOOKING_FLIGHT = 'booking/FETCH_BOOKING_FLIGHT',
  SET_LOADING_STATE = 'booking/SET_LOADING_STATE',
  SET_BOOKING_PASSENGER_DATA = 'booking/SET_BOOKING_PASSENGER_DATA',
  SET_BOOKING_SEAT_DATA = 'booking/SET_BOOKING_SEAT_DATA',
}

export interface SetBookingFlightActionInterface extends Action<BookingActionsType> {
  type: BookingActionsType.SET_BOOKING_FLIGHT;
  payload: BookingState['bookingFlight'];
}

export interface FetchBookingFlightActionInterface extends Action<BookingActionsType> {
  type: BookingActionsType.FETCH_BOOKING_FLIGHT;
  payload: string;
}

export interface SetBookingLoadingStateActionInterface extends Action<BookingActionsType> {
  type: BookingActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}
export interface SetBookingPassengerDataActionInterface extends Action<BookingActionsType> {
  type: BookingActionsType.SET_BOOKING_PASSENGER_DATA;
  payload: PassengerData;
}

export interface SetBookingSeatDataActionInterface extends Action<BookingActionsType> {
  type: BookingActionsType.SET_BOOKING_SEAT_DATA;
  payload: SeatData;
}

export const SetBookingFlight = (
  payload: BookingState['bookingFlight']
): SetBookingFlightActionInterface => ({
  type: BookingActionsType.SET_BOOKING_FLIGHT,
  payload,
});

export const SetBookingPassengerData = (
  payload: PassengerData
): SetBookingPassengerDataActionInterface => ({
  type: BookingActionsType.SET_BOOKING_PASSENGER_DATA,
  payload,
});

export const SetBookingSeatData = (payload: SeatData): SetBookingSeatDataActionInterface => ({
  type: BookingActionsType.SET_BOOKING_SEAT_DATA,
  payload,
});

export const FetchBookingFlight = (payload: string): FetchBookingFlightActionInterface => ({
  type: BookingActionsType.FETCH_BOOKING_FLIGHT,
  payload,
});

export const SetBookingLoadingState = (
  payload: LoadingState
): SetBookingLoadingStateActionInterface => ({
  type: BookingActionsType.SET_LOADING_STATE,
  payload,
});

export type BookingActions =
  | SetBookingFlightActionInterface
  | FetchBookingFlightActionInterface
  | SetBookingLoadingStateActionInterface
  | SetBookingPassengerDataActionInterface
  | SetBookingSeatDataActionInterface;
