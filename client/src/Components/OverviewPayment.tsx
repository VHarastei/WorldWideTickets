import React from 'react';
import { useSelector } from 'react-redux';
import { selectBookingCost, selectBookingSeatClass } from '../store/ducks/booking/selectors';

export const OverviewPayment: React.FC = () => {
  const seatClass = useSelector(selectBookingSeatClass);
  const totalCost = useSelector(selectBookingCost(seatClass));

  if (totalCost) {
    return (
      <div>
        {seatClass} - {totalCost}
      </div>
    );
  }
  return <div>biba</div>;
};
