import axios from 'axios';

export const instanse = axios.create({
  baseURL: 'http://localhost:3001/',
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
