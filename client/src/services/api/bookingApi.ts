import axios from 'axios';
import { BookingState } from '../../store/ducks/booking/contracts/store';
import { BookingData } from './../../store/ducks/booking/contracts/store';

export const BookingApi = {
  createTicket: (payload: BookingData): Promise<BookingState['bookingTicket']> => {
    return axios.post(`http://localhost:3001/booking`, payload).then(({ data }) => data);
  },
};
