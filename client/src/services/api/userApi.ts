import { UserState } from '../../store/ducks/user/contracts/store';
import { instance } from './api';

export const UserApi = {
  fetchOrders: (): Promise<UserState['orders']> => {
    return instance.get(`user/orders`).then(({ data }) => data.data.orders);
  },
};
