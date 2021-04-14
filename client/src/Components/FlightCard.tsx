import { Button, Divider, makeStyles, Paper, Typography } from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  flightCard: {
    marginTop: 20,
  },
  flightCardContent: {
    padding: '20px 10px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    cursor: 'pointer',
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
  // flight: string;
  flightId: string;
  airplane: string;
  departureDate: string;
  departureCity: string;
  arrivalDate: string;
  arrivalCity: string;
  cost?: number;
};

export const FlightCard: React.FC<PropsType> = ({
  companyLogoSrc,
  //flight,
  flightId,
  airplane,
  departureDate,
  departureCity,
  arrivalDate,
  arrivalCity,
  cost,
}) => {
  const classes = useStyles();

  const formattedDepDate = moment(departureDate, 'YYYY-MM-DD hh:mm:ss');
  const formattedArrDate = moment(arrivalDate, 'YYYY-MM-DD hh:mm:ss');

  const depParsedTime = formattedDepDate.format('H:mm');
  const depParsedDate = formattedDepDate.format('D MMMM YYYY, dddd');
  const arrParsedTime = formattedArrDate.format('H:mm');
  const arrParsedDate = formattedArrDate.format('D MMMM YYYY, dddd');

  const inFlDiff = formattedArrDate.diff(formattedDepDate);
  const inFl = moment.utc(inFlDiff).format('H,m').split(',');
  const inFlightTime = `${inFl[0]}h ${inFl[1]}min`;

  return (
    <Paper className={classes.flightCard}>
      <div className={classes.flightCardContent}>
        <div>
          <img src={companyLogoSrc} alt="companyLogo" className={classes.flightCardCompanyLogo} />
        </div>
        <div style={{ width: 180 }}>
          <Typography variant="h5">Flight {flightId}</Typography>
          <Typography variant="body1">Airplane {airplane}</Typography>
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
          </span>
        </div>
        <FlightDate time={arrParsedTime} date={arrParsedDate} city={arrivalCity} />
      </div>
      {cost && (
        <div>
          <Divider />

          <div className={classes.flightCardSelect}>
            <span>Cost:</span>
            <span className={classes.flightCardCostText}>{cost} USD</span>
            <Link to={`/booking/${flightId}`} style={{ textDecoration: 'none' }}>
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
    <div style={{ width: 180 }}>
      <Typography variant="h5" className={classes.flightCardContentTime}>
        {time}
      </Typography>
      <Typography variant="body1">{date}</Typography>
      <Typography variant="body1">{city}</Typography>
    </div>
  );
};
