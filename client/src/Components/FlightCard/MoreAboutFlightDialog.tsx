import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  makeStyles,
  Slide,
  Typography,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import FlightIcon from '@material-ui/icons/Flight';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import moment from 'moment';
import React from 'react';
import { Flight, FlightPair } from '../../store/ducks/flights/contracts/store';
import { FlightCard, isPair } from './FlightCard';

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: 10,
    display: 'flex',
  },
  dialogFlightIcon: {
    transform: 'rotate(90deg)',
    opacity: 0.25,
    marginRight: 6,
  },
  dialogTrip: {
    display: 'flex',
    alignItems: 'center',
  },
  dialogTripTitle: {
    fontSize: 23,
    fontWeight: 400,
  },
  dialogFlightContainer: {
    marginTop: -20,
    paddingBottom: 20,
  },
  dialogConnectionTime: {
    //backgroundColor: theme.palette.secondary.main,
    backgroundColor: '#e8e8e8',
    //color: 'white',
    borderRadius: 8,
    textAlign: 'center',
  },
}));

type PropsType = {
  flight: Flight | FlightPair;
};

export const MoreAboutFlightDialog: React.FC<PropsType> = ({ flight }) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  let departureCity, arrivalCity;

  if (isPair(flight)) {
    departureCity = flight.firstFlight.departureAirport.city;
    arrivalCity = flight.lastFlight.arrivalAirport.city;
  } else {
    departureCity = flight.departureAirport.city;
    arrivalCity = flight.arrivalAirport.city;
  }

  return (
    <div className={classes.dialog}>
      <Button onClick={handleOpenDialog}>
        <InfoOutlinedIcon color="primary" style={{ marginRight: 6, fontSize: 30 }} />
        <Typography style={{ fontSize: 18 }} color="textSecondary">
          More about flight
        </Typography>
      </Button>

      <Dialog
        maxWidth="md"
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
      >
        <DialogTitle>More about Flight</DialogTitle>
        <Divider />
        <DialogContent className={classes.dialogTrip}>
          <FlightIcon className={classes.dialogFlightIcon} />
          <span className={classes.dialogTripTitle}>{departureCity}</span>
          <span className={classes.dialogTripTitle} style={{ margin: '0px 6px' }}>
            →
          </span>
          {isPair(flight) && (
            <div>
              <span className={classes.dialogTripTitle}>
                {flight.firstFlight.arrivalAirport.city}
              </span>
              <span className={classes.dialogTripTitle} style={{ margin: '0px 6px' }}>
                →
              </span>
            </div>
          )}
          <span className={classes.dialogTripTitle}>{arrivalCity}</span>
        </DialogContent>
        <AboutFlight flight={flight} />
      </Dialog>
    </div>
  );
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const AboutFlight: React.FC<PropsType> = ({ flight }) => {
  const classes = useStyles();

  let firstArrData, lastDepData;

  if (isPair(flight)) {
    firstArrData = flight.firstFlight.arrivalDate;
    lastDepData = flight.lastFlight.departureDate;
  }
  const formattedFirstArrDate = moment(firstArrData, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  const formattedLastDepDate = moment(lastDepData, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]');

  const diff = formattedLastDepDate.diff(formattedFirstArrDate);
  const connArr = moment.utc(diff).format('D,H,m').split(',');
  const connectionTime = `${connArr[0] === '1' ? '' : +connArr[0] - 1 + 'd'} ${connArr[1]}h ${
    connArr[2]
  }min`;

  return (
    <div className={classes.dialogFlightContainer}>
      {isPair(flight) ? (
        <div>
          <FlightCard flight={flight.firstFlight} simplified />
          <DialogContent>
            <Typography variant="h5" color="textSecondary" className={classes.dialogConnectionTime}>
              Connection time {connectionTime}
            </Typography>
          </DialogContent>
          <FlightCard flight={flight.lastFlight} simplified />
        </div>
      ) : (
        <FlightCard flight={flight} simplified />
      )}
    </div>
  );
};
