import React from 'react';
import WaitIcon from '@material-ui/icons/PanToolOutlined';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import { SignInDialog } from './SignInDialog';

const useStyles = makeStyles((theme) => ({
  auth: {
    marginTop: 50,
    display: 'flex',
    margin: 'auto',
    width: '45%',
    padding: 20,
  },
  authIcon: {
    fontSize: 125,
    fontWeight: 100,
    marginRight: 20,
  },
  authTitle: {
    fontSize: 24,
    fontWeight: 500,
  },
  authSubTitle: {
    marginBottom: 20,
    fontWeight: 500,
  },
}));

export const AuthWarning = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.auth}>
      <WaitIcon className={classes.authIcon} color="primary" />
      <div>
        <Typography className={classes.authTitle}>Sign in to visit your account</Typography>
        <Typography className={classes.authSubTitle} color="textSecondary">
          You'll be able to access your trips, price alerts, and settings.
        </Typography>
        <SignInDialog simplified />
      </div>
    </Paper>
  );
};
