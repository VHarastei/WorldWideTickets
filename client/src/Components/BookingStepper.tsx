import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FormikProps } from 'formik';
import React, { useRef } from 'react';
import { PassengerDetailsFormPropsType, PassengerDetailsStep } from './PassengerDetailsStep';
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

function getStepContent(
  stepIndex: number,
  //formRef: React.RefObject<FormikProps<PassengerDetailsFormPropsType & SeatingStepFormPropsType>>,
  formRefs: any,
  nextStep: () => void
) {
  switch (stepIndex) {
    case 0:
      return 'Search';
    case 2:
      return <PassengerDetailsStep formRef={formRefs.passengerDetailsForm} nextStep={nextStep} />;
    case 1:
      return <SeatingStep formRef={formRefs.SeatingForm} nextStep={nextStep} />;
    case 3:
      return 'Overview';
    case 4:
      return 'Payment';
    default:
      return 'Unknown step';
  }
}

export const BookingStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = ['Search', 'Passenger details', 'Seating', 'Overview', 'Payment'];
  const formRefs = {
    passengerDetailsForm: useRef<FormikProps<PassengerDetailsFormPropsType>>(null),
    SeatingForm: useRef<FormikProps<{}>>(null),
  };

  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleNext = () => {
    if (formRefs.SeatingForm.current) {
      formRefs.SeatingForm.current.handleSubmit();
    }
    if (formRefs.passengerDetailsForm.current) {
      formRefs.passengerDetailsForm.current.handleSubmit();
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
      <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <Typography className={classes.titleTrip}> Kyiv → Istanbul</Typography>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>
              {getStepContent(activeStep, formRefs, nextStep)}
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
    </Container>
  );
};
