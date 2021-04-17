import { createStyles, makeStyles, Paper, TextField, Theme, Typography } from '@material-ui/core';
import AirlineSeatIcon from '@material-ui/icons/AirlineSeatReclineNormalOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import ClassOutlinedIcon from '@material-ui/icons/ClassOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import valid from 'card-validator';
import { Field, Form, Formik, FormikProps } from 'formik';
import React from 'react';
import InputMask from 'react-input-mask';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { BookingFlight } from '../../../store/ducks/booking/contracts/store';
import {
  selectBookingCost,
  selectBookingData,
  selectBookingSeatClass,
} from '../../../store/ducks/booking/selectors';
import { FlightCard } from '../../FlightCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      marginBottom: 20,
      padding: 20,
    },
    paymentContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    contentTitle: {
      fontSize: 24,
      fontWeight: 500,
    },
    contentSubTitle: {
      fontSize: 20,
      fontWeight: 500,
      paddingTop: 10,
    },
    contentFlight: {
      height: 105,
      marginTop: -30,
    },
    contentArticle: {
      display: 'flex',
      alignItems: 'center',
      padding: '5px 10px',
    },
    contentArticleData: {
      marginLeft: 6,
      paddingBottom: 2,
    },
    paymentFormField: {
      height: 70,
      margin: '10px 0px',
    },
  })
);

const paymentSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .test('test-number', 'Credit Card number is invalid', (value) => valid.number(value).isValid)
    .required(),
  expiryDate: Yup.string()
    .typeError('Not a valid expiration date')
    .max(5, 'Not a valid expiration date')
    .matches(/([0-9]{2})\/([0-9]{2})/, 'Not a valid expiration date')
    .test(
      'test-credit-card-expiration-date',
      'Invalid Expiration Date has past',
      (expirationDate) => {
        if (!expirationDate) return false;
        const today = new Date();
        const monthToday = today.getMonth() + 1;
        const yearToday = today.getFullYear().toString().substr(-2);
        const [expMonth, expYear] = expirationDate.split('/');
        if (Number(expYear) < Number(yearToday)) {
          return false;
        } else if (Number(expMonth) < monthToday && Number(expYear) <= Number(yearToday)) {
          return false;
        }
        return true;
      }
    )
    .test('test-credit-card-expiration-date', 'Invalid Expiration Month', (expirationDate) => {
      if (!expirationDate) return false;
      const today = new Date().getFullYear().toString().substr(-2);
      const [expMonth] = expirationDate.split('/');
      if (Number(expMonth) > 12) {
        return false;
      }
      return true;
    })
    .required('Expiration date is required'),
  cvc: Yup.string()
    .typeError('Not a valid CVC')
    .matches(/([0-9]{3})/, 'Not a valid CVC')
    .required('CVC is required'),
});

type PropsType = {
  flight?: BookingFlight;
  formRef: React.RefObject<FormikProps<PaymentData>>;
  nextStep: () => void;
};

export type PaymentData = {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
};

