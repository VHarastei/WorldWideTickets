import { AxiosResponse } from 'axios';
import { UserState } from './../../store/ducks/user/contracts/store';
import { instance } from './api';

export type SignInPropsType = {
  email: string;
  password: string;
};

export type SignUpPropsType = {
  email: string;
  username: string;
  phone: string;
  password: string;
};

export const AuthApi = {
  signIn: (payload: SignInPropsType): Promise<UserState['data']> => {
    return instance
      .post(`auth/login`, { username: payload.email, password: payload.password })
      .then(({ data }) => data.data);
  },
  signUp: (payload: SignUpPropsType): Promise<UserState['data']> => {
    return instance.post(`auth/register`, payload).then(({ data }) => data.data);
  },
  getMe: (): Promise<UserState['data']> => {
    return instance.get(`auth/me`).then(({ data }) => data.data);
  },
  verify: (hash: string): Promise<AxiosResponse> => {
    return instance.get(`auth/verify?hash=${hash}`);
  },
};
