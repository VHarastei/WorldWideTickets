import { FlightsState } from './../../store/ducks/flights/contracts/store';
import axios from 'axios';
import { BookingState } from '../../store/ducks/booking/contracts/store';

export type FetchFlightPayload = {
  whereFrom: string;
  whereTo: string;
  departureDate: string;
};

export const FlightsApi = {
  fetchFlights: (payload: FetchFlightPayload): Promise<FlightsState['items']> => {
    return axios
      .get(
        `http://localhost:3001/flights?departureCity=${payload.whereFrom}&arrivalCity=${payload.whereTo}`
      )
      .then(({ data }) => data);
  },

  fetchFlight: (flightNumber: string): Promise<BookingState['bookingFlight']> => {
    return axios.get(`http://localhost:3001/flights/${flightNumber}`).then(({ data }) => data);
  },
};
