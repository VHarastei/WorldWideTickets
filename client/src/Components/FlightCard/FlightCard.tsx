import { Button, Divider, makeStyles, Paper, Typography } from '@material-ui/core';
import FlightIcon from '@material-ui/icons/Flight';
import { Rating } from '@material-ui/lab';
import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { Flight, FlightPair } from '../../store/ducks/flights/contracts/store';
import { MoreAboutFlightDialog } from './MoreAboutFlightDialog';

const useStyles = makeStyles((theme) => ({
  flightCard: {
    marginTop: 20,
  },
  flightCardInfo: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flightCardContent: {
    padding: '15px 10px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  flightCardCompanyLogo: { padding: '0px 10px' },
  flightCardContentTime: {
    fontWeight: 500,
    fontSize: 26,
    lineHeight: '30px',
  },
  flightCardContentTimeLineContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 15,
    //marginLeft: -20,
    //marginRight: -20,
  },
  flightCardContentTimeLineSpan: {
    position: 'relative',
    display: 'inline-block',
    width: 140,
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
      backgroundColor: theme.palette.primary.main,
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
      backgroundColor: theme.palette.primary.main,
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
  flightCardContentTimeLineConnection: {
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    content: '""',
    top: 5,
    left: 'inherit',
    right: '50%',
    width: 7,
    height: 7,
    border: 'solid 1px #ced5e2',
    borderRadius: '5px',
    background: '#ffffff',
  },
  flightCardSelect: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  flightCardPriceText: {
    fontSize: 24,
    fontWeight: 700,
    opacity: 0.9,
    margin: '0px 10px',
  },
  flightCardRating: {
    display: 'flex',
    padding: 10,
  },
  flightCardRatingIcon: {
    transform: 'rotate(90deg)',
    opacity: 0.25,
  },
  flightCardRatingText: {
    margin: '0px 10px',
    fontSize: 18,
    fontWeight: 650,
  },
}));

export const isPair = (flightsPair: Flight | FlightPair): flightsPair is FlightPair => {
  return (flightsPair as FlightPair).firstFlight !== undefined;
};

type PropsType = {
  flight: Flight | FlightPair;
  simplified?: boolean;
};

export const FlightCard: React.FC<PropsType> = ({ flight, simplified }) => {
  const classes = useStyles();

  let flightNumber,
    airplane,
    departureDate,
    departureCity,
    arrivalDate,
    arrivalCity,
    price,
    companyLogoSrc,
    companyName,
    companyRating,
    connectionCity,
    flightNumberLink;

  if (isPair(flight)) {
    flightNumber = flight.firstFlight.flightNumber;
    airplane = flight.firstFlight.Airplane.model;
    departureDate = flight.firstFlight.departureDate;
    arrivalDate = flight.lastFlight.arrivalDate;
    departureCity = flight.firstFlight.departureAirport.city;
    arrivalCity = flight.lastFlight.arrivalAirport.city;
    price = flight.firstFlight.lowestTicketPrice + flight.lastFlight.lowestTicketPrice;
    companyLogoSrc = flight.firstFlight.Company.logoSrc;
    companyName = flight.firstFlight.Company.name;
    companyRating = flight.firstFlight.Company.rating;
    connectionCity = flight.lastFlight.departureAirport.city;
    flightNumberLink = flight.firstFlight.flightNumber + '+' + flight.lastFlight.flightNumber;
  } else {
    flightNumber = flight.flightNumber;
    airplane = flight.Airplane.model;
    departureDate = flight.departureDate;
    arrivalDate = flight.arrivalDate;
    departureCity = flight.departureAirport.city;
    arrivalCity = flight.arrivalAirport.city;
    price = flight.lowestTicketPrice;
    companyLogoSrc = flight.Company.logoSrc;
    companyName = flight.Company.name;
    companyRating = flight.Company.rating;
    flightNumberLink = flight.flightNumber;
  }

  const formattedDepDate = moment(departureDate, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  const formattedArrDate = moment(arrivalDate, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]');

  const depParsedTime = formattedDepDate.format('H:mm');
  const depParsedDate = formattedDepDate.format('D MMMM YYYY, dddd');
  const arrParsedTime = formattedArrDate.format('H:mm');
  const arrParsedDate = formattedArrDate.format('D MMMM YYYY, dddd');

  const inFlDiff = formattedArrDate.diff(formattedDepDate);
  const inFl = moment.utc(inFlDiff).format('D,H,m').split(',');
  //const inFlightTime = `${inFl[0]}h ${inFl[1]}min`;
  const inFlightTime = `${inFl[0] === '1' ? '' : +inFl[0] - 1 + 'd'} ${inFl[1]}h ${inFl[2]}min`;

  return (
    <Paper className={classes.flightCard}>
      <div className={classes.flightCardInfo}>
        {/* {companyRating && ( */}
        <div className={classes.flightCardRating}>
          {!simplified && <FlightIcon className={classes.flightCardRatingIcon} />}
          <Typography className={classes.flightCardRatingText}>{companyName}</Typography>
          <Rating defaultValue={companyRating} precision={0.5} readOnly color="primary" />
        </div>
        {/* )} */}
        {!simplified && <MoreAboutFlightDialog flight={flight} />}
      </div>
      {!simplified && <Divider />}

      <div className={classes.flightCardContent}>
        <div>
          <img src={companyLogoSrc} alt="companyLogo" className={classes.flightCardCompanyLogo} />
        </div>
        <div>
          <Typography variant="h5" style={{ fontSize: !simplified ? 22 : 18 }}>
            Flight {flightNumber}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {airplane}
          </Typography>
        </div>
        <FlightDate time={depParsedTime} date={depParsedDate} city={departureCity} />
        <div className={classes.flightCardContentTimeLineContainer}>
          <div>
            <Typography variant="body1" gutterBottom>
              {inFlightTime}
            </Typography>
          </div>
          <span className={classes.flightCardContentTimeLineSpan}>
            <hr className={classes.flightCardContentTimeLine}></hr>
            {connectionCity && <div className={classes.flightCardContentTimeLineConnection}></div>}
          </span>
          {connectionCity && (
            <div>
              <Typography variant="body2" gutterBottom>
                1 connection: {connectionCity}
              </Typography>
            </div>
          )}
        </div>
        <FlightDate time={arrParsedTime} date={arrParsedDate} city={arrivalCity} />
      </div>
      {!simplified && (
        <div>
          <Divider />

          <div className={classes.flightCardSelect}>
            <span>Price:</span>
            <span className={classes.flightCardPriceText}>{price} USD</span>
            <Link to={`/booking/${flightNumberLink}`} style={{ textDecoration: 'none' }}>
              <Button color="secondary" variant="contained">
                Select
              </Button>
            </Link>
          </div>
        </div>
      )}
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
