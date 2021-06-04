import { Button, CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  buttonProgress: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

type PropsType = {
  name: string;
  isLoading: boolean;
};

export const SubmitButton: React.FC<PropsType> = ({ name, isLoading }) => {
  const classes = useStyles();

  return (
    <div style={{ position: 'relative' }}>
      <Button
        disabled={isLoading}
        fullWidth
        variant="contained"
        autoFocus
        type="submit"
        color="primary"
      >
        {name}
      </Button>
      {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
    </div>
  );
};
