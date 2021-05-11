import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FormikProps } from 'formik';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
  fetchBookingFlight,
  setBookingLoadingState,
} from '../../store/ducks/booking/actionCreators';
import {
  BookingFlight,
  BookingFlightPair,
  LoadingState,
  PassengerData,
} from '../../store/ducks/booking/contracts/store';
import { selectBookingFlight, selectIsFlightLoaded } from '../../store/ducks/booking/selectors';
import { isPair } from '../FlightCard/FlightCard';
import { LinearPreloader } from '../LinearPreloader';
import { DownloadTicketStep } from './Steps/DownloadTicketStep';
import { OverviewPaymentStep, PaymentData } from './Steps/OverviewPaymentStep';
import { PassengerDetailsStep } from './Steps/PassengerDetailsStep';
import { SeatingStep } from './Steps/SeatingStep';

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

export const BookingStepper = () => {
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

  const formRefs: FormRefsType = {
    passengerDetailsForm: useRef<FormikProps<PassengerData>>(null),
    seatingForm: useRef<FormikProps<{}>>(null),
    paymentForm: useRef<FormikProps<PaymentData>>(null),
  };

  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleNext = () => {
    if (formRefs.passengerDetailsForm.current) formRefs.passengerDetailsForm.current.handleSubmit();
    if (formRefs.seatingForm.current) formRefs.seatingForm.current.handleSubmit();
    if (formRefs.paymentForm.current) formRefs.paymentForm.current.handleSubmit();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (activeStep === steps.length) {
    return <DownloadTicketStep />;
  }

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
              {/* {isPair(flight)? flight.firstFlight.departureAirport.city + ' → ' + flight?.arrivalAirport.city : flight?.departureAirport.city + ' → ' + flight?.arrivalAirport.city
              } */}
            </Typography>

            <div>
              <div className={classes.content}>
                {getStepContent(activeStep, formRefs, nextStep, flight)}
              </div>
              <div className={classes.buttonsContainer}>
                <Link
                  to={`/booking/${flightNumber}?step=${activeStep - 1}`}
                  className={classes.link}
                >
                  <Button
                    disabled={activeStep === 1}
                    onClick={handleBack}
                    className={classes.backButton}
                    variant="contained"
                    color="primary"
                  >
                    Back
                  </Button>
                </Link>
                <Link
                  to={`/booking/${flightNumber}?step=${activeStep + 1}`}
                  className={classes.link}
                >
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? `Pay` : 'Next'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LinearPreloader />
      )}
    </Container>
  );
};

type FormRefsType = {
  passengerDetailsForm: React.RefObject<FormikProps<PassengerData>>;
  seatingForm: React.RefObject<FormikProps<{}>>;
  paymentForm: React.RefObject<FormikProps<PaymentData>>;
};

function getStepContent(
  stepIndex: number,
  formRefs: FormRefsType,
  nextStep: () => void,
  flight?: BookingFlight | BookingFlightPair
) {
  switch (stepIndex) {
    case 0:
      return 'Search';
    case 1:
      return (
        <PassengerDetailsStep
          flight={flight}
          formRef={formRefs.passengerDetailsForm}
          nextStep={nextStep}
        />
      );
    case 2:
      return <SeatingStep flight={flight} formRef={formRefs.seatingForm} nextStep={nextStep} />;
    case 3:
      return (
        <OverviewPaymentStep flight={flight} formRef={formRefs.paymentForm} nextStep={nextStep} />
      );
    default:
      return 'Unknown step';
  }
}
