import { Container, MenuItem, Paper, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Field, Form, Formik, FormikProps } from 'formik';
import React, { useRef } from 'react';
import { FlightCard } from './FlightCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '1032px',
      display: 'flex',
      flexDirection: 'column',
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
    passDetailsPaper: {
      marginBottom: 20,
      padding: 20,
    },
    passDetailsPaperHeader: {
      fontSize: 24,
      fontWeight: 500,
      paddingBottom: 10,
    },
    passDetailsFormFields: {
      display: 'flex',
      marginBottom: 20,
    },
  })
);

function getStepContent(stepIndex: number, formRef: React.RefObject<FormikProps<{}>>) {
  switch (stepIndex) {
    case 0:
      return 'Search';
    case 1:
      return <PassengerDetailsStep formRef={formRef} />;
    case 2:
      return 'Seating';
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
  const formRef = useRef<FormikProps<{}>>(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (formRef.current) {
      formRef.current.handleSubmit();
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
        <Typography className={classes.titleTrip}> Kyiv -{'>'} Istanbul</Typography>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>{getStepContent(activeStep, formRef)}</div>
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

type PassengerDetailsPropsType = {
  formRef: React.RefObject<FormikProps<{}>>;
};
const PassengerDetailsStep: React.FC<PassengerDetailsPropsType> = ({ formRef }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.passDetailsPaper}>
        <Typography className={classes.passDetailsPaperHeader}>Trip summary</Typography>
        <div style={{ margin: -20 }}>
          <FlightCard
            companyLogoSrc="https://static.tickets.ua/img/logos_s/PS.png?9e3008e77a"
            flight="PS-9066"
            flightId="1"
            airplane="Alenia ATR 72"
            departureDate="2021-4-17 6:00:00"
            departureCity="Lviv"
            arrivalDate="2021-4-17 13:30:00"
            arrivalCity="Kyiv"
          />
        </div>
      </Paper>
      <Paper className={classes.passDetailsPaper}>
        <Typography className={classes.passDetailsPaperHeader}>Passenger details</Typography>
        <Formik
          innerRef={formRef}
          initialValues={{
            firstName: '',
            lastName: '',
            nationality: '',
            dateOfBirth: '',
            email: '',
            phone: '',
          }}
          onSubmit={(formData) => {
            console.log(formData);
          }}
        >
          {() => (
            <Form>
              <div className={classes.passDetailsFormFields}>
                <Field
                  color="primary"
                  as={TextField}
                  variant="outlined"
                  label="First Name"
                  name="firstName"
                  fullWidth
                />
                <Field
                  style={{ marginLeft: 20 }}
                  color="primary"
                  as={TextField}
                  variant="outlined"
                  label="Last Name"
                  name="lastName"
                  fullWidth
                />
              </div>
              <div className={classes.passDetailsFormFields}>
                <Field
                  color="primary"
                  as={TextField}
                  variant="outlined"
                  label="Nationality"
                  name="nationality"
                  fullWidth
                />
                <Field name="gender" as={SelectTextField} variant="outlined" />
                <Field
                  style={{ marginLeft: 20 }}
                  as={TextField}
                  label="Date of birth"
                  variant="outlined"
                  name="dateOfBirth"
                  type="date"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div>
                <Typography variant="h6" style={{ opacity: '0.8' }} gutterBottom>
                  Contact details
                </Typography>
                <div className={classes.passDetailsFormFields}>
                  <Field
                    color="primary"
                    as={TextField}
                    variant="outlined"
                    label="Email"
                    name="email"
                    type="email"
                    fullWidth
                  />
                  <Field
                    style={{ marginLeft: 20 }}
                    color="primary"
                    as={TextField}
                    variant="outlined"
                    label="Phone"
                    name="phone"
                    type="tel"
                    fullWidth
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Paper>
    </div>
  );
};

const SelectTextField = () => {
  return (
    <TextField style={{ marginLeft: 20 }} select label="Gender" fullWidth variant="outlined">
      <MenuItem value="male">Male</MenuItem>
      <MenuItem value="female">Female</MenuItem>
    </TextField>
  );
};
