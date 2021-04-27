import { FlightsState } from './../../store/ducks/flights/contracts/store';
import axios from 'axios';
import { BookingState } from '../../store/ducks/booking/contracts/store';

export const FlightsApi = {
  fetchFlights: (): Promise<FlightsState['items']> => {
    return axios
      .get('http://localhost:3001/flights?departureCity=Paris&arrivalCity=Lviv')
      .then(({ data }) => data);
  },

  fetchFlight: (flightNumber: string): Promise<BookingState['bookingFlight']> => {
    return axios.get(`/flights/${flightNumber}`).then(({ data }) => data[0]);
  },
};
