import { FlightsState } from './../../store/ducks/flights/contracts/store';
import axios from 'axios';

export const FlightsApi = {
  fetchFlights: (): Promise<FlightsState['items']> => {
    return axios.get('http://localhost:3001/flights').then(({ data }) => data);
  },
};
