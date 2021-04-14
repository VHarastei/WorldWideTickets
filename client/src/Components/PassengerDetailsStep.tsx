import { Paper, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Field, Form, Formik, FormikProps } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { SetBookingPassengerData } from '../store/ducks/booking/actionCreators';
import { BookingFlight, PassengerData } from '../store/ducks/booking/contracts/store';
import { FlightCard } from './FlightCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    passDetailsFormField: { height: 70 },
  })
);

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passengerDetailsSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Required'),
  nationality: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Required'),
  dateOfBirth: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
});

type PassengerDetailsPropsType = {
  formRef: React.RefObject<FormikProps<PassengerData>>;
  nextStep: () => void;
  flight?: BookingFlight;
};

export const PassengerDetailsStep: React.FC<PassengerDetailsPropsType> = ({
  formRef,
  nextStep,
  flight,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div>
      <Paper className={classes.passDetailsPaper}>
        <Typography className={classes.passDetailsPaperHeader}>Trip summary</Typography>
        <div style={{ margin: -20 }}>
          {flight && (
            <FlightCard
              companyLogoSrc={flight.companyLogoSrc}
              flightId={flight.flightId}
              airplane={flight.airplane}
              departureDate={flight.departureDate}
              departureCity={flight.departureCity}
              arrivalDate={flight.arrivalDate}
              arrivalCity={flight.arrivalCity}
            />
          )}
        </div>
      </Paper>
      <Paper className={classes.passDetailsPaper}>
        <Typography className={classes.passDetailsPaperHeader}>Passenger details</Typography>
        <Formik
          validationSchema={passengerDetailsSchema}
          innerRef={formRef}
          initialValues={
            {
              firstName: '',
              lastName: '',
              nationality: '',
              dateOfBirth: '',
              email: '',
              phone: '',
            } as PassengerData
          }
          onSubmit={(passData: PassengerData, { setSubmitting }) => {
            console.log(passData);
            dispatch(SetBookingPassengerData(passData));
            setSubmitting(false);
            nextStep();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={classes.passDetailsFormFields}>
                <Field
                  className={classes.passDetailsFormField}
                  color="primary"
                  as={TextField}
                  variant="outlined"
                  label="First Name"
                  name="firstName"
                  fullWidth
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName ? errors.firstName : ''}
                />
                <Field
                  className={classes.passDetailsFormField}
                  style={{ marginLeft: 20 }}
                  color="primary"
                  as={TextField}
                  variant="outlined"
                  label="Last Name"
                  name="lastName"
                  fullWidth
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName ? errors.lastName : ''}
                />
              </div>
              <div className={classes.passDetailsFormFields}>
                <Field
                  className={classes.passDetailsFormField}
                  color="primary"
                  as={TextField}
                  variant="outlined"
                  label="Nationality"
                  name="nationality"
                  fullWidth
                  error={Boolean(touched.nationality && errors.nationality)}
                  helperText={touched.nationality ? errors.nationality : ''}
                />

                <Field
                  className={classes.passDetailsFormField}
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
                  error={Boolean(touched.dateOfBirth && errors.dateOfBirth)}
                  helperText={touched.dateOfBirth ? errors.dateOfBirth : ''}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ opacity: '0.8' }} gutterBottom>
                  Contact details
                </Typography>
                <div className={classes.passDetailsFormFields}>
                  <Field
                    className={classes.passDetailsFormField}
                    color="primary"
                    as={TextField}
                    variant="outlined"
                    label="Email"
                    name="email"
                    type="email"
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email ? errors.email : ''}
                  />
                  <Field
                    className={classes.passDetailsFormField}
                    style={{ marginLeft: 20 }}
                    color="primary"
                    as={TextField}
                    variant="outlined"
                    label="Phone"
                    name="phone"
                    type="tel"
                    fullWidth
                    error={Boolean(touched.phone && errors.phone)}
                    helperText={touched.phone ? errors.phone : ''}
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
