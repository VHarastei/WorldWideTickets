import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import React, { ChangeEvent } from 'react';
import { BookingFlight, SeatData } from '../../../../../store/ducks/booking/contracts/store';
import { AccordionTitle } from './AccordionTitle';
import { ChooseSeatForm } from './ChooseSeatForm';

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

type PropsType = {
  flight: BookingFlight;
  handleChooseSeat: (choosedSeat: SeatData) => void;
  handleExpand: (
    panel: string
  ) => ((event: ChangeEvent<{}>, expanded: boolean) => void) | undefined;
  expanded: string | false;
  index: number;
  choosedSeat: number;
  chooseSeatErrors: number[];
  totalItems: number;
};

export const SeatsAccordion: React.FC<PropsType> = React.memo(
  ({
    flight,
    handleChooseSeat,
    handleExpand,
    expanded,
    index,
    choosedSeat,
    chooseSeatErrors,
    totalItems,
  }) => {
    const classes = useStyles();

    return (
      <Accordion
        expanded={expanded === `panel${index + 1}`}
        onChange={handleExpand(`panel${index + 1}`)}
      >
        <AccordionSummary>
          <div className={classes.flightAccordion}>
            <AccordionTitle
              currentItem={index + 1}
              totalItems={totalItems}
              logoSrc={flight.Company.logoSrc}
              departureCity={flight.departureAirport.city}
              arrivalCity={flight.arrivalAirport.city}
            />
            {choosedSeat !== 0 ? (
              <div className={classes.flightAccordionSelectedSeat}>
                <CheckCircleIcon color="primary" style={{ marginRight: 6 }} />
                <Typography color="primary">You selected seat {choosedSeat}</Typography>
              </div>
            ) : chooseSeatErrors.includes(index) ? (
              <div className={classes.flightAccordionSelectedSeat} style={{ borderColor: 'red' }}>
                <ErrorIcon color="error" style={{ marginRight: 6 }} />
                <Typography color="error">You must select seat</Typography>
              </div>
            ) : null}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ChooseSeatForm handleChooseSeat={handleChooseSeat} flight={flight} />
        </AccordionDetails>
      </Accordion>
    );
  }
);
