import { Container, makeStyles, Paper, Tab } from '@material-ui/core';
import React from 'react';
import { BookingStepper } from '../Components/BookingStepper';
import { FlightCard } from '../Components/FlightCard';
import { Header } from '../Components/Header';
import { SearchFiltersTabs } from '../Components/SearchFiltersTabs';
import { SearchForm } from '../Components/SearchForm';

const useStyles = makeStyles((theme) => ({}));

export const Booking = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <BookingStepper />
    </div>
  );
};
