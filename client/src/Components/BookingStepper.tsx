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
import { FetchBookingFlight, SetBookingLoadingState } from '../store/ducks/booking/actionCreators';
import { LoadingState, PassengerData } from '../store/ducks/booking/contracts/store';
import { selectBookingFlight, selectIsFlightLoaded } from '../store/ducks/booking/selectors';
import { LinearPreloader } from './LinearPreloader';
import { OverviewPayment } from './OverviewPayment';
import { PassengerDetailsStep } from './PassengerDetailsStep';
import { SeatingStep } from './SeatingStep';

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
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

// function getStepContent(
//   stepIndex: number,
//   //formRef: React.RefObject<FormikProps<PassengerDetailsFormPropsType & SeatingStepFormPropsType>>,
//   formRefs: any,
//   nextStep: () => void
// ) {
//   switch (stepIndex) {
//     case 0:
//       return 'Search';
//     case 1:
//       return <PassengerDetailsStep formRef={formRefs.passengerDetailsForm} nextStep={nextStep} />;
//     case 2:
//       return <SeatingStep formRef={formRefs.SeatingForm} nextStep={nextStep} />;
//     case 3:
//       return 'Overview & Payment';
//     default:
//       return 'Unknown step';
//   }
// }

export const BookingStepper = () => {
  const classes = useStyles();

  const params: { flightId: string } = useParams();
  const flightId = params.flightId;

  const dispatch = useDispatch();
  const flight = useSelector(selectBookingFlight);

  const IsFlightLoaded = useSelector(selectIsFlightLoaded);

  useEffect(() => {
    if (flightId) {
      dispatch(FetchBookingFlight(flightId));
    }
    return () => {
      dispatch(SetBookingLoadingState(LoadingState.NEVER));
    };
  }, [dispatch, flightId]);

  const [activeStep, setActiveStep] = React.useState(1);
  const steps = ['Search', 'Passenger details', 'Seating', 'Overview & Payment'];
  const formRefs = {
    passengerDetailsForm: useRef<FormikProps<PassengerData>>(null),
    SeatingForm: useRef<FormikProps<{}>>(null),
  };

  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleNext = () => {
    if (formRefs.passengerDetailsForm.current) {
      formRefs.passengerDetailsForm.current.handleSubmit();
    }
    if (formRefs.SeatingForm.current) {
      formRefs.SeatingForm.current.handleSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(1);
  };

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
              {flight?.departureCity} → {flight?.arrivalCity}
            </Typography>
            {activeStep === steps.length ? (
              <div>
                <Typography>All steps completed</Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <div className={classes.instructions}>
                  {activeStep === 1 ? (
                    <PassengerDetailsStep
                      formRef={formRefs.passengerDetailsForm}
                      nextStep={nextStep}
                      flight={flight}
                    />
                  ) : activeStep === 2 ? (
                    <SeatingStep formRef={formRefs.SeatingForm} nextStep={nextStep} /> //give flight.seatings
                  ) : activeStep === 3 ? (
                    <OverviewPayment />
                  ) : null}
                </div>
                <div className={classes.buttonsContainer}>
                  <Button
                    disabled={activeStep === 1}
                    onClick={handleBack}
                    className={classes.backButton}
                    variant="contained"
                    color="primary"
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <LinearPreloader />
      )}
    </Container>
  );
};
