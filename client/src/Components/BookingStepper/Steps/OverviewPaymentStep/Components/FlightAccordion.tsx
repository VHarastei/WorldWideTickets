import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { ChangeEvent } from 'react';
import { BookingFlight, SeatData } from '../../../../../store/ducks/booking/contracts/store';
import { AboutFlight } from '../../../../FlightCard/MoreAboutFlightDialog';
import { AccordionTitle } from '../../SeatingStep/Components/AccordionTitle';
import AirlineSeatIcon from '@material-ui/icons/AirlineSeatReclineNormalOutlined';
import ClassOutlinedIcon from '@material-ui/icons/ClassOutlined';
import { FlightCard } from '../../../../FlightCard/FlightCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flightAccordion: {
      width: '100%',
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'space-between',
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
    contentSubTitle: {
      fontSize: 18,
      fontWeight: 500,
      //paddingTop: 8,
    },
    contentArticle: {
      display: 'flex',
      alignItems: 'center',
      padding: '5px 10px',
    },
    contentArticleData: {
      marginLeft: 6,
      paddingBottom: 2,
    },
    seating: {
      marginBottom: -20,
      marginLeft: 20,
    },
  })
);

type PropsType = {
  flight: BookingFlight;
  handleExpand: (
    panel: string
  ) => ((event: ChangeEvent<{}>, expanded: boolean) => void) | undefined;
  expanded: string | false;
  index: number;
  totalItems: number;
  seatData: SeatData;
};

export const FlightAccordion: React.FC<PropsType> = ({
  flight,
  handleExpand,
  expanded,
  index,
  totalItems,
  seatData,
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
            departureCity={flight.departureAirport.city}
            arrivalCity={flight.arrivalAirport.city}
          />
        </div>
      </AccordionSummary>
      <div>
        <div className={classes.seating}>
          <Typography className={classes.contentSubTitle}>Seating</Typography>
          <div className={classes.contentArticle}>
            <ClassOutlinedIcon color="primary" />
            <Typography className={classes.contentArticleData}>
              Class: {seatData.seatClass}
            </Typography>
          </div>
          <div className={classes.contentArticle}>
            <AirlineSeatIcon color="primary" />
            <Typography className={classes.contentArticleData}>
              Seat: {seatData.seatNumber}
            </Typography>
          </div>
        </div>
        <FlightCard flight={flight} simplified />
        {/* <AboutFlight flight={flight} /> */}
      </div>
    </Accordion>
  );
};
