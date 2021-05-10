import {
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Field, Form, Formik, FormikProps } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBookingSeatData } from '../../../store/ducks/booking/actionCreators';
import {
  BookingFlight,
  BookingFlightPair,
  FlightSeat,
  SeatClass,
  SeatData,
} from '../../../store/ducks/booking/contracts/store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    seatingPaper: {
      marginBottom: 20,
      padding: 20,
    },
    seatingHeader: {
      fontSize: 24,
      fontWeight: 500,
      paddingBottom: 10,
    },
    seatingDescBtn: {
      width: 30,
    },
    formContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formField: {
      margin: 10,
      width: 150,
      height: 64,
    },
    formSelect: {
      width: 150,
      margin: 10,
      marginBottom: 20,
      height: 56,
    },
    formFieldLabel: {
      top: 9,
      left: 10,
    },
    seatNumber: {
      fontWeight: 500,
      fontSize: 14,
      position: 'absolute',
      bottom: -24,
    },
  })
);

type SeatingStepPropsType = {
  formRef: React.RefObject<FormikProps<{}>>;
  nextStep: () => void;
  flight?: BookingFlight | BookingFlightPair;
};
export const SeatingStep: React.FC<SeatingStepPropsType> = ({ formRef, nextStep, flight }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

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
    setSeatClass(event.target.value as SeatClass);
  };

  const seatClassArr: SeatClass[] = ['economy', 'business', 'first'];
  let initialSeats = false;
  if (!initialSeats) return null;

  return (
    <div>
      <Paper className={classes.seatingPaper}>
        <Typography className={classes.seatingHeader}>Select a seat on the map</Typography>
        <div>
          <div>
            <StyledToggleButton>
              <AirlineSeatReclineNormalIcon />
            </StyledToggleButton>
            <span> — free seating</span>
          </div>
          <div>
            <StyledToggleButton selected>
              <AirlineSeatReclineNormalIcon />
            </StyledToggleButton>
            <span> — choosed seating</span>
          </div>
          <div>
            <StyledToggleButton disabled>
              <AirlineSeatReclineNormalIcon />
            </StyledToggleButton>
            <span> — occupied seating</span>
          </div>
        </div>
        <div className={classes.formContainer}>
          <FormControl variant="outlined">
            <InputLabel className={classes.formFieldLabel}>Seat class</InputLabel>
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
          <Formik
            innerRef={formRef}
            initialValues={{}}
            onSubmit={async (d, { setStatus }) => {
              if (seat) {
                const data: SeatData = {
                  seatNumber: seat,
                  seatClass,
                };
                dispatch(setBookingSeatData(data));
                nextStep();
              } else {
                setStatus({ empty: true });
              }
            }}
          >
            {({ status = { empty: false } }) => (
              <Form>
                <Field
                  color="primary"
                  as={TextField}
                  variant="outlined"
                  label="Seat"
                  name="seat"
                  value={seat !== null ? seat : 'Choose your seat!'}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.formField}
                  error={!!!seat && !!status.empty}
                  helperText={!!!seat && !!status.empty ? 'You must choose seat!' : ''}
                />
              </Form>
            )}
          </Formik>
        </div>
        <List>
          {seatClassArr.map((currentSeatClass, index) => {
            //return (
            // <SeatsByClass
            //   key={index}
            //   seatClass={seatClass}
            //   currentSeatClass={currentSeatClass}
            //   choosedSeat={seat}
            //   initialSeats={initialSeats}
            //   handleSeat={handleSeat}
            // />
            //);
          })}
        </List>
      </Paper>
    </div>
  );
};

type SeatsByClassType = {
  seatClass: SeatClass;
  currentSeatClass: SeatClass;
  choosedSeat: number | null;
  initialSeats: FlightSeat[];
  handleSeat: (event: React.MouseEvent<HTMLElement>, newSeat: number) => void;
};

const SeatsByClass: React.FC<SeatsByClassType> = ({
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
const StyledToggleButton = withStyles((theme) => ({
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
