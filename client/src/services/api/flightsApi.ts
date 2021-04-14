import { FlightsState } from './../../store/ducks/flights/contracts/store';
import axios from 'axios';
import { BookingState } from '../../store/ducks/booking/contracts/store';

export const FlightsApi = {
  fetchFlights: (): Promise<FlightsState['items']> => {
    return axios.get('/flights').then(({ data }) => data);
  },

  fetchFlight: (flightId: string): Promise<BookingState['bookingFlight']> => {
    return axios.get(`/flights?flightId=${flightId}`).then(({ data }) => data[0]);
  },
};
