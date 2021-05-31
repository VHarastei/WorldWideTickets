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
  flight: Flight;
}

export interface Orders {
  items: Order[];
  loadingState: LoadingState;
}

export interface UserState {
  data: User | undefined;
  orders: Orders;
  loadingState: LoadingState;
}
