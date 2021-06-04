import {
  Button,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { VerifyDialog } from '../VerifyDialog';

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

export type AuthDialogs = 'signIn' | 'signUp' | 'verify';

type PropsType = {
  simplified?: boolean;
};

export const SignInDialog: React.FC<PropsType> = ({ simplified }) => {
  const classes = useStyles();

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
            {openDialog === 'signIn' && 'Continue to your account'}
            {openDialog === 'signUp' && 'Create Account'}
            {openDialog === 'verify' && 'Verify your email address'}
          </DialogTitle>
          <Divider />
          <DialogContent>
            {openDialog === 'signIn' && <SignInForm handleOpenDialog={handleOpenDialog} />}
            {openDialog === 'signUp' && <SignUpForm handleOpenDialog={handleOpenDialog} />}
            {openDialog === 'verify' && <VerifyDialog handleCloseDialog={handleCloseDialog} />}
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
