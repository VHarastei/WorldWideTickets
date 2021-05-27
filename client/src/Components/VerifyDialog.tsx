import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: { margin: '20px 0px' },
  verifyText: {
    fontSize: 18,
    marginBottom: 20,
  },
}));

type PropsType = {
  handleCloseDialog: () => void;
};

export const VerifyDialog: React.FC<PropsType> = ({ handleCloseDialog }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.verifyText}>
        To confirm your account, please click on the link in the verification email sent to your
        email
      </Typography>
      <Button onClick={handleCloseDialog} fullWidth variant="contained" autoFocus color="primary">
        Close
      </Button>
    </div>
  );
};
