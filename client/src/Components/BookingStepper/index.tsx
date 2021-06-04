import { Container } from '@material-ui/core';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  fetchBookingFlight,
  setBookingLoadingState,
} from '../../store/ducks/booking/actionCreators';
import {
  BookingFlight,
  BookingFlightPair,
  LoadingState,
} from '../../store/ducks/booking/contracts/store';
import { selectBookingFlight, selectIsFlightLoaded } from '../../store/ducks/booking/selectors';
import { isPair } from '../FlightCard';
import { LinearPreloader } from '../LinearPreloader';
import { DownloadTicketStep } from './Steps/DownloadTicketStep/index';
import { OverviewPaymentStep } from './Steps/OverviewPaymentStep/index';
import { PassengerDetailsStep } from './Steps/PassengerDetailsStep/index';
import { SeatingStep } from './Steps/SeatingStep/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '1032px',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 20,
    },
    stepper: {
      backgroundColor: 'transparent',
      width: '100%',
      padding: '20px 0px',
    },
    titleTrip: {
      fontSize: 36,
      fontWeight: 500,
      paddingBottom: 8,
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },

    backButton: {
      marginRight: theme.spacing(1),
    },
    content: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    link: {
      textDecoration: 'none',
    },
  })
);

export const BookingStepper = React.memo(() => {
  const classes = useStyles();
  const params: { flightNumber: string } = useParams();
  const flightNumber = params.flightNumber;

  const dispatch = useDispatch();

  const flight = useSelector(selectBookingFlight);
  const IsFlightLoaded = useSelector(selectIsFlightLoaded);
  useEffect(() => {
    if (flightNumber) {
      dispatch(fetchBookingFlight(flightNumber));
    }
    return () => {
      dispatch(setBookingLoadingState(LoadingState.NEVER));
    };
  }, [dispatch, flightNumber]);

  const [activeStep, setActiveStep] = React.useState(1);
  const steps = ['Search', 'Passenger details', 'Seating', 'Overview & Payment'];

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  if (activeStep === steps.length) return <DownloadTicketStep />;

  return (
    <Container className={classes.root}>
      {IsFlightLoaded ? (
        <div>
          <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            <Typography className={classes.titleTrip}>
              {flight && isPair(flight)
                ? flight.firstFlight.departureAirport.city +
                  ' → ' +
                  flight.lastFlight.arrivalAirport.city
                : flight?.departureAirport.city + ' → ' + flight?.arrivalAirport.city}
            </Typography>

            <div>
              <div className={classes.content}>
                {flight && getStepContent(activeStep, nextStep, handleBack, flight)}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LinearPreloader />
      )}
    </Container>
  );
});

function getStepContent(
  stepIndex: number,
  nextStep: () => void,
  handleBack: () => void,
  flight: BookingFlight | BookingFlightPair
) {
  switch (stepIndex) {
    case 0:
      return 'Search';
    case 1:
      return (
        <PassengerDetailsStep
          flight={flight}
          nextStep={nextStep}
          handleBack={handleBack}
          activeStep={stepIndex}
        />
      );
    case 2:
      return (
        <SeatingStep
          flight={flight}
          nextStep={nextStep}
          handleBack={handleBack}
          activeStep={stepIndex}
        />
      );
    case 3:
      return (
        <OverviewPaymentStep
          flight={flight}
          nextStep={nextStep}
          handleBack={handleBack}
          activeStep={stepIndex}
        />
      );
    default:
      return 'Unknown step';
  }
}
