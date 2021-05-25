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

export interface UserState {
  data: User | undefined;
  loadingState: LoadingState;
}
