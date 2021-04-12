import { CircularProgress, makeStyles } from '@material-ui/core';
import moment from 'moment';
import queryString from 'query-string';
import React from 'react';
import { useLocation } from 'react-router';

const useStyles = makeStyles((theme) => ({
  preloader: {
    height: 'calc(100vh - 75.5px)',
    backgroundImage: 'url(https://clipartart.com/images/world-map-clipart-png-5.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 18,
    opacity: 0.8,
  },
  preloaderTitleContainer: {
    marginTop: 80,
    marginBottom: 10,
  },
  preloaderTitle: {
    fontSize: 28,
    fontWeight: 500,
  },
  preloaderDate: {
    fontSize: 20,
    fontWeight: 500,
  },
}));

export const Preloader: React.FC = () => {
  const classes = useStyles();

  let parsed = queryString.parse(useLocation().search);
  const depParsedDate = moment(parsed.departureDate).format('D MMMM');

  return (
    <div className={classes.preloader}>
      <div className={classes.preloaderTitleContainer}>
        <span className={classes.preloaderTitle}>{parsed.whereFrom}</span>
        <span className={classes.preloaderTitle}> — </span>
        <span className={classes.preloaderTitle}>{parsed.whereTo}</span>
      </div>
      <div>
        <span>Departure: </span>
        <span className={classes.preloaderDate}>{depParsedDate}</span>
      </div>
      <div>
        <span>Wait for a few second. We are looking for a suitable flight</span>
      </div>
      <CircularProgress style={{ margin: 20 }} thickness={5} size={150} color="primary" />
    </div>
  );
};
