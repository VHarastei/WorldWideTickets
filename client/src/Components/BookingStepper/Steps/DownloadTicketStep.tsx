import {
  Button,
  CircularProgress,
  Container,
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import { Document, Page, PDFDownloadLink, StyleSheet, Text, View } from '@react-pdf/renderer';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBookingTicket } from '../../../store/ducks/booking/actionCreators';
import { BookingTicket } from '../../../store/ducks/booking/contracts/store';
import {
  selectBookingData,
  selectBookingTicket,
  selectIsTicketCreated,
} from '../../../store/ducks/booking/selectors';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#eff1f4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainer: {
    backgroundColor: '#2cb162',
    width: '90%',
    height: 250,
    margin: '0px 50px',
    borderRadius: 24,
  },
  divider: {
    height: '100%',
    width: 2,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 0,
    right: 180,
    zIndex: 101,
  },
  view: {
    height: 180,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: 50,
    zIndex: 1,
  },
  headerText: {
    color: 'white',
    padding: 20,
  },
  absoluteHeader: {
    position: 'absolute',
    top: 0,
    right: -5,
  },
  ticketInfo: {
    padding: 20,
    height: '100%',
    width: 365,
  },
  ticketInfoTop: {
    display: 'flex',
    flexDirection: 'row',
  },
  ticketInfoColumn: {
    marginRight: 90,
  },
  ticketInfoBottom: {
    display: 'flex',
    flexDirection: 'row',
  },
  ticketInfoItem: {
    paddingBottom: 10,
  },
  ticketInfoItemTitle: {
    color: '#a09f9f',
    fontSize: 12,
  },
  ticketInfoItemText: {
    fontSize: 12,
  },
  ticketInfoBottomItem: {
    marginRight: 25,
    width: 60,
  },
  rightTicketInfo: {
    width: 180,
    padding: 20,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  rightTicketInfoItem: {
    paddingBottom: 4,
  },
  rightTicketInfoRowItems: {
    display: 'flex',
    flexDirection: 'row',
  },
  rightTicketInfoRowItem: {
    marginRight: 45,
  },
});

type PropsType = {
  ticket: BookingTicket | undefined;
};

