import { makeStyles } from '@material-ui/core';
import React from 'react';
import { BookingStepper } from '../Components/BookingStepper';
import { Header } from '../Components/Header';

//const useStyles = makeStyles((theme) => ({}));

export const Booking = () => {
  //const classes = useStyles();

  return (
    <div>
      <Header />
      <BookingStepper />
    </div>
  );
};
