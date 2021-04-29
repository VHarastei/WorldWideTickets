import axios from 'axios';
import { BookingState, SeatClass } from '../../store/ducks/booking/contracts/store';
import { BookingData } from './../../store/ducks/booking/contracts/store';

export const BookingApi = {
  createTicket: (payload: BookingData): Promise<BookingState['bookingTicket']> => {
    return axios.post(`http://localhost:3001/booking`, payload).then(({ data }) => data);
  },
  getPrice: (flightNumber: string, seatClass: SeatClass): Promise<number> => {
    return axios
      .get(
        `http://localhost:3001/booking/price?flightNumber=${flightNumber}&seatClass=${seatClass}`
      )
      .then(({ data }) => data);
  },
};
