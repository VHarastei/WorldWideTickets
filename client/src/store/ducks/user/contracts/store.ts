import { Flight } from './../../flights/contracts/store';
import { SeatClass } from './../../booking/contracts/store';
export enum LoadingState {
  SUCCESS = 'SUCCESS',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface User {
  username: string;
  phone: string;
  email: string;
  token: string;
}

export interface Order {
  price: number;
  seatNumber: number;
  seatClass: SeatClass;
  flight: Flight
}

export interface UserState {
  data: User | undefined;
  orders: Order[]
  loadingState: LoadingState;
}
