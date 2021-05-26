import {
  Button,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Link,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { FormikErrors, FormikTouched, useFormik } from 'formik';
import React, { ChangeEvent, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { SignInPropsType } from '../services/api/authApi';
import { fetchSignIn } from '../store/ducks/user/actionCreators';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { selectIsSignInError } from '../store/ducks/user/selectors';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialogTitle: {
    fontSize: 26,
    fontWeight: 500,
  },
  form: { margin: '20px 0px' },
  textField: {
    marginBottom: 20,
    height: 70,
  },
  loginBtn: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
  },
  loginBtnIcon: {
    color: theme.palette.secondary.main,
    fontSize: 36,
  },
  loginBtnText: {
    color: 'white',
    size: 22,
    fontWeight: 500,
    marginRight: 8,
  },
  error: {
    marginTop: 10,
    //marginBottom: 20,
    padding: 10,
    //border: '1px solid red',
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

const signInSchema = Yup.object().shape({
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
export type AuthDialogs = 'signIn' | 'signUp';

type PropsType = {
  simplified?: boolean;
};

export const SignInDialog: React.FC<PropsType> = ({ simplified }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const IsSignInError = useSelector(selectIsSignInError);

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: signInSchema,
    onSubmit: (data: SignInPropsType) => {
      console.log(data);
      dispatch(fetchSignIn(data));
    },
  });

  const [openDialog, setOpenDialog] = React.useState<AuthDialogs>();
  const handleOpenDialog = (dialog: AuthDialogs) => {
    setOpenDialog(dialog);
  };
  const handleCloseDialog = () => setOpenDialog(undefined);

  return (
    <div>
      <Button
        onClick={() => handleOpenDialog('signIn')}
        variant={simplified ? 'contained' : 'text'}
        color={simplified ? 'primary' : 'default'}
      >
        <div className={classes.loginBtn}>
          <span className={classes.loginBtnText}>Sign In</span>
          {!simplified && (
            <AccountCircleIcon className={classes.loginBtnIcon} style={{ color: 'orange' }} />
          )}
        </div>
      </Button>

      {openDialog !== undefined && (
        <Dialog maxWidth="xs" onClose={handleCloseDialog} open={true}>
          <DialogTitle onClose={handleCloseDialog}>
            {openDialog === 'signIn' ? 'Continue to your account' : 'Create Account'}
          </DialogTitle>
          <Divider />
          <DialogContent>
            {openDialog === 'signIn' ? (
              <SignInForm handleOpenDialog={handleOpenDialog} />
            ) : (
              <SignUpForm handleOpenDialog={handleOpenDialog} />
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export interface DialogTitleProps {
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = (props: DialogTitleProps) => {
  const classes = useStyles();

  const { children, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography {...other}>
      <Typography className={classes.dialogTitle}>{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};
