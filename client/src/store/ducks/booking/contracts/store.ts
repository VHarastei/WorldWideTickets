import { Flight } from '../../flights/contracts/store';
import { FlightAirplane } from './../../flights/contracts/store';

export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export enum CreateTicketsState {
  CREATED = 'CREATED',
  CREATING = 'CREATING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface BookingFlight extends Flight {
  Airplane: FlightAirplaneWithSeats;
}

export interface BookingFlightPair {
  firstFlight: BookingFlight;
  lastFlight: BookingFlight;
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
  flightNumber: string;
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

export interface BookingData {
  flightNumber?: string[];
  passengerData?: PassengerData;
  seatData?: SeatData[];
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
  bookingFlight?: BookingFlight | BookingFlightPair;
  bookingData: BookingData;
  bookingTickets: BookingTicket[];
  loadingState: LoadingState;
  createTicketsState: CreateTicketsState;
}
