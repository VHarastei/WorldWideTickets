import { Button, Container, makeStyles } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import queryString from 'query-string';
//import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import * as Yup from 'yup';
import { FetchFlightsPayload } from '../services/api/flightsApi';
import { fetchFlights, setFlightsLoadingState } from '../store/ducks/flights/actionCreators';
import { LoadingState } from '../store/ducks/flights/contracts/store';
import { SearchTextField } from './SearchTextField';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginBottom: 10,
  },
  fieldContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paperContainer: {
    maxWidth: 1500,
  },
  form: {
    maxWidth: 1500,
  },
  formTextField: {
    margin: '8px 3px',
    marginBottom: 0,
    width: 200,
    //boxShadow: `0 10px 20px rgba(0,0,0,0.08), 0 10px 10px rgba(0,0,0,0.15)`,
  },
  formSumbmitBtn: {
    boxShadow: `0 10px 20px rgba(0,0,0,0.08), 0 10px 10px rgba(0,0,0,0.15)`,
    margin: 8,
    marginRight: 0,
    padding: '28px 70px',
  },
}));

const searchSchema = Yup.object().shape({
  whereFrom: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Required'),
  whereTo: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .notOneOf([Yup.ref('whereFrom'), null], 'Destination & departure matched') //'Destination may not match with departure city'
    .required('Required'),
  departureDate: Yup.string().required('Required'),
});

export const SearchForm = () => {
  const classes = useStyles();
  let history = useHistory();

  let parsed = queryString.parse(useLocation().search) as unknown as FetchFlightsPayload;

  if (!Object.keys(parsed).length) {
    parsed = { whereFrom: '', whereTo: '', departureDate: '' };
    //parsed = { whereFrom: '', whereTo: '', departureDate: '', arrivalDate: '' };
  }
  const dispatch = useDispatch();

  return (
    <div className={classes.formContainer}>
      <Formik
        validationSchema={searchSchema}
        initialValues={parsed}
        onSubmit={(formData: FetchFlightsPayload) => {
          dispatch(setFlightsLoadingState(LoadingState.NEVER));
          dispatch(fetchFlights(formData));
          history.push({
            pathname: '/search/results',
            search: queryString.stringify(formData),
          });
        }}
      >
        {({ errors, touched }) => (
          <Container component="main" className={classes.paperContainer}>
            <Form className={classes.form}>
              <Field
                color="secondary"
                as={SearchTextField}
                variant="outlined"
                label="Where from"
                name="whereFrom"
                className={classes.formTextField}
                error={Boolean(touched.whereFrom && errors.whereFrom)}
                helperText={touched.whereFrom ? errors.whereFrom : ''}
              />

              <Field
                color="secondary"
                as={SearchTextField}
                variant="outlined"
                label="Where To"
                name="whereTo"
                className={classes.formTextField}
                error={Boolean(touched.whereTo && errors.whereTo)}
                helperText={touched.whereTo ? errors.whereTo : ''}
              />

              <Field
                color="secondary"
                as={SearchTextField}
                variant="outlined"
                name="departureDate"
                type="date"
                label="Departure date"
                className={classes.formTextField}
                InputLabelProps={{
                  shrink: true,
                }}
                error={Boolean(touched.departureDate && errors.departureDate)}
                helperText={touched.departureDate ? errors.departureDate : ''}
              />
              <Field
                color="secondary"
                as={SearchTextField}
                variant="outlined"
                name="arrivalDate"
                type="date"
                label="Arrival date"
                className={classes.formTextField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                className={classes.formSumbmitBtn}
              >
                Search
                {/* <FlightTakeoffIcon/> */}
              </Button>
            </Form>
          </Container>
        )}
      </Formik>
    </div>
  );
};