export const PdfDocument: React.FC<PropsType> = ({ ticket }) => {
  if (!ticket) {
    return (
      <Document>
        <Page style={styles.page}></Page>
        <Text style={styles.headerText}>CANNOT GENERATE BOARDING PASS</Text>
      </Document>
    );
  }

  let standartizedSeatClass: string;
  switch (ticket.seat.seatClass) {
    case 'economy':
      standartizedSeatClass = 'Y';
      break;
    case 'business':
      standartizedSeatClass = 'J';
      break;
    case 'first':
      standartizedSeatClass = 'F';
      break;
  }

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.viewContainer}>
          <Text style={styles.headerText}>BOARDING PASS</Text>
          <View style={styles.absoluteHeader}>
            <Text style={styles.headerText}>BOARDING PASS</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.view}>
            <View style={styles.divider}></View>
            <View style={styles.ticketInfo}>
              <View style={styles.ticketInfoTop}>
                <View style={styles.ticketInfoColumn}>
                  <View style={styles.ticketInfoItem}>
                    <TicketFields
                      title={'Passenger Name'}
                      text={`${ticket.passenger.firstName.toUpperCase()} ${ticket.passenger.lastName.toUpperCase()}`}
                    />
                  </View>
                  <View style={styles.ticketInfoItem}>
                    <TicketFields
                      title={'From'}
                      text={ticket.flight.departureAirport.city.toUpperCase()}
                    />
                  </View>
                  <View style={styles.ticketInfoItem}>
                    <TicketFields
                      title={'To'}
                      text={ticket.flight.arrivalAirport.city.toUpperCase()}
                    />
                  </View>
                </View>
                <View style={styles.ticketInfoColumn}>
                  <View style={styles.ticketInfoItem}>
                    <TicketFields
                      title={'Carrier'}
                      text={ticket.flight.Company.name.toUpperCase()}
                    />
                  </View>
                  <View style={styles.ticketInfoItem}>
                    <View style={styles.ticketInfoItem}>
                      <TicketFields
                        title={'Date'}
                        text={moment(ticket.flight.departureDate).format('DD MMM').toUpperCase()}
                      />
                    </View>
                    <View style={styles.ticketInfoItem}>
                      <TicketFields
                        title={'Time'}
                        text={moment(ticket.flight.departureDate).format('H:mm').toUpperCase()}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.ticketInfoBottom}>
                <View style={styles.ticketInfoBottomItem}>
                  <TicketFields title={'Flight'} text={ticket.flight.flightNumber.toUpperCase()} />
                </View>
                <View style={styles.ticketInfoBottomItem}>
                  <TicketFields
                    title={'Airplane'}
                    text={ticket.flight.Airplane.model.toUpperCase()}
                  />
                </View>
                <View style={styles.ticketInfoBottomItem}>
                  <TicketFields title={'Class'} text={standartizedSeatClass} />
                </View>
                <View style={styles.ticketInfoBottomItem}>
                  <TicketFields title={'Seat'} text={`${ticket.seat.seatNumber}`} />
                </View>
              </View>
            </View>
            <View style={styles.rightTicketInfo}>
              <View style={styles.rightTicketInfoItem}>
                <TicketFields
                  title={'Passenger Name'}
                  text={`${ticket.passenger.firstName.toUpperCase()} ${ticket.passenger.lastName.toUpperCase()}`}
                />
              </View>
              <View style={styles.rightTicketInfoItem}>
                <TicketFields
                  title={'From'}
                  text={ticket.flight.departureAirport.city.toUpperCase()}
                />
              </View>
              <View style={styles.rightTicketInfoItem}>
                <TicketFields title={'To'} text={ticket.flight.arrivalAirport.city.toUpperCase()} />
              </View>
              <View style={styles.rightTicketInfoRowItems}>
                <View style={styles.rightTicketInfoRowItem}>
                  <TicketFields title={'Flight'} text={ticket.flight.flightNumber.toUpperCase()} />
                </View>
                <View style={styles.rightTicketInfoRowItem}>
                  <TicketFields
                    title={'Date'}
                    text={moment(ticket.flight.departureDate).format('DD MMM').toUpperCase()}
                  />
                </View>
              </View>
              <View style={styles.rightTicketInfoRowItems}>
                <View style={styles.rightTicketInfoRowItem}>
                  <TicketFields title={'Class'} text={standartizedSeatClass} />
                </View>
                <View style={styles.rightTicketInfoRowItem}>
                  <TicketFields title={'Seat'} text={`${ticket.seat.seatNumber}`} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

type TicketFieldsPropsType = {
  title: string;
  text: string;
};

const TicketFields: React.FC<TicketFieldsPropsType> = ({ title, text }) => {
  return (
    <View>
      <Text style={styles.ticketInfoItemTitle}>{title}</Text>
      <Text style={styles.ticketInfoItemText}>{text}</Text>
    </View>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ticketContainer: {
      marginTop: 25,
    },
    ticketPaper: {
      padding: 20,
    },
    ticketLoadingProgress: {
      height: 70,
    },
    checkIcon: {
      position: 'absolute',
      fontSize: 70,
      left: 'calc(50% - 35px)',
      transition: '0.5s',
    },
    loadingIcon: {
      position: 'absolute',
      left: 'calc(50% - 35px)',
      padding: 6,
      height: 70,
    },
  })
);

export const DownloadTicketStep: React.FC = () => {
  const classes = useStyles();
  const booking = useSelector(selectBookingData);

  const ticket = useSelector(selectBookingTicket);
  const isCreated = useSelector(selectIsTicketCreated);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createBookingTicket(booking));
  }, [dispatch, booking]);

  return (
    <Container className={classes.ticketContainer} maxWidth="sm">
      <Paper className={classes.ticketPaper}>
        <div className={classes.ticketLoadingProgress}>
          {!isCreated && (
            <CircularProgress
              color="primary"
              size={58}
              thickness={4.8}
              className={classes.loadingIcon}
            />
          )}
          <CheckIcon
            color="primary"
            className={classes.checkIcon}
            style={{ opacity: +isCreated }}
          />
        </div>
        <Typography gutterBottom color="primary" variant="h4" align="center">
          Payment successful
        </Typography>
        <PDFDownloadLink
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
          document={<PdfDocument ticket={ticket} />}
          fileName="ticket.pdf"
        >
          {({ blob, url, loading, error }) => (
            <Button disabled={loading || !isCreated} variant="contained" color="primary" fullWidth>
              Download ticket
            </Button>
          )}
        </PDFDownloadLink>
      </Paper>
    </Container>
  );
};
