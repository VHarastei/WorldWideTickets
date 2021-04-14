import { Divider, LinearProgress, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  preloader: {
    marginTop: 25,
  },
  preloaderContent: {
    padding: 20,
  },
  preloaderContentItem: {
    marginTop: 30,
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  preloaderContentTitle: {
    marginBottom: 20,
    textAlign: 'center',
  },
  preloaderTitle: {
    fontSize: 28,
    fontWeight: 500,
  },
}));

export const LinearPreloader: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.preloader}>
      <LinearProgress />
      <div className={classes.preloaderContent}>
        <div className={classes.preloaderContentTitle}>
          <span className={classes.preloaderTitle}>Wait for a few second</span>
        </div>
        <Divider />
        <div className={classes.preloaderContentItem}>
          <img src="https://static.tickets.ua/img/logos_s/PS.png?9e3008e77a" alt="Company logo" />
          <img src="https://static.tickets.ua/img/logos_s/EY.png?9e3008e77a" alt="Company logo" />
          <img src="https://static.tickets.ua/img/logos_s/FR.png?9e3008e77a" alt="Company logo" />
          <img src="https://static.tickets.ua/img/logos_s/TK.png?9e3008e77a" alt="Company logo" />
          <img src="https://static.tickets.ua/img/logos_s/AA.png?9e3008e77a" alt="Company logo" />
          <img src="https://static.tickets.ua/img/logos_s/OS.png?9e3008e77a" alt="Company logo" />
        </div>
      </div>
    </Paper>
  );
};
