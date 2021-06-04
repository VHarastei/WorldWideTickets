import { Paper, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Autocomplete, AutocompleteRenderInputParams } from '@material-ui/lab';
import { Field, Form, Formik } from 'formik';
import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { setBookingPassengerData } from '../../../../store/ducks/booking/actionCreators';
import {
  BookingFlight,
  BookingFlightPair,
  PassengerData
} from '../../../../store/ducks/booking/contracts/store';
import { selectUserData } from '../../../../store/ducks/user/selectors';
import { AboutFlight } from '../../../FlightCard/MoreAboutFlightDialog';
import { NavigationButtons } from '../../NavigationButtons';
import { countries, countryToFlag, CountryType } from './countries';

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
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
  })
);

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const letterRegExp = /^[A-Za-z]+$/;

const passengerDetailsSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .matches(letterRegExp, 'Only English letters')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .matches(letterRegExp, 'Only English letters')
    .required('Required'),
  country: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Required'),
  dateOfBirth: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().matches(phoneRegExp, 'Invalid Phone number').required('Required'),
});

type PassengerDetailsPropsType = {
  flight?: BookingFlight | BookingFlightPair;
  activeStep: number;
  nextStep: () => void;
  handleBack: () => void;
};

export const PassengerDetailsStep: React.FC<PassengerDetailsPropsType> = ({
  flight,
  activeStep,
  nextStep,
  handleBack,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userData = useSelector(selectUserData);

  return (
    <div>
      <Paper className={classes.passDetailsPaper}>
        <Typography className={classes.passDetailsPaperHeader}>Trip summary</Typography>
        <div style={{ margin: -20 }}>{flight && <AboutFlight flight={flight} />}</div>
      </Paper>

      <Formik
        validationSchema={passengerDetailsSchema}
        initialValues={
          {
            firstName: '',
            lastName: '',
            country: '',
            dateOfBirth: '',
            email: userData?.email || '',
            phone: userData?.phone || '',
          } as PassengerData
        }
        onSubmit={(passData: PassengerData) => {
          dispatch(setBookingPassengerData(passData));
          nextStep();
        }}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form>
            <Paper className={classes.passDetailsPaper}>
              <Typography className={classes.passDetailsPaperHeader}>Passenger details</Typography>
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
                <Autocomplete
                  options={countries as CountryType[]}
                  classes={{
                    option: classes.option,
                  }}
                  fullWidth
                  autoHighlight
                  getOptionLabel={(option: CountryType) => option.label}
                  renderOption={(option: CountryType) => (
                    <React.Fragment>
                      <span>{countryToFlag(option.code)}</span>
                      {option.label} ({option.code}) +{option.phone}
                    </React.Fragment>
                  )}
                  onChange={(e: ChangeEvent<{}>, value: CountryType | null) => {
                    if (value) {
                      setFieldValue('country', value.label);
                    }
                  }}
                  renderInput={(params: AutocompleteRenderInputParams) => (
                    <Field
                      component={TextField}
                      {...params}
                      name="country"
                      label="Choose a country"
                      variant="outlined"
                      fullWidth
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                      }}
                      error={Boolean(touched.country && errors.country)}
                      helperText={touched.country ? errors.country : ''}
                    />
                  )}
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
            </Paper>
            <NavigationButtons
              handleBack={handleBack}
              activeStep={activeStep}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
