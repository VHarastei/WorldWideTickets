import { FlightsPayload } from './../../store/ducks/flights/contracts/store';
import { BookingState } from '../../store/ducks/booking/contracts/store';
import { instance } from './api';

export type FetchFlightsPayload = {
  whereFrom: string;
  whereTo: string;
  departureDate?: string;
  size?: number;
  page?: number;
  sortBy?: SortByType;
};

export type SortByType = 'cheapest' | 'earliest' | 'fastest';

export const FlightsApi = {
  fetchFlights: ({
    whereFrom,
    whereTo,
    departureDate,
    size = 5,
    page = 1,
    sortBy = 'cheapest',
  }: FetchFlightsPayload): Promise<FlightsPayload> => {
    return instance
      .get(
        `flights?departureCity=${whereFrom}&arrivalCity=${whereTo}&size=${size}&page=${page}&sortBy=${sortBy}`
      )
      .then(({ data }) => data);
  },

  fetchFlight: (flightNumber: string): Promise<BookingState['bookingFlight']> => {
    return instance.get(`flights/${flightNumber}`).then(({ data }) => data);
  },
};
