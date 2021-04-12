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
  cost: number;
}

export interface FlightsState {
  items: Flight[];
  loadingState: LoadingState;
}
