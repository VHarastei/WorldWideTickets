import { FlightAirplane } from './../../flights/contracts/store';
import { Flight } from '../../flights/contracts/store';

export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export enum createTicketState {
  CREATED = 'CREATED',
  CREATING = 'CREATING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

//type FlightWithoutPrice = Omit<Flight, 'lowestTicketPrice'>;

export interface BookingFlight extends Omit<Flight, 'lowestTicketPrice'> {
  Airplane: FlightAirplaneWithSeats;
}

interface FlightAirplaneWithSeats extends FlightAirplane {
  model: string;
  Seats: FlightSeat[];
}

export interface FlightSeat {
  seatClass: SeatClass;
  seatNumber: number;
  seatStatus: boolean;
}

export interface SeatData {
  seatNumber: number;
  seatClass: SeatClass;
}

export type SeatClass = 'economy' | 'business' | 'first';

export interface PassengerData {
  firstName: string;
  lastName: string;
  country: string;
  dateOfBirth: string;
  phone: string;
  email: string;
}

interface BookingSeatData extends SeatData {
  flightNumber?: string;
}
export interface BookingData {
  passengerData?: PassengerData;
  seatData?: BookingSeatData;
}

export interface BookingTicket {
  flight: Omit<Flight, 'lowestTicketPrice' | 'arrivalDate' | 'distance'>;
  passenger: {
    firstName: string;
    lastName: string;
  };
  seat: SeatData;
}
export interface BookingState {
  bookingFlight?: BookingFlight;
  bookingData: BookingData;
  bookingTicket?: BookingTicket;
  loadingState: LoadingState;
  createTicketState: createTicketState;
}
