import { Button, makeStyles } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { SignUpPropsType } from '../services/api/authApi';
import { AuthDialogs } from './SignInDialog';
import { SignInTextField } from './SignInTextField';

const useStyles = makeStyles((theme) => ({
  form: { margin: '20px 0px' },
  error: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
    padding: 10,
    color: 'red',
    backgroundColor: 'rgba(255, 0, 0, 0.15)',
    borderRadius: 8,
    fontWeight: 500,
  },
  link: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
  },
}));

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const signUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  phone: Yup.string().matches(phoneRegExp, 'Invalid Phone number').required('Required'),
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

type PropsType = {
  handleOpenDialog: (dialog: AuthDialogs) => void;
};

export const SignUpForm: React.FC<PropsType> = ({ handleOpenDialog }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: { email: '', username: '', phone: '', password: '', passwordConfirmation: '' },
    validationSchema: signUpSchema,
    onSubmit: (data: SignUpPropsType) => {
      console.log(data);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <SignInTextField
        handleChange={formik.handleChange}
        label="Email"
        name="email"
        placeholder="e.g. your@email.com"
        touched={formik.touched.email}
        errors={formik.errors.email}
      />
      <SignInTextField
        handleChange={formik.handleChange}
        label="Username"
        name="username"
        placeholder="e.g. JohnDoe"
        touched={formik.touched.username}
        errors={formik.errors.username}
      />
      <SignInTextField
        handleChange={formik.handleChange}
        label="Phone number"
        name="phone"
        touched={formik.touched.phone}
        errors={formik.errors.phone}
      />
      <SignInTextField
        handleChange={formik.handleChange}
        label="Password"
        type="password"
        name="password"
        touched={formik.touched.password}
        errors={formik.errors.password}
      />
      <SignInTextField
        handleChange={formik.handleChange}
        label="Password confirmation"
        type="password"
        name="passwordConfirmation"
        touched={formik.touched.passwordConfirmation}
        errors={formik.errors.passwordConfirmation}
      />
      <Button fullWidth variant="contained" autoFocus type="submit" color="primary">
        Sign Up
      </Button>
    </form>
  );
};
