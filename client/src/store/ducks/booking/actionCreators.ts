import { Action } from 'redux';
import {
  BookingState,
  LoadingState,
  PassengerData,
  SeatData,
  BookingData,
  CreateTicketState,
} from './contracts/store';

export enum BookingActionsType {
  SET_BOOKING_FLIGHT = 'booking/SET_BOOKING_FLIGHT',
  FETCH_BOOKING_FLIGHT = 'booking/FETCH_BOOKING_FLIGHT',
  SET_LOADING_STATE = 'booking/SET_LOADING_STATE',
  SET_BOOKING_PASSENGER_DATA = 'booking/SET_BOOKING_PASSENGER_DATA',
  SET_BOOKING_SEAT_DATA = 'booking/SET_BOOKING_SEAT_DATA',
  CREATE_BOOKING_TICKET = 'booking/CREATE_BOOKING_TICKET',
  SET_BOOKING_TICKET = 'booking/SET_BOOKING_TICKET',
  SET_BOOKING_TICKET_STATE = 'booking/SET_BOOKING_TICKET_STATE',
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
export interface SetCreateBookingTicketStateActionInterface extends Action<BookingActionsType> {
  type: BookingActionsType.SET_BOOKING_TICKET_STATE;
  payload: CreateTicketState;
}

export interface SetBookingPassengerDataActionInterface extends Action<BookingActionsType> {
  type: BookingActionsType.SET_BOOKING_PASSENGER_DATA;
  payload: PassengerData;
}

export interface SetBookingSeatDataActionInterface extends Action<BookingActionsType> {
  type: BookingActionsType.SET_BOOKING_SEAT_DATA;
  payload: SeatData[];
}

export interface CreateBookingTicketActionInterface extends Action<BookingActionsType> {
  type: BookingActionsType.CREATE_BOOKING_TICKET;
  payload: BookingData;
}

export interface SetBookingTicketActionInterface extends Action<BookingActionsType> {
  type: BookingActionsType.SET_BOOKING_TICKET;
  payload: BookingState['bookingTicket'];
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

export const setCreateBookingTicketState = (
  payload: CreateTicketState
): SetCreateBookingTicketStateActionInterface => ({
  type: BookingActionsType.SET_BOOKING_TICKET_STATE,
  payload,
});

export const createBookingTicket = (payload: BookingData): CreateBookingTicketActionInterface => ({
  type: BookingActionsType.CREATE_BOOKING_TICKET,
  payload,
});

export const setBookingTicket = (
  payload: BookingState['bookingTicket']
): SetBookingTicketActionInterface => ({
  type: BookingActionsType.SET_BOOKING_TICKET,
  payload,
});

export type BookingActions =
  | SetBookingFlightActionInterface
  | FetchBookingFlightActionInterface
  | SetBookingLoadingStateActionInterface
  | SetBookingPassengerDataActionInterface
  | SetBookingSeatDataActionInterface
  | CreateBookingTicketActionInterface
  | SetBookingTicketActionInterface
  | SetCreateBookingTicketStateActionInterface;
