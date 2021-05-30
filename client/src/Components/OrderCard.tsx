import React from 'react';
import { Order } from '../store/ducks/user/contracts/store';
import AirlineSeatIcon from '@material-ui/icons/AirlineSeatReclineNormalOutlined';
import ClassOutlinedIcon from '@material-ui/icons/ClassOutlined';
import PriceIcon from '@material-ui/icons/MonetizationOnOutlined';
import { createStyles, makeStyles, Typography, Theme, Paper } from '@material-ui/core';
import { FlightCard } from './FlightCard/FlightCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: 20,
      padding: '20px 10px',
    },
    articles: {
      marginBottom: -20,
    },
    article: {
      display: 'flex',
      alignItems: 'center',
      padding: '5px 10px',
    },
    articleData: {
      marginLeft: 6,
      paddingBottom: 2,
    },
  })
);

type PropsType = {
  order: Order;
};

export const OrderCard: React.FC<PropsType> = ({ order }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <div className={classes.articles}>
        <div className={classes.article}>
          <ClassOutlinedIcon color="primary" />
          <Typography className={classes.articleData}>Class: {order.seatClass}</Typography>
        </div>
        <div className={classes.article}>
          <AirlineSeatIcon color="primary" />
          <Typography className={classes.articleData}>Seat: {order.seatNumber}</Typography>
        </div>
        <div className={classes.article}>
          <PriceIcon color="primary" />
          <Typography className={classes.articleData}>Price: {order.price} USD</Typography>
        </div>
      </div>
      <FlightCard flight={order.flight} simplified />
    </Paper>
  );
};
