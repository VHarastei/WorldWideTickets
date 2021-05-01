import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { CreateTicketState, LoadingState } from './contracts/store';

export const selectBooking = (state: RootState) => state.booking;

export const selectBookingFlight = createSelector(
  selectBooking,
  (booking) => booking.bookingFlight
);

export const selectBookingFlightSeats = createSelector(
  selectBookingFlight,
  (bookingFlight) => bookingFlight?.Airplane.Seats
);

export const selectIsFlightLoaded = (state: RootState) =>
  selectBooking(state).loadingState === LoadingState.LOADED;

export const selectBookingData = createSelector(selectBooking, (booking) => booking.bookingData);

export const selectBookingTicket = createSelector(
  selectBooking,
  (booking) => booking.bookingTicket
);

export const selectIsTicketCreated = (state: RootState) =>
  selectBooking(state).createTicketState === CreateTicketState.CREATED;

export const selectIsTicketError = (state: RootState) =>
  selectBooking(state).createTicketState === CreateTicketState.ERROR;
