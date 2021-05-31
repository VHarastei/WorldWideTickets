import { instance } from './api';
import { BookingState, SeatClass } from '../../store/ducks/booking/contracts/store';
import { BookingData } from './../../store/ducks/booking/contracts/store';

export const BookingApi = {
  createTickets: (payload: BookingData): Promise<BookingState['bookingTickets']> => {
    return instance.post(`booking`, payload).then(({ data }) => data);
  },
  getPrice: (flightNumber: string, seatClass: SeatClass): Promise<number> => {
    return instance
      .get(`booking/price?flightNumber=${flightNumber}&seatClass=${seatClass}`)
      .then(({ data }) => data);
  },
};
