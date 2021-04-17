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
import { SetBookingSeatData } from '../../../store/ducks/booking/actionCreators';
import { FlightSeats, SeatClass, SeatData } from '../../../store/ducks/booking/contracts/store';

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
  initialSeats?: FlightSeats;
};
export const SeatingStep: React.FC<SeatingStepPropsType> = ({
  formRef,
  nextStep,
  initialSeats,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [seat, setSeat] = useState<number | null>(null);

  const handleSeat = (event: React.MouseEvent<HTMLElement>, newSeat: number) => {
    if (seatClass === 'economy' && newSeat > 0 && newSeat <= 20) {
      setSeat(newSeat);
    }
    if (seatClass === 'business' && newSeat > 20 && newSeat <= 40) {
      setSeat(newSeat);
    }
    if (seatClass === 'first' && newSeat > 40 && newSeat <= 60) {
      setSeat(newSeat);
    }
  };
  const [seatClass, setSeatClass] = useState<SeatClass>('economy');

  const handleChangeSeatClass = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSeat(null);
    setSeatClass(event.target.value as SeatClass);
  };

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
            onSubmit={(d, { setStatus }) => {
              if (seat) {
                const data: SeatData = {
                  seat: seat,
                  seatClass: seatClass,
                };
                dispatch(SetBookingSeatData(data));
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
          <StyledListItem
            button={false as any}
            disabled={seatClass !== 'economy'}
            selected={seatClass === 'economy'}
          >
            <Typography variant="h6" color="primary">
              Economy class
            </Typography>
            <StyledToggleButtonGroup value={seat} exclusive onChange={handleSeat}>
              {initialSeats?.economy.map((seats, i) =>
                Object.keys(seats).map((item, index) => {
                  return (
                    //@ts-ignore
                    <StyledToggleButton disabled={seats[item]} key={i} value={item}>
                      <AirlineSeatReclineNormalIcon />
                      <span className={classes.seatNumber} style={{ color: 'black' }}>
                        {item}
                      </span>
                    </StyledToggleButton>
                  );
                })
              )}
            </StyledToggleButtonGroup>
          </StyledListItem>
          <StyledListItem
            button={false as any}
            disabled={seatClass !== 'business'}
            selected={seatClass === 'business'}
          >
            <Typography variant="h6" color="primary">
              Business class
            </Typography>
            <StyledToggleButtonGroup value={seat} exclusive onChange={handleSeat}>
              {initialSeats?.business.map((seats, i) =>
                Object.keys(seats).map((item, index) => {
                  return (
                    //@ts-ignore
                    <StyledToggleButton disabled={seats[item]} key={i} value={item}>
                      <AirlineSeatReclineNormalIcon />
                      <span className={classes.seatNumber} style={{ color: 'black' }}>
                        {item}
                      </span>
                    </StyledToggleButton>
                  );
                })
              )}
            </StyledToggleButtonGroup>
          </StyledListItem>
          <StyledListItem
            button={false as any}
            disabled={seatClass !== 'first'}
            selected={seatClass === 'first'}
          >
            <Typography variant="h6" color="primary">
              First class
            </Typography>
            <StyledToggleButtonGroup value={seat} exclusive onChange={handleSeat}>
              {initialSeats?.first.map((seats, i) =>
                Object.keys(seats).map((item, index) => {
                  return (
                    //@ts-ignore
                    <StyledToggleButton disabled={seats[item]} key={i} value={item}>
                      <AirlineSeatReclineNormalIcon />
                      <span className={classes.seatNumber} style={{ color: 'black' }}>
                        {item}
                      </span>
                    </StyledToggleButton>
                  );
                })
              )}
            </StyledToggleButtonGroup>
          </StyledListItem>
        </List>
      </Paper>
    </div>
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
