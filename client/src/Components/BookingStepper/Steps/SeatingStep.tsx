import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  InputLabel,
  ListItem,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BookingFlight,
  BookingFlightPair,
  FlightSeat,
  SeatClass,
  SeatData,
} from '../../../store/ducks/booking/contracts/store';
import { isPair } from '../../FlightCard/FlightCard';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { useParams } from 'react-router';
import { NavigationButtons } from '../NavigationButtons';
import { setBookingSeatData } from '../../../store/ducks/booking/actionCreators';

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
    seatingInfo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    seatingInfoDescriptionContainer: {
      //display: 'flex',
      maxWidth: 400,
      textAlign: 'center',
    },
    seatingInfoDescription: {
      width: 200,
      padding: 16,
      display: 'inline',
      margin: 'auto',
    },
    flightAccordion: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      //flexDirection: 'column',
    },
    flightAccordionTitle: {
      lineHeight: '24px',
      fontSize: 20,
      fontWeight: 600,
    },
    flightAccordionTitleContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    flightAccordionSelectedSeat: {
      display: 'flex',
      backgroundColor: '#f4f4f4',

      border: '1px solid',
      borderRadius: 8,
      padding: '4px 8px',
      borderColor: theme.palette.primary.main,
      marginRight: 6,
    },
  })
);

type SeatingStepPropsType = {
  flight: BookingFlight | BookingFlightPair;
  activeStep: number;
  nextStep: () => void;
  handleBack: () => void;
};

export const SeatingStep: React.FC<SeatingStepPropsType> = ({
  flight,
  activeStep,
  nextStep,
  handleBack,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const params: { flightNumber: string } = useParams();
  const flightNumber = params.flightNumber;

  let defaultChoosedSeats: SeatData[] = [];
  if (isPair(flight)) {
    defaultChoosedSeats = [
      { flightNumber: flight.firstFlight.flightNumber, seatNumber: 0, seatClass: 'economy' },
      { flightNumber: flight.lastFlight.flightNumber, seatNumber: 0, seatClass: 'economy' },
    ];
  } else {
    defaultChoosedSeats = [
      { flightNumber: flight.flightNumber, seatNumber: 0, seatClass: 'economy' },
    ];
  }

  const [choosedSeats, setChoosedSeats] = React.useState<SeatData[]>(defaultChoosedSeats);

  const handleChooseSeat = (choosedSeat: SeatData) => {
    choosedSeats.forEach((defaultSeat) => {
      // check if new choosedSeat !== prev
      if (
        defaultSeat.flightNumber === choosedSeat.flightNumber &&
        defaultSeat.seatNumber !== choosedSeat.seatNumber
      ) {
        setChoosedSeats((prevChoosedSeats) => {
          return prevChoosedSeats.map((prevDefaultSeat) => {
            // change the seat that we need
            if (prevDefaultSeat.flightNumber === choosedSeat.flightNumber) {
              return choosedSeat;
            }
            return prevDefaultSeat;
          });
        });
      }
    });
  };

  const [chooseSeatErrors, setChooseSeatErrors] = React.useState<number[]>([]);
  const handleNext = () => {
    choosedSeats.forEach((seatData, index) => {
      if (seatData.seatNumber === 0) {
        if (!chooseSeatErrors.includes(index)) {
          setChooseSeatErrors((prev) => [...prev, index]);
        }
      } else {
        setChooseSeatErrors((prev) => {
          if (prev.length > 1) {
            prev.splice(index, 1);
            return prev;
          } else return [];
        });
      }
    });
  };

  useEffect(() => {
    if (!chooseSeatErrors.length) {
      console.log('set');
      //dispatch(setBookingSeatData(choosedSeats));
      //nextStep();
    }
  }, [chooseSeatErrors]);
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleExpand = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {isPair(flight) ? (
        <div>
          <Accordion expanded={expanded === 'panel1'} onChange={handleExpand('panel1')}>
            <AccordionSummary>
              <div className={classes.flightAccordion}>
                <div>
                  <Typography gutterBottom variant="subtitle2" color="textSecondary">
                    Flight 1 of 2
                  </Typography>
                  <div className={classes.flightAccordionTitleContainer}>
                    <img src={flight.firstFlight.Company.logoSrc} width={75} />
                    <span className={classes.flightAccordionTitle}>
                      {flight.firstFlight.departureAirport.city +
                        ' → ' +
                        flight.firstFlight.arrivalAirport.city}
                    </span>
                  </div>
                </div>
                {choosedSeats[0].seatNumber !== 0 ? (
                  <div className={classes.flightAccordionSelectedSeat}>
                    <CheckCircleIcon color="primary" style={{ marginRight: 6 }} />
                    <Typography color="primary">
                      You selected seat {choosedSeats[0].seatNumber}
                    </Typography>
                  </div>
                ) : chooseSeatErrors.includes(0) ? (
                  <div
                    className={classes.flightAccordionSelectedSeat}
                    style={{ borderColor: 'red' }}
                  >
                    <ErrorIcon color="error" style={{ marginRight: 6 }} />
                    <Typography color="error">You must select seat</Typography>
                  </div>
                ) : null}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <ChooseSeatForm handleChooseSeat={handleChooseSeat} flight={flight.firstFlight} />
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleExpand('panel2')}>
            <AccordionSummary>
              <div className={classes.flightAccordion}>
                <div>
                  <Typography gutterBottom variant="subtitle2" color="textSecondary">
                    Flight 2 of 2
                  </Typography>
                  <div className={classes.flightAccordionTitleContainer}>
                    <img src={flight.lastFlight.Company.logoSrc} width={75} />
                    <span className={classes.flightAccordionTitle}>
                      {flight.lastFlight.departureAirport.city +
                        ' → ' +
                        flight.lastFlight.arrivalAirport.city}
                    </span>
                  </div>
                </div>
                {choosedSeats[1].seatNumber !== 0 ? (
                  <div className={classes.flightAccordionSelectedSeat}>
                    <CheckCircleIcon color="primary" style={{ marginRight: 6 }} />
                    <Typography color="primary">
                      You selected seat {choosedSeats[1].seatNumber}
                    </Typography>
                  </div>
                ) : chooseSeatErrors.includes(1) ? (
                  <div
                    className={classes.flightAccordionSelectedSeat}
                    style={{ borderColor: 'red' }}
                  >
                    <ErrorIcon color="error" style={{ marginRight: 6 }} />
                    <Typography color="error">You must select seat</Typography>
                  </div>
                ) : null}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <ChooseSeatForm handleChooseSeat={handleChooseSeat} flight={flight.lastFlight} />
            </AccordionDetails>
          </Accordion>
        </div>
      ) : (
        <ChooseSeatForm handleChooseSeat={handleChooseSeat} flight={flight} />
      )}
      <NavigationButtons
        handleNext={handleNext}
        handleBack={handleBack}
        activeStep={activeStep}
        flightNumber={flightNumber}
      />
    </div>
  );
};

type ChooseSeatFormPropsType = {
  flight: BookingFlight;
  handleChooseSeat: (choosedSeat: SeatData) => void;
};

export const ChooseSeatForm: React.FC<ChooseSeatFormPropsType> = ({ flight, handleChooseSeat }) => {
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
