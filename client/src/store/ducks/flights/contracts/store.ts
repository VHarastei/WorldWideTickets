export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Flight {
  flightId: string;
  companyLogoSrc: string;
  airplane: string;
  departureDate: string;
  departureCity: string;
  arrivalDate: string;
  arrivalCity: string;
  cost: FlightCost;
}

interface FlightCost {
  economy: number;
  business: number;
  first: number;
}

export interface FlightsState {
  items: Flight[];
  loadingState: LoadingState;
}
