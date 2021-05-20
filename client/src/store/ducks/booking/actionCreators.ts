import { Action } from 'redux';
import {
  BookingState,
  LoadingState,
  PassengerData,
  SeatData,
  BookingData,
  CreateTicketsState,
} from './contracts/store';

export enum BookingActionsType {
  SET_BOOKING_FLIGHT = 'booking/SET_BOOKING_FLIGHT',
  FETCH_BOOKING_FLIGHT = 'booking/FETCH_BOOKING_FLIGHT',
  SET_LOADING_STATE = 'booking/SET_LOADING_STATE',
  SET_BOOKING_PASSENGER_DATA = 'booking/SET_BOOKING_PASSENGER_DATA',
  SET_BOOKING_SEAT_DATA = 'booking/SET_BOOKING_SEAT_DATA',
  CREATE_BOOKING_TICKETS = 'booking/CREATE_BOOKING_TICKETS',
  SET_BOOKING_TICKETS = 'booking/SET_BOOKING_TICKETS',
  SET_BOOKING_TICKETS_STATE = 'booking/SET_BOOKING_TICKETS_STATE',
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
export interface SetCreateBookingTicketsStateActionInterface extends Action<BookingActionsType> {
  type: BookingActionsType.SET_BOOKING_TICKETS_STATE;
  payload: CreateTicketsState;
}

export interface SetBookingPassengerDataActionInterface extends Action<BookingActionsType> {
  type: BookingActionsType.SET_BOOKING_PASSENGER_DATA;
  payload: PassengerData;
}

export interface SetBookingSeatDataActionInterface extends Action<BookingActionsType> {
  type: BookingActionsType.SET_BOOKING_SEAT_DATA;
  payload: SeatData[];
}

export interface CreateBookingTicketsActionInterface extends Action<BookingActionsType> {
  type: BookingActionsType.CREATE_BOOKING_TICKETS;
  payload: BookingData;
}

export interface SetBookingTicketsActionInterface extends Action<BookingActionsType> {
  type: BookingActionsType.SET_BOOKING_TICKETS;
  payload: BookingState['bookingTickets'];
}

export const setBookingFlight = (
  payload: BookingState['bookingFlight']
): SetBookingFlightActionInterface => ({
  type: BookingActionsType.SET_BOOKING_FLIGHT,
  payload,
});

export const setBookingPassengerData = (
  payload: PassengerData
): SetBookingPassengerDataActionInterface => ({
  type: BookingActionsType.SET_BOOKING_PASSENGER_DATA,
  payload,
});

export const setBookingSeatData = (payload: SeatData[]): SetBookingSeatDataActionInterface => ({
  type: BookingActionsType.SET_BOOKING_SEAT_DATA,
  payload,
});

export const fetchBookingFlight = (payload: string): FetchBookingFlightActionInterface => ({
  type: BookingActionsType.FETCH_BOOKING_FLIGHT,
  payload,
});

export const setBookingLoadingState = (
  payload: LoadingState
): SetBookingLoadingStateActionInterface => ({
  type: BookingActionsType.SET_LOADING_STATE,
  payload,
});

export const setCreateBookingTicketsState = (
  payload: CreateTicketsState
): SetCreateBookingTicketsStateActionInterface => ({
  type: BookingActionsType.SET_BOOKING_TICKETS_STATE,
  payload,
});

export const createBookingTickets = (
  payload: BookingData
): CreateBookingTicketsActionInterface => ({
  type: BookingActionsType.CREATE_BOOKING_TICKETS,
  payload,
});

export const setBookingTickets = (
  payload: BookingState['bookingTickets']
): SetBookingTicketsActionInterface => ({
  type: BookingActionsType.SET_BOOKING_TICKETS,
  payload,
});

export type BookingActions =
  | SetBookingFlightActionInterface
  | FetchBookingFlightActionInterface
  | SetBookingLoadingStateActionInterface
  | SetBookingPassengerDataActionInterface
  | SetBookingSeatDataActionInterface
  | CreateBookingTicketsActionInterface
  | SetBookingTicketsActionInterface
  | SetCreateBookingTicketsStateActionInterface;
