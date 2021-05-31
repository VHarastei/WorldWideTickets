import { Button, CircularProgress, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserOrders } from '../store/ducks/user/actionCreators';
import { selectIsUserOrdersLoading, selectUserOrders } from '../store/ducks/user/selectors';
import { OrderCard } from './OrderCard';
import AirplaneIcon from '@material-ui/icons/FlightTakeoff';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warning: {
    display: 'flex',
    margin: 'auto',
    width: '45%',
    padding: 20,
  },
  airplaneIcon: {
    fontSize: 150,
    marginRight: 20,
  },
  warningTitle: {
    fontSize: 24,
    fontWeight: 500,
  },
  warningSubTitle: {
    marginBottom: 20,
    fontWeight: 500,
  },
}));

export const UserOrders = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const userOrders = useSelector(selectUserOrders);
  const isLoading = useSelector(selectIsUserOrdersLoading);

  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={classes.container}>
        <CircularProgress size={80} thickness={5} />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      {userOrders.length ? (
        <div style={{ width: '100%' }}>
          {userOrders.map((order, index) => {
            return <OrderCard key={index} order={order} />;
          })}
        </div>
      ) : (
        <Paper className={classes.warning}>
          <AirplaneIcon className={classes.airplaneIcon} color="primary" />
          <div>
            <Typography className={classes.warningTitle}>You don't have any orders</Typography>
            <Typography className={classes.warningSubTitle} color="textSecondary">
              You'll find your orders here when you've booked one.
            </Typography>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="contained" autoFocus color="primary">
                Start exploring
              </Button>
            </Link>
          </div>
        </Paper>
      )}
    </div>
  );
};
