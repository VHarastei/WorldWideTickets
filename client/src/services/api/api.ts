import axios from 'axios';

// axios.interceptors.request.use((config) => {
//   config.headers['token'] = window.localStorage.getItem('token');
//   return config;
// });

axios.defaults.headers.common = { token: window.localStorage.getItem('token') };

export const instanse = axios.create({
  baseURL: 'http://localhost:3001/',
  // headers: {
  //   token: window.localStorage.getItem('token'),
  // },
});

export type FetchFlightsPayload = {
  whereFrom: string;
  whereTo: string;
  departureDate?: string;
  size?: number;
  page?: number;
  sortBy?: SortByType;
};

export type SortByType = 'cheapest' | 'earliest' | 'fastest';
