import { Flight } from '../../flights/contracts/store';

export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface BookingFlight extends Flight {
  seats: FlightSeats;
}

export interface FlightSeats {
  economy: FlightSeat[];
  business: FlightSeat[];
  first: FlightSeat[];
}

// i know...
interface FlightSeat {
  0: boolean;
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
  5: boolean;
  6: boolean;
  7: boolean;
  8: boolean;
  9: boolean;
  10: boolean;
  11: boolean;
  12: boolean;
  13: boolean;
  14: boolean;
  15: boolean;
  16: boolean;
  17: boolean;
  18: boolean;
  19: boolean;
  20: boolean;
}

export interface BookingData {
  passengerData?: PassengerData;
  SeatData?: SeatData;
}

export interface SeatData {
  seat: number;
  seatClass: SeatClass;
}

export type SeatClass = 'economy' | 'business' | 'first';

export interface PassengerData {
  firstName: string;
  lastName: string;
  nationality: string;
  dateOfBirth: string;
  email: string;
  phone: string;
}

export interface BookingState {
  bookingFlight?: BookingFlight;
  bookingData: BookingData;
  loadingState: LoadingState;
}
