import { FlightsPayload, FlightsState } from './../../store/ducks/flights/contracts/store';
import axios from 'axios';
import { BookingState } from '../../store/ducks/booking/contracts/store';

export type FetchFlightPayload = {
  whereFrom: string;
  whereTo: string;
  departureDate?: string;
  size?: number;
  page?: number;
};

export const FlightsApi = {
  fetchFlights: ({
    whereFrom,
    whereTo,
    departureDate,
    size = 5,
    page = 1,
  }: FetchFlightPayload): Promise<FlightsPayload> => {
    return axios
      .get(
        `http://localhost:3001/flights?departureCity=${whereFrom}&arrivalCity=${whereTo}&size=${size}&page=${page}`
      )
      .then(({ data }) => data);
  },

  fetchFlight: (flightNumber: string): Promise<BookingState['bookingFlight']> => {
    return axios.get(`http://localhost:3001/flights/${flightNumber}`).then(({ data }) => data);
  },
};
