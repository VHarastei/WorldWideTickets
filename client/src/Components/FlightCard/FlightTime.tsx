import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  flightCardContentTime: {
    fontWeight: 500,
    fontSize: 26,
    lineHeight: '30px',
  },
}));

type FlightDatePropsType = {
  time: string;
  date: string;
  city: string;
};

export const FlightDate: React.FC<FlightDatePropsType> = ({ time, date, city }) => {
  const classes = useStyles();

  return (
    <div style={{ padding: '0px 10px', width: 160 }}>
      <Typography variant="h5" className={classes.flightCardContentTime}>
        {time}
      </Typography>
      <Typography color="textSecondary" variant="body2">
        {date}
      </Typography>
      <Typography color="textSecondary" variant="body2">
        {city}
      </Typography>
    </div>
  );
};
