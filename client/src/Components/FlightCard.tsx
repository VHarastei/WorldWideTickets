import { Button, Divider, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  flightCard: {
    marginTop: 20,
  },
  flightCardContent: {
    padding: '20px 10px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  flightCardCompanyLogo: {
    width: 150,
    marginLeft: -20,
    marginRight: -25,
  },
  flightCardContentTime: {
    fontWeight: 500,
    fontSize: 28,
    lineHeight: '32px',
  },
  flightCardContentTimeLineContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 15,
    marginLeft: -20,
    marginRight: -20,
  },
  flightCardContentTimeLineSpan: {
    position: 'relative',
    display: 'inline-block',
    width: '150px',
    margin: '-5px 0 3px',
  },
  flightCardContentTimeLine: {
    border: 'none',
    position: 'relative',
    height: '2px',
    background: '#ced5e2',
    width: '100%',
    fontWeight: 'normal',
    overflow: 'visible',
    '&:before': {
      position: 'absolute',
      content: '""',
      top: -3,
      left: -3,
      width: 7,
      height: 7,
      border: 'solid 1px #ced5e2',
      borderRadius: '5px',
      background: '#ffffff',
    },
    '&:after': {
      position: 'absolute',
      content: '""',
      top: -3,
      left: 'inherit',
      right: -3,
      width: 7,
      height: 7,
      border: 'solid 1px #ced5e2',
      borderRadius: '5px',
      background: '#ffffff',
    },
  },
  flightCardSelect: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  flightCardCostText: {
    fontSize: 24,
    fontWeight: 700,
    opacity: 0.9,
    margin: '0px 10px',
  },
}));

type PropsType = {
  companyLogoSrc: string;
  flight: string;
  airplane: string;
  departureDate: string;
  departureCity: string;
  arrivalDate: string;
  arrivalCity: string;
  cost: number;
};

export const FlightCard: React.FC<PropsType> = ({
  companyLogoSrc,
  flight,
  airplane,
  departureDate,
  departureCity,
  arrivalDate,
  arrivalCity,
  cost,
}) => {
  const classes = useStyles();

  const inFlightTime = '1h 30min';
  const departureParsedTime = '7:00';
  const departureParsedDate = '16 April 2021, Friday';
  const arrivalParsedTime = '9:30';
  const arrivalParsedDate = '16 April 2021, Friday';

  return (
    <Paper className={classes.flightCard}>
      <div className={classes.flightCardContent}>
        <div>
          <img
            //src="https://static.tickets.ua/img/logos_s/PS.png?9e3008e77a"
            src={companyLogoSrc}
            alt="companyLogo"
            className={classes.flightCardCompanyLogo}
          />
        </div>
        <div style={{ width: 200 }}>
          <Typography variant="h5">Flight {flight}</Typography>
          <Typography variant="body1">Airplane {airplane}</Typography>
        </div>
        <FlightDate time={departureParsedTime} date={departureParsedDate} city={departureCity} />
        <div className={classes.flightCardContentTimeLineContainer}>
          <div>
            <Typography variant="body1" gutterBottom>
              {inFlightTime}
            </Typography>
          </div>
          <span className={classes.flightCardContentTimeLineSpan}>
            <hr className={classes.flightCardContentTimeLine}></hr>
          </span>
        </div>
        <FlightDate time={arrivalParsedTime} date={arrivalParsedDate} city={arrivalCity} />
      </div>
      <Divider />
      <div className={classes.flightCardSelect}>
        <span>Cost:</span>
        <span className={classes.flightCardCostText}>{cost} USD</span>
        <Button color="secondary" variant="contained">
          Select
        </Button>
      </div>
    </Paper>
  );
};

type FlightDatePropsType = {
  time: string;
  date: string;
  city: string;
};

const FlightDate: React.FC<FlightDatePropsType> = ({ time, date, city }) => {
  const classes = useStyles();

  return (
    <div style={{ width: 170 }}>
      <Typography variant="h5" className={classes.flightCardContentTime}>
        {time}
      </Typography>
      <Typography variant="body1">{date}</Typography>
      <Typography variant="body1">{city}</Typography>
    </div>
  );
};
