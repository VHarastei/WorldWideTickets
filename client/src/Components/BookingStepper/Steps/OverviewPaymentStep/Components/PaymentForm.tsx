import {
  CircularProgress,
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import valid from 'card-validator';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { NavigationButtons } from '../../../NavigationButtons';
import { PaymentField } from './PaymentField';

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

type PropsType = {
  ticketPrice: number;
  activeStep: number;
  nextStep: () => void;
  handleBack: () => void;
};

export type PaymentData = {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
};

export const PaymentForm: React.FC<PropsType> = ({
  ticketPrice,
  activeStep,
  nextStep,
  handleBack,
}) => {
  const classes = useStyles();

  return (
    <Formik
      validationSchema={paymentSchema}
      initialValues={{ cardNumber: '', expiryDate: '', cvc: '' } as PaymentData}
      onSubmit={(payData: PaymentData) => {
        nextStep();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Paper className={classes.content}>
            <Typography className={classes.contentTitle}>Payment</Typography>
            <div className={classes.paymentContent}>
              <div>
                <div className={classes.contentArticle}>
                  <PaymentOutlinedIcon color="primary" />
                  <Typography component="div" className={classes.contentArticleData}>
                    Total price:
                    {ticketPrice ? (
                      <b>{` ${ticketPrice} USD`}</b>
                    ) : (
                      <CircularProgress
                        size={18}
                        color="primary"
                        thickness={5}
                        style={{ marginLeft: 8 }}
                      />
                    )}
                  </Typography>
                </div>
                <PaymentField
                  name="cardNumber"
                  mask="9999 9999 9999 9999"
                  label="Payment card number"
                  placeholder="0000 0000 0000 0000"
                  touched={touched}
                  errors={errors}
                />
                <div style={{ display: 'flex' }}>
                  <PaymentField
                    name="expiryDate"
                    mask="99/99"
                    label="Expiry Date"
                    placeholder="MM/YY"
                    touched={touched}
                    errors={errors}
                  />
                  <PaymentField
                    name="cvc"
                    mask="999"
                    label="CVC"
                    placeholder="000"
                    marginLeft
                    touched={touched}
                    errors={errors}
                  />
                </div>
              </div>
              <img
                style={{ marginLeft: 20 }}
                src="https://i.ibb.co/0F4FXWV/payLogos.png"
                alt="paymentLogos"
                width="60%"
              />
            </div>
          </Paper>
          <NavigationButtons handleBack={handleBack} activeStep={activeStep} />
        </Form>
      )}
    </Formik>
  );
};

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
