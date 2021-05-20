import { createSelector } from 'reselect';
import { isPair } from '../../../Components/FlightCard/FlightCard';
import { RootState } from '../../store';
import { CreateTicketsState, LoadingState } from './contracts/store';

export const selectBooking = (state: RootState) => state.booking;

export const selectBookingFlight = createSelector(
  selectBooking,
  (booking) => booking.bookingFlight
);

export const selectBookingFlightSeats = createSelector(selectBookingFlight, (bookingFlight) => {
  if (bookingFlight) {
    if (isPair(bookingFlight)) {
      return [bookingFlight.firstFlight.Airplane.Seats, bookingFlight.lastFlight.Airplane.Seats];
    } else {
      return [bookingFlight.Airplane.Seats];
    }
  }
});

export const selectIsFlightLoaded = (state: RootState) =>
  selectBooking(state).loadingState === LoadingState.LOADED;

export const selectBookingData = createSelector(selectBooking, (booking) => booking.bookingData);

export const selectBookingTickets = createSelector(
  selectBooking,
  (booking) => booking.bookingTickets
);

export const selectIsTicketsCreated = (state: RootState) =>
  selectBooking(state).createTicketsState === CreateTicketsState.CREATED;

export const selectIsTicketsError = (state: RootState) =>
  selectBooking(state).createTicketsState === CreateTicketsState.ERROR;
