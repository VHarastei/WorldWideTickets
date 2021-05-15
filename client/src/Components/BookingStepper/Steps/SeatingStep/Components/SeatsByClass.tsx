import { ListItem, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import React from 'react';
import { FlightSeat, SeatClass } from '../../../../../store/ducks/booking/contracts/store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    seatNumber: {
      fontWeight: 500,
      fontSize: 14,
      position: 'absolute',
      bottom: -24,
    },
  })
);

type SeatsByClassType = {
  seatClass: SeatClass;
  currentSeatClass: SeatClass;
  choosedSeat: number | null;
  initialSeats: FlightSeat[];
  handleSeat: (event: React.MouseEvent<HTMLElement>, newSeat: number) => void;
};

export const SeatsByClass: React.FC<SeatsByClassType> = ({
  seatClass,
  currentSeatClass,
  choosedSeat,
  initialSeats,
  handleSeat,
}) => {
  const classes = useStyles();

  return (
    <StyledListItem
      button={false as any}
      disabled={seatClass !== currentSeatClass}
      selected={seatClass === currentSeatClass}
    >
      <Typography variant="h6" color="primary">
        {currentSeatClass[0].toUpperCase() + currentSeatClass.slice(1)} class
      </Typography>
      <StyledToggleButtonGroup value={choosedSeat} exclusive onChange={handleSeat}>
        {initialSeats.map((seat, i) => {
          if (seat.seatClass === currentSeatClass) {
            return (
              <StyledToggleButton disabled={seat.seatStatus} key={i} value={seat.seatNumber}>
                <AirlineSeatReclineNormalIcon />
                <span className={classes.seatNumber} style={{ color: 'black' }}>
                  {seat.seatNumber}
                </span>
              </StyledToggleButton>
            );
          } else return null;
        })}
      </StyledToggleButtonGroup>
    </StyledListItem>
  );
};

const StyledListItem = withStyles((theme) => ({
  root: {
    margin: 'auto',
    borderRadius: 4,
    width: 340,
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid transparent',
    transition: '0.5s',
    '&$selected': {
      backgroundColor: 'white',
      boxShadow: `0 10px 20px rgba(0,0,0,0.08), 0 10px 10px rgba(0,0,0,0.15)`,
      transition: '0.5s',
    },
    '&$selected:hover': {
      transition: '0.5s',
      backgroundColor: 'white',
    },
  },
  selected: {},
}))(ListItem);

const StyledToggleButtonGroup = withStyles((theme) => ({
  root: {
    display: 'block',
    margin: 0,
    border: 'none',
    textAlign: 'center',
  },
  grouped: {
    '&:not(:first-child)': {
      height: 64,
      width: 64,
      borderRadius: 8,
      fontSize: 30,
      padding: 15,
      margin: 6,
      marginBottom: 20,
      '& span': {
        color: 'white',
        '& svg': {
          fontSize: 34,
        },
      },
    },
    '&:first-child': {
      height: 64,
      width: 64,
      borderRadius: 8,
      fontSize: 30,
      padding: 15,
      margin: 6,
      marginBottom: 20,
      '& span': {
        color: 'white',
        '& svg': {
          fontSize: 34,
        },
      },
    },
  },
  groupedHorizontal: {
    borderRadius: 8,
  },
}))(ToggleButtonGroup);

export const StyledToggleButton = withStyles((theme) => ({
  root: {
    height: 34,
    width: 34,
    margin: '6px 0px',
    border: '2px solid',
    borderColor: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.light,
    '& span': {
      color: 'white',
      '& svg': {
        fontSize: 24,
      },
    },
    '&:hover': {
      transition: '0.5s',
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    '&$selected': {
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      transition: '0.5s',
    },
    '&$selected:hover': {
      transition: '0.5s',
      backgroundColor: theme.palette.secondary.main,
    },
    '&$disabled': {
      backgroundColor: '#949597',
      borderColor: 'transparent',
      '& span': {
        color: 'lightgray',
      },
    },
  },
  selected: {},
  disabled: {},
}))(ToggleButton);
