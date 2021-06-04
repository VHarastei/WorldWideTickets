import { FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import React, { useState } from 'react';
import {
  BookingFlight,
  SeatClass,
  SeatData,
} from '../../../../../store/ducks/booking/contracts/store';
import { SeatsByClass, StyledToggleButton } from './SeatsByClass';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    seatingPaper: {
      margin: 'auto',
      marginBottom: 20,
      padding: 20,
    },
    seatingHeader: {
      fontSize: 20,
      fontWeight: 500,
      paddingBottom: 10,
    },
    formSelect: {
      width: 150,
      margin: 10,
      marginBottom: 20,
      height: 56,
    },
    formLabel: {
      top: 9,
      left: 10,
    },
    seatingInfo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    seatingInfoDescriptionContainer: {
      maxWidth: 400,
      textAlign: 'center',
    },
    seatingInfoDescription: {
      width: 200,
      padding: 16,
      display: 'inline',
      margin: 'auto',
    },
  })
);

type PropsType = {
  flight: BookingFlight;
  handleChooseSeat: (choosedSeat: SeatData) => void;
};

export const ChooseSeatForm: React.FC<PropsType> = ({ flight, handleChooseSeat }) => {
  const classes = useStyles();

  const [seat, setSeat] = useState<number | null>(null);

  const handleSeat = (event: React.MouseEvent<HTMLElement>, newSeat: number) => {
    if (seatClass === seatClassArr[0] && newSeat > 0 && newSeat <= 20) {
      setSeat(newSeat);
    }
    if (seatClass === seatClassArr[1] && newSeat > 20 && newSeat <= 40) {
      setSeat(newSeat);
    }
    if (seatClass === seatClassArr[2] && newSeat > 40 && newSeat <= 60) {
      setSeat(newSeat);
    }
  };
  const [seatClass, setSeatClass] = useState<SeatClass>('economy');

  const handleChangeSeatClass = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSeat(null);
    handleChooseSeat({ flightNumber: flight.flightNumber, seatNumber: 0, seatClass: 'economy' });
    setSeatClass(event.target.value as SeatClass);
  };

  if (seat && seatClass) {
    handleChooseSeat({ flightNumber: flight.flightNumber, seatNumber: seat, seatClass });
  }

  const seatClassArr: SeatClass[] = ['economy', 'business', 'first'];

  return (
    <Paper className={classes.seatingPaper}>
      <div className={classes.seatingInfo}>
        <Typography className={classes.seatingHeader}>Select a seat on the map</Typography>
        <FormControl variant="outlined">
          <InputLabel className={classes.formLabel}>Seat class</InputLabel>
          <Select
            value={seatClass}
            onChange={handleChangeSeatClass}
            variant="outlined"
            color="primary"
            label="Seat class"
            className={classes.formSelect}
          >
            <MenuItem value="economy">Economy</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="first">First</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.seatingInfoDescriptionContainer}>
          <div className={classes.seatingInfoDescription}>
            <StyledToggleButton>
              <AirlineSeatReclineNormalIcon />
            </StyledToggleButton>
            <span> — free seating</span>
          </div>
          <div className={classes.seatingInfoDescription}>
            <StyledToggleButton selected>
              <AirlineSeatReclineNormalIcon />
            </StyledToggleButton>
            <span> — choosed seating</span>
          </div>
          <div className={classes.seatingInfoDescription}>
            <StyledToggleButton disabled>
              <AirlineSeatReclineNormalIcon />
            </StyledToggleButton>
            <span> — occupied seating</span>
          </div>
        </div>
      </div>
      <div>
        {seatClassArr.map((currentSeatClass, index) => {
          return (
            <SeatsByClass
              key={index}
              seatClass={seatClass}
              currentSeatClass={currentSeatClass}
              choosedSeat={seat}
              initialSeats={flight.Airplane.Seats}
              handleSeat={handleSeat}
            />
          );
        })}
      </div>
    </Paper>
  );
};
