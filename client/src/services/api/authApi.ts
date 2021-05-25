import { UserState } from './../../store/ducks/user/contracts/store';
import { instanse } from './api';

export type FetchUserPayload = {
  email: string;
  password: string;
};

export const AuthApi = {
  signIn: (payload: FetchUserPayload): Promise<UserState['data']> => {
    return instanse
      .post(`auth/login`, { username: payload.email, password: payload.password })
      .then(({ data }) => data.data);
  },
  getMe: (): Promise<UserState['data']> => {
    return instanse.get(`auth/me`).then(({ data }) => data.data);
  },
};

//@ts-ignore
window.AuthApi = AuthApi;
