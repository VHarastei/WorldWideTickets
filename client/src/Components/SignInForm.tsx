import { Link, makeStyles } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { SignInPropsType } from '../services/api/authApi';
import { fetchSignIn } from '../store/ducks/user/actionCreators';
import { selectIsAuthError, selectIsAuthLoading } from '../store/ducks/user/selectors';
import { AuthDialogs } from './SignInDialog';
import { SignInTextField } from './SignInTextField';
import { SubmitButton } from './SubmitButton';

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
  buttonProgress: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const signInSchema = Yup.object().shape({
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

type PropsType = {
  handleOpenDialog: (dialog: AuthDialogs) => void;
};

export const SignInForm: React.FC<PropsType> = ({ handleOpenDialog }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const IsSignInError = useSelector(selectIsAuthError);
  const IsSignInLoading = useSelector(selectIsAuthLoading);

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: signInSchema,
    onSubmit: (data: SignInPropsType) => {
      console.log(data);
      dispatch(fetchSignIn(data));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <SignInTextField
        handleChange={formik.handleChange}
        label="Email"
        name="email"
        touched={formik.touched.email}
        errors={formik.errors.email}
      />
      <SignInTextField
        handleChange={formik.handleChange}
        label="Password"
        type="password"
        name="password"
        touched={formik.touched.password}
        errors={formik.errors.password}
      />
      <SubmitButton name={'Sign In'} isLoading={IsSignInLoading} />
      {IsSignInError && <div className={classes.error}>Invalid email or password</div>}
      <Link variant="h6" onClick={() => handleOpenDialog('signUp')} className={classes.link}>
        Don`t have an account? Sign Up here
      </Link>
    </form>
  );
};
