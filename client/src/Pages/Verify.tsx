import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import CheckIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import { Link, useParams } from 'react-router-dom';
import { AuthApi } from '../services/api/authApi';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    fontSize: 100,
  },
  verify: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
}));

export const Verify = () => {
  const classes = useStyles();

  const params: { hash: string } = useParams();
  const hash = params.hash;

  useEffect(() => {
    if (hash) {
      AuthApi.verify(hash);
    }
  }, [hash]);

  return (
    <div className={classes.container}>
      <Paper className={classes.verify}>
        <CheckIcon color="primary" className={classes.checkIcon} />
        <Typography variant="h6">Thank you</Typography>
        <Typography gutterBottom>You have verified your email</Typography>
        <Link to="/user" style={{ textDecoration: 'none' }}>
          <Button fullWidth variant="contained" autoFocus color="primary">
            Go to the Account page
          </Button>
        </Link>
      </Paper>
    </div>
  );
};
