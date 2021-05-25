import {
  Button,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { FetchUserPayload } from '../services/api/authApi';
import { fetchSignIn } from '../store/ducks/user/actionCreators';

const signInSchema = Yup.object().shape({
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

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
  form: {
    margin: '20px 0px',
  },
  textField: {
    marginBottom: 20,
    height: 70,
  },
}));

type PropsType = {
  isOpen: boolean;
  handleClose: () => void;
};

export const SignInDialog: React.FC<PropsType> = ({ isOpen, handleClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: (data: FetchUserPayload) => {
      console.log(data);
      dispatch(fetchSignIn(data));
    },
  });

  return (
    <Dialog maxWidth="xs" onClose={handleClose} open={isOpen}>
      <DialogTitle onClose={handleClose}>Continue to your account</DialogTitle>
      <Divider />
      <DialogContent>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <TextField
            fullWidth
            onChange={formik.handleChange}
            variant="outlined"
            color="primary"
            label="Email"
            name="email"
            className={classes.textField}
            error={Boolean(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email ? formik.errors.email : ''}
          />
          <TextField
            onChange={formik.handleChange}
            fullWidth
            variant="outlined"
            color="primary"
            label="Password"
            type="password"
            name="password"
            className={classes.textField}
            error={Boolean(formik.touched.password && formik.errors.password)}
            helperText={formik.touched.password ? formik.errors.password : ''}
          />
          <Button fullWidth variant="contained" autoFocus type="submit" color="primary">
            Sign In
          </Button>
        </form>
      </DialogContent>
    </Dialog>
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