export const OverviewPaymentStep: React.FC<PropsType> = ({ flight, formRef, nextStep }) => {
  const classes = useStyles();

  const seatClass = useSelector(selectBookingSeatClass);
  const totalCost = useSelector(selectBookingCost(seatClass));
  const bookingData = useSelector(selectBookingData);
  const { passengerData, seatData } = bookingData;

  if (!flight) return null;

  return (
    <div>
      <Paper className={classes.content}>
        <Typography className={classes.contentTitle}>Overview</Typography>
        <div>
          <Typography className={classes.contentSubTitle}>Itinerary</Typography>
          <div className={classes.contentArticle}>
            <BusinessOutlinedIcon color="primary" />
            <Typography className={classes.contentArticleData}>
              Flight company: {flight.companyName}
            </Typography>
          </div>

          <div className={classes.contentFlight}>
            <FlightCard
              companyLogoSrc={flight.companyLogoSrc}
              flightId={flight.flightId}
              airplane={flight.airplane}
              departureDate={flight.departureDate}
              departureCity={flight.departureCity}
              arrivalDate={flight.arrivalDate}
              arrivalCity={flight.arrivalCity}
            />
          </div>
        </div>
        <div>
          <Typography className={classes.contentSubTitle}>Passenger</Typography>
          <div className={classes.contentArticle}>
            <PersonOutlineIcon color="primary" />
            <Typography className={classes.contentArticleData}>
              {`${passengerData?.firstName} ${passengerData?.lastName}, ${passengerData?.dateOfBirth}`}
            </Typography>
          </div>
          <div className={classes.contentArticle}>
            <LanguageIcon color="primary" />
            <Typography className={classes.contentArticleData}>
              Country: {passengerData?.nationality}
            </Typography>
          </div>
          <div className={classes.contentArticle}>
            <MailOutlineIcon color="primary" />
            <Typography className={classes.contentArticleData}>{passengerData?.email}</Typography>
          </div>
          <div className={classes.contentArticle}>
            <PhoneOutlinedIcon color="primary" />
            <Typography className={classes.contentArticleData}>{passengerData?.phone}</Typography>
          </div>
        </div>
        <div>
          <Typography className={classes.contentSubTitle}>Seating</Typography>
          <div className={classes.contentArticle}>
            <ClassOutlinedIcon color="primary" />
            <Typography className={classes.contentArticleData}>
              Class: {seatData?.seatClass}
            </Typography>
          </div>
          <div className={classes.contentArticle}>
            <AirlineSeatIcon color="primary" />
            <Typography className={classes.contentArticleData}>Seat: {seatData?.seat}</Typography>
          </div>
        </div>
      </Paper>
      <Paper className={classes.content}>
        <Typography className={classes.contentTitle}>Payment</Typography>
        <div className={classes.paymentContent}>
          <div>
            <div className={classes.contentArticle}>
              <PaymentOutlinedIcon color="primary" />
              <Typography className={classes.contentArticleData}>
                Total cost: <b>{totalCost} USD</b>
              </Typography>
            </div>
            <Formik
              validationSchema={paymentSchema}
              innerRef={formRef}
              initialValues={{ cardNumber: '', expiryDate: '', cvc: '' } as PaymentData}
              onSubmit={(passData: PaymentData, { setSubmitting }) => {
                setSubmitting(false);
                nextStep();
              }}
            >
              {({ errors, touched }) => (
                <Form style={{ marginRight: 20 }}>
                  <Field name="cardNumber">
                    {({ field }: any) => {
                      return (
                        <InputMask
                          {...field}
                          mask="9999 9999 9999 9999"
                          //@ts-ignore
                          maskChar=" "
                        >
                          {(innerProps: any) => (
                            <TextField
                              {...innerProps}
                              variant="outlined"
                              name="cardNumber"
                              label="Payment card number"
                              placeholder="0000 0000 0000 0000"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              fullWidth
                              error={Boolean(touched.cardNumber && errors.cardNumber)}
                              helperText={touched.cardNumber ? errors.cardNumber : ''}
                              className={classes.paymentFormField}
                            />
                          )}
                        </InputMask>
                      );
                    }}
                  </Field>
                  <div style={{ display: 'flex' }}>
                    <Field name="expiryDate">
                      {({ field }: any) => {
                        return (
                          <InputMask
                            {...field}
                            mask="99/99"
                            //@ts-ignore
                            maskChar=" "
                          >
                            {(innerProps: any) => (
                              <TextField
                                {...innerProps}
                                variant="outlined"
                                name="expiryDate"
                                label="Expiry Date"
                                placeholder="MM/YY"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                fullWidth
                                error={Boolean(touched.expiryDate && errors.expiryDate)}
                                helperText={touched.expiryDate ? errors.expiryDate : ''}
                                className={classes.paymentFormField}
                              />
                            )}
                          </InputMask>
                        );
                      }}
                    </Field>
                    <Field name="cvc">
                      {({ field }: any) => {
                        return (
                          <InputMask
                            {...field}
                            mask="999"
                            //@ts-ignore
                            maskChar=" "
                          >
                            {(innerProps: any) => (
                              <TextField
                                {...innerProps}
                                variant="outlined"
                                name="cvc"
                                label="CVC"
                                placeholder="000"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                fullWidth
                                error={Boolean(touched.cvc && errors.cvc)}
                                helperText={touched.cvc ? errors.cvc : ''}
                                className={classes.paymentFormField}
                                style={{ marginLeft: 20 }}
                              />
                            )}
                          </InputMask>
                        );
                      }}
                    </Field>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <img src="https://i.ibb.co/0F4FXWV/payLogos.png" alt="paymentLogos" width="60%" />
        </div>
      </Paper>
    </div>
  );
};
