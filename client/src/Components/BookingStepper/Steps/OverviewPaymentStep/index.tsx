import { createStyles, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BookingApi } from '../../../../services/api/bookingApi';
import { BookingFlight, BookingFlightPair } from '../../../../store/ducks/booking/contracts/store';
import { selectBookingData } from '../../../../store/ducks/booking/selectors';
import { isPair } from '../../../FlightCard';
import { FlightAccordion } from './Components/FlightAccordion';
import { PaymentForm } from './Components/PaymentForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      marginBottom: 20,
      padding: 20,
    },
    contentTitle: {
      fontSize: 24,
      fontWeight: 500,
    },
    contentSubTitle: {
      fontSize: 20,
      fontWeight: 500,
      paddingTop: 10,
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
  })
);

type PropsType = {
  flight?: BookingFlight | BookingFlightPair;
  activeStep: number;
  nextStep: () => void;
  handleBack: () => void;
};

export type PaymentData = {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
};

export const OverviewPaymentStep: React.FC<PropsType> = ({
  flight,
  activeStep,
  nextStep,
  handleBack,
}) => {
  const classes = useStyles();

  const [ticketPrice, setTicketPrice] = useState(0);
  const bookingData = useSelector(selectBookingData);
  const { passengerData, seatData } = bookingData;

  useEffect(() => {
    if (flight && seatData?.length) {
      const getPrices = async () =>
        await Promise.all(
          seatData.map(async (data) => await BookingApi.getPrice(data.flightNumber, data.seatClass))
        );

      getPrices().then((prices) => {
        let price = 0;
        prices?.forEach((p) => (price += p));
        setTicketPrice(price);
      });
    }
  }, [flight, seatData]);

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleExpand = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!flight || !seatData) return null;
  return (
    <div>
      <Paper className={classes.content}>
        <Typography className={classes.contentTitle}>Overview</Typography>
        <Typography className={classes.contentSubTitle}>Itenary</Typography>
        <div>
          {isPair(flight) ? (
            Object.values(flight).map((fl, index) => {
              return (
                <FlightAccordion
                  key={index}
                  flight={fl}
                  handleExpand={handleExpand}
                  expanded={expanded}
                  index={index}
                  totalItems={Object.values(flight).length}
                  seatData={seatData[index]}
                />
              );
            })
          ) : (
            <FlightAccordion
              flight={flight}
              handleExpand={handleExpand}
              expanded={expanded}
              index={0}
              totalItems={1}
              seatData={seatData[0]}
            />
          )}
        </div>
        <div>
          <Typography className={classes.contentSubTitle}>Passenger</Typography>
          <div className={classes.contentArticle}>
            <PersonOutlineIcon color="primary" />
            <Typography className={classes.contentArticleData}>
              {`${passengerData?.firstName} ${passengerData?.lastName}, ${passengerData?.dateOfBirth}`}
            </Typography>
          </div>
          <div className={classes.contentArticle}>
            <LanguageIcon color="primary" />
            <Typography className={classes.contentArticleData}>
              Country: {passengerData?.country}
            </Typography>
          </div>
          <div className={classes.contentArticle}>
            <MailOutlineIcon color="primary" />
            <Typography className={classes.contentArticleData}>{passengerData?.email}</Typography>
          </div>
          <div className={classes.contentArticle}>
            <PhoneOutlinedIcon color="primary" />
            <Typography className={classes.contentArticleData}>{passengerData?.phone}</Typography>
          </div>
        </div>
      </Paper>
      <div>
        <PaymentForm
          ticketPrice={ticketPrice}
          activeStep={activeStep}
          nextStep={nextStep}
          handleBack={handleBack}
        />
      </div>
    </div>
  );
};
