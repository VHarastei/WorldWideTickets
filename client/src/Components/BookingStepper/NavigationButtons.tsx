import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    link: {
      textDecoration: 'none',
    },
  })
);

type PropsType = {
  handleNext?: () => void;
  handleBack: () => void;
  activeStep: number;
};

export const NavigationButtons: React.FC<PropsType> = React.memo(
  ({ handleNext, handleBack, activeStep }) => {
    const classes = useStyles();
    return (
      <div className={classes.buttonsContainer}>
        <Button
          disabled={activeStep === 1}
          onClick={handleBack}
          className={classes.backButton}
          variant="contained"
          color="primary"
        >
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary" onClick={handleNext}>
          {activeStep === 3 ? `Pay` : 'Next'}
        </Button>
      </div>
    );
  }
);
