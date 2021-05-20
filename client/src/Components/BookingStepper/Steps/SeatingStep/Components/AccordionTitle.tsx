import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flightAccordionTitle: {
      lineHeight: '24px',
      fontSize: 20,
      fontWeight: 600,
    },
    flightAccordionTitleContainer: {
      display: 'flex',
      alignItems: 'center',
    },
  })
);

type PropsType = {
  currentItem: number;
  totalItems: number;
  logoSrc?: string;
  departureCity: string;
  arrivalCity: string;
};

export const AccordionTitle: React.FC<PropsType> = ({
  currentItem,
  totalItems,
  logoSrc,
  departureCity,
  arrivalCity,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Typography gutterBottom variant="subtitle2" color="textSecondary">
        {`Flight ${currentItem} of ${totalItems}`}
      </Typography>
      <div className={classes.flightAccordionTitleContainer}>
        {logoSrc && <img src={logoSrc} width={75} alt="logo" />}
        <span className={classes.flightAccordionTitle}>{departureCity + ' → ' + arrivalCity}</span>
      </div>
    </div>
  );
};
