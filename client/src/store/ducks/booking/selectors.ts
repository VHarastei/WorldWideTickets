// import { RootState } from '../../store';
// import { createSelector } from 'reselect';
// import { LoadingState, SeatClass } from './contracts/store';

// export const selectBooking = (state: RootState) => state.booking;

// export const selectBookingFlight = createSelector(
//   selectBooking,
//   (booking) => booking.bookingFlight
// );

// export const selectBookingFlightSeats = createSelector(
//   selectBookingFlight,
//   (bookingFlight) => bookingFlight?.seats
// );

// export const selectIsFlightLoaded = (state: RootState) =>
//   selectBooking(state).loadingState === LoadingState.LOADED;

// export const selectBookingData = createSelector(selectBooking, (booking) => booking.bookingData);

// export const selectBookingSeatClass = createSelector(
//   selectBookingData,
//   (bookingData) => bookingData.seatData?.seatClass
// );

// export const selectBookingCost = (seatClass: SeatClass | undefined) => (state: RootState) => {
//   if (seatClass) {
//     return state.booking.bookingFlight?.cost[seatClass];
//   }
// };

export default {};
