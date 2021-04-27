export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Flight {
  flightNumber: string;
  departureDate: string;
  arrivalDate: string;
  distance: number;
  departureAirport: FlightAirport;
  arrivalAirport: FlightAirport;
  Airplane: FlightAirplane;
  Company: FlightCompany;
  lowestTicketPrice: number;
}
interface FlightAirport {
  city: string;
  name: string;
}
interface FlightAirplane {
  model: string;
}
interface FlightCompany {
  name: string;
  logoSrc: string;
  rating: number;
}

export interface FlightsState {
  items: Flight[];
  loadingState: LoadingState;
}
