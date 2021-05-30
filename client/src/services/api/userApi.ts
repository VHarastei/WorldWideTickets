import { UserState } from '../../store/ducks/user/contracts/store';
import { instanse } from './api';

export const UserApi = {
  fetchOrders: (): Promise<UserState['orders']> => {
    return instanse.get(`user/orders`).then(({ data }) => data.data.orders);
  },
};
