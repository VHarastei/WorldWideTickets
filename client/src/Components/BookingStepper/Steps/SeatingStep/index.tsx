import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { setBookingSeatData } from '../../../../store/ducks/booking/actionCreators';
import {
  BookingFlight,
  BookingFlightPair,
  SeatData,
} from '../../../../store/ducks/booking/contracts/store';
import { isPair } from '../../../FlightCard/FlightCard';
import { NavigationButtons } from '../../NavigationButtons';
import { SeatsAccordion } from './Components/SeatsAccordion';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flightAccordion: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
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
    let err: number[] = [];
    choosedSeats.forEach((seatData, index) => {
      if (seatData.seatNumber === 0 && !err.includes(index)) {
        err.push(index);
      } else {
        if (err.includes(index)) {
          err.splice(index, 1);
        }
      }
    });
    setChooseSeatErrors(err);
  };

  let isFirstRender = useRef<boolean>(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      if (chooseSeatErrors.length === 0) {
        dispatch(setBookingSeatData(choosedSeats));
        nextStep();
      }
    }
  }, [dispatch, chooseSeatErrors]);

  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleExpand = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {isPair(flight) ? (
        Object.values(flight).map((fl, index) => {
          return (
            <SeatsAccordion
              key={index}
              flight={fl}
              handleChooseSeat={handleChooseSeat}
              handleExpand={handleExpand}
              expanded={expanded}
              index={index}
              choosedSeat={choosedSeats[index].seatNumber}
              chooseSeatErrors={chooseSeatErrors}
              totalItems={Object.values(flight).length}
            />
          );
        })
      ) : (
        <SeatsAccordion
          flight={flight}
          handleChooseSeat={handleChooseSeat}
          handleExpand={handleExpand}
          expanded={expanded}
          index={0}
          choosedSeat={choosedSeats[0].seatNumber}
          chooseSeatErrors={chooseSeatErrors}
          totalItems={1}
        />
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
