import React from 'react';
import WaitIcon from '@material-ui/icons/PanToolOutlined';
import { makeStyles, Typography } from '@material-ui/core';
import { SignInDialog } from './SignInDialog';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    backgroundColor: 'white',
  },
  title: {
    margin: 'auto',
    width: 1032,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleUser: {
    display: 'flex',
    alignItems: 'center',
    padding: '25px 0px',
    justifyContent: 'space-between',
  },
  titleAvatar: {
    backgroundColor: theme.palette.secondary.main,
    width: 70,
    height: 70,
    fontSize: 32,
    fontWeight: 500,
    marginRight: 12,
  },
  titleTitle: {
    fontSize: 24,
    fontWeight: 500,
  },
  titleSubTitle: {
    fontSize: 16,
    fontWeight: 500,
  },
  content: {
    margin: 'auto',
    width: 1032,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  auth: {
    marginTop: 70,
    display: 'flex',
    margin: 'auto',
    width: '40%',
  },
  authIcon: {
    fontSize: 125,
    fontWeight: 100,
    marginRight: 20,
  },
  authSubTitle: {
    marginBottom: 20,
    fontWeight: 500,
  },
}));

export const AuthWarning = () => {
  const classes = useStyles();
  return (
    <div className={classes.auth}>
      <WaitIcon className={classes.authIcon} color="primary" />
      <div>
        <Typography className={classes.titleTitle}>Sign in to visit your account</Typography>
        <Typography className={classes.authSubTitle} color="textSecondary">
          You'll be able to access your trips, price alerts, and settings.
        </Typography>
        <SignInDialog simplified />
      </div>
    </div>
  );
};
