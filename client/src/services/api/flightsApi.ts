import { FlightsPayload } from './../../store/ducks/flights/contracts/store';
import { BookingState } from '../../store/ducks/booking/contracts/store';
import { FetchFlightsPayload, instanse } from './api';

export const FlightsApi = {
  fetchFlights: ({
    whereFrom,
    whereTo,
    departureDate,
    size = 5,
    page = 1,
    sortBy = 'cheapest',
  }: FetchFlightsPayload): Promise<FlightsPayload> => {
    return instanse
      .get(
        `flights?departureCity=${whereFrom}&arrivalCity=${whereTo}&size=${size}&page=${page}&sortBy=${sortBy}`
      )
      .then(({ data }) => data);
  },

  fetchFlight: (flightNumber: string): Promise<BookingState['bookingFlight']> => {
    return instanse.get(`flights/${flightNumber}`).then(({ data }) => data);
  },
};
