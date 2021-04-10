import { List, ListItem, MenuItem, Paper, Select, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Field, Form, Formik, FormikProps } from 'formik';
import React from 'react';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    passDetailsPaper: {
      marginBottom: 20,
      padding: 20,
    },
    seatsColumn: {
      width: 150,

      //height: 500,
    },
    seatsColumnItem: {},
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
};
export const SeatingStep: React.FC<SeatingStepPropsType> = ({ formRef, nextStep }) => {
  const classes = useStyles();

  const [seat, setSeat] = React.useState<number | null>(null);

  const handleSeat = (event: React.MouseEvent<HTMLElement>, newSeat: number) => {
    setSeat(newSeat);
  };

  //const [class, setClass] = React.useState('');
  //const [class, setClass] = React.useState<string>('economy');

  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setClass(event.target.value as string);
  // };

  const initialSeats = {
    economy: [
      { 1: false },
      { 2: false },
      { 3: false },
      { 4: false },
      { 5: false },
      { 6: false },
      { 7: true },
      { 8: true },
      { 9: true },
      { 10: false },
      { 11: false },
      { 12: false },
      { 13: false },
      { 14: false },
      { 15: false },
      { 16: false },
      { 17: true },
      { 18: true },
      { 19: true },
      { 20: false },
    ],
    business: [
      { 21: false },
      { 22: false },
      { 23: false },
      { 24: false },
      { 25: false },
      { 26: false },
      { 27: true },
      { 28: true },
      { 29: true },
      { 30: false },
      { 31: false },
      { 32: false },
      { 33: false },
      { 34: false },
      { 35: false },
      { 36: false },
      { 37: true },
      { 38: true },
      { 39: true },
      { 40: false },
    ],
    first: [
      { 41: false },
      { 42: false },
      { 43: false },
      { 44: false },
      { 45: false },
      { 46: false },
      { 47: true },
      { 48: true },
      { 49: true },
      { 50: false },
      { 51: false },
      { 52: false },
      { 53: false },
      { 54: false },
      { 55: false },
      { 56: false },
      { 57: true },
      { 58: true },
      { 59: true },
      { 60: false },
    ],
  };

  return (
    <div>
      <Paper className={classes.passDetailsPaper}>
        {/* <Select value={class} onChange={handleChange}>
        <MenuItem value="economy">economy</MenuItem>
                <MenuItem value="business">business</MenuItem>
                <MenuItem value="first">first</MenuItem>
        </Select> */}
        <Formik
          innerRef={formRef}
          initialValues={{}}
          onSubmit={() => {
            console.log('res', seat);
            nextStep();
          }}
        >
          {() => (
            <Form>
              <Field color="primary" name="class" as={Select} variant="outlined" fullWidth>
                <MenuItem value="economy">economy</MenuItem>
                <MenuItem value="business">business</MenuItem>
                <MenuItem value="first">first</MenuItem>
              </Field>
              <Field
                color="primary"
                as={TextField}
                variant="outlined"
                label="Seat"
                name="seat"
                value={seat !== null ? seat : 'Choose your seat!'}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Form>
          )}
        </Formik>
        <List>
          <StyledListItem button={false as any} selected={true}>
            <StyledToggleButtonGroup value={seat} exclusive onChange={handleSeat}>
              {initialSeats.economy.map((seats, i) =>
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
          <StyledListItem button={false as any} selected={false}>
            <StyledToggleButtonGroup value={seat} exclusive onChange={handleSeat}>
              {initialSeats.business.map((seats, i) =>
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
          <StyledListItem button={false as any} selected={false}>
            <StyledToggleButtonGroup value={seat} exclusive onChange={handleSeat}>
              {initialSeats.first.map((seats, i) =>
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

const StyledToggleButtonGroup = withStyles((theme) => ({
  root: {
    display: 'block',
    //height: 500,
    //width: 330,
    margin: 0,
    border: 'none',
  },
  grouped: {
    '&:not(:first-child)': {
      borderRadius: 8,
      margin: 6,
      marginBottom: 20,
    },
    '&:first-child': {
      borderRadius: 8,
      margin: 6,
      marginBottom: 20,
    },
    '& button': {
      //margin: 6,
    },
  },
  groupedHorizontal: {
    borderRadius: 8,
  },
}))(ToggleButtonGroup);

const StyledListItem = withStyles((theme) => ({
  root: {
    margin: 'auto',
    borderRadius: 4,
    width: 340,
    display: 'flex',
    flexDirection: 'column',
    //height: 500,
    '&$selected': {
      backgroundColor: '#2cb16222',
      transition: '0.5s',
    },
    '&$selected:hover': {
      transition: '0.5s',
      backgroundColor: '#2cb16233',
    },
  },
  selected: {},
}))(ListItem);

const StyledToggleButton = withStyles((theme) => ({
  root: {
    height: 64,
    width: 64,
    borderRadius: 8,
    fontSize: 30,
    padding: 15,
    margin: 5,
    border: '2px solid',
    borderColor: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.light,
    '& span': {
      color: 'white',
      '& svg': {
        fontSize: 34,
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
