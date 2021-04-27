export default {};

// import React, { useState } from 'react';
// import Axios from 'axios';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
// import moment from 'moment';
// import {
//   Button,
//   Container,
//   createStyles,
//   makeStyles,
//   Paper,
//   Theme,
//   Typography,
// } from '@material-ui/core';
// import CheckIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
// import {
//   BookingFlight,
//   BookingData,
//   PassengerData,
// } from '../../../store/ducks/booking/contracts/store';
// import { useSelector } from 'react-redux';
// import { selectBookingFlight, selectBookingData } from '../../../store/ducks/booking/selectors';

// const styles = StyleSheet.create({
//   page: {
//     backgroundColor: '#eff1f4',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   viewContainer: {
//     backgroundColor: '#2cb162',
//     width: '90%',
//     height: 250,
//     margin: '0px 50px',
//     borderRadius: 24,
//   },
//   divider: {
//     height: '100%',
//     width: 2,
//     backgroundColor: 'gray',
//     position: 'absolute',
//     top: 0,
//     right: 180,
//     zIndex: 101,
//   },
//   view: {
//     height: 180,
//     width: '100%',
//     backgroundColor: 'white',
//     position: 'absolute',
//     top: 50,
//     zIndex: 1,
//   },
//   headerText: {
//     color: 'white',
//     padding: 20,
//   },
//   absoluteHeader: {
//     position: 'absolute',
//     top: 0,
//     right: -5,
//   },
//   ticketInfo: {
//     padding: 20,
//     height: '100%',
//     width: 365,
//   },
//   ticketInfoTop: {
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   ticketInfoColumn: {
//     marginRight: 90,
//   },
//   ticketInfoBottom: {
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   ticketInfoItem: {
//     paddingBottom: 10,
//   },
//   ticketInfoItemTitle: {
//     color: '#a09f9f',
//     fontSize: 12,
//   },
//   ticketInfoItemText: {
//     fontSize: 12,
//   },
//   ticketInfoBottomItem: {
//     marginRight: 25,
//     width: 60,
//   },
//   rightTicketInfo: {
//     width: 180,
//     padding: 20,
//     position: 'absolute',
//     top: 0,
//     right: 0,
//   },
//   rightTicketInfoItem: {
//     paddingBottom: 4,
//   },
//   rightTicketInfoRowItems: {
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   rightTicketInfoRowItem: {
//     marginRight: 45,
//   },
// });

// type PropsType = {
//   data: {
//     flight?: BookingFlight;
//     booking: BookingData;
//   };
// };

// export const PdfDocument: React.FC<PropsType> = ({ data }) => {
//   const { flight, booking } = data;

//   const { passengerData, seatData } = booking;

//   if (!flight || !passengerData || !seatData) {
//     return (
//       <Document>
//         <Page style={styles.page}></Page>
//         <Text style={styles.headerText}>CANNOT GENERATE BOARDING PASS</Text>
//       </Document>
//     );
//   }

//   let standartizedSeatClass: string;
//   switch (seatData.seatClass) {
//     case 'economy':
//       standartizedSeatClass = 'Y';
//       break;
//     case 'business':
//       standartizedSeatClass = 'J';
//       break;
//     case 'first':
//       standartizedSeatClass = 'F';
//       break;
//   }

//   return (
//     <Document>
//       <Page style={styles.page}>
//         <View style={styles.viewContainer}>
//           <Text style={styles.headerText}>BOARDING PASS</Text>
//           <View style={styles.absoluteHeader}>
//             <Text style={styles.headerText}>BOARDING PASS</Text>
//           </View>
//           <View style={styles.divider}></View>
//           <View style={styles.view}>
//             <View style={styles.divider}></View>
//             <View style={styles.ticketInfo}>
//               <View style={styles.ticketInfoTop}>
//                 <View style={styles.ticketInfoColumn}>
//                   <View style={styles.ticketInfoItem}>
//                     <TicketFields
//                       title={'Passenger Name'}
//                       text={`${passengerData.firstName.toUpperCase()} ${passengerData.lastName.toUpperCase()}`}
//                     />
//                   </View>
//                   <View style={styles.ticketInfoItem}>
//                     <TicketFields title={'From'} text={flight.departureCity.toUpperCase()} />
//                   </View>
//                   <View style={styles.ticketInfoItem}>
//                     <TicketFields title={'To'} text={flight.arrivalCity.toUpperCase()} />
//                   </View>
//                 </View>
//                 <View style={styles.ticketInfoColumn}>
//                   <View style={styles.ticketInfoItem}>
//                     <TicketFields title={'Carrier'} text={flight.companyName.toUpperCase()} />
//                   </View>
//                   <View style={styles.ticketInfoItem}>
//                     <View style={styles.ticketInfoItem}>
//                       <TicketFields
//                         title={'Date'}
//                         text={moment(flight.departureDate).format('DD MMM').toUpperCase()}
//                       />
//                     </View>
//                     <View style={styles.ticketInfoItem}>
//                       <TicketFields
//                         title={'Time'}
//                         text={moment(flight.departureDate).format('H:mm').toUpperCase()}
//                       />
//                     </View>
//                   </View>
//                 </View>
//               </View>
//               <View style={styles.ticketInfoBottom}>
//                 <View style={styles.ticketInfoBottomItem}>
//                   <TicketFields title={'Flight'} text={flight.flightId.toUpperCase()} />
//                 </View>
//                 <View style={styles.ticketInfoBottomItem}>
//                   <TicketFields title={'Airplane'} text={flight.airplane.toUpperCase()} />
//                 </View>
//                 <View style={styles.ticketInfoBottomItem}>
//                   <TicketFields title={'Class'} text={standartizedSeatClass} />
//                 </View>
//                 <View style={styles.ticketInfoBottomItem}>
//                   <TicketFields title={'Seat'} text={`${seatData.seat}`} />
//                 </View>
//               </View>
//             </View>
//             <View style={styles.rightTicketInfo}>
//               <View style={styles.rightTicketInfoItem}>
//                 <TicketFields
//                   title={'Passenger Name'}
//                   text={`${passengerData.firstName.toUpperCase()} ${passengerData.lastName.toUpperCase()}`}
//                 />
//               </View>
//               <View style={styles.rightTicketInfoItem}>
//                 <TicketFields title={'From'} text={flight.departureCity.toUpperCase()} />
//               </View>
//               <View style={styles.rightTicketInfoItem}>
//                 <TicketFields title={'To'} text={flight.arrivalCity.toUpperCase()} />
//               </View>
//               <View style={styles.rightTicketInfoRowItems}>
//                 <View style={styles.rightTicketInfoRowItem}>
//                   <TicketFields title={'Flight'} text={flight.flightId.toUpperCase()} />
//                 </View>
//                 <View style={styles.rightTicketInfoRowItem}>
//                   <TicketFields
//                     title={'Date'}
//                     text={moment(flight.departureDate).format('DD MMM').toUpperCase()}
//                   />
//                 </View>
//               </View>
//               <View style={styles.rightTicketInfoRowItems}>
//                 <View style={styles.rightTicketInfoRowItem}>
//                   <TicketFields title={'Class'} text={standartizedSeatClass} />
//                 </View>
//                 <View style={styles.rightTicketInfoRowItem}>
//                   <TicketFields title={'Seat'} text={`${seatData.seat}`} />
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// type TicketFieldsPropsType = {
//   title: string;
//   text: string;
// };

// const TicketFields: React.FC<TicketFieldsPropsType> = ({ title, text }) => {
//   return (
//     <View>
//       <Text style={styles.ticketInfoItemTitle}>{title}</Text>
//       <Text style={styles.ticketInfoItemText}>{text}</Text>
//     </View>
//   );
// };

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     ticketContainer: {
//       marginTop: 25,
//     },
//     TicketPaper: {
//       padding: 20,
//     },
//     CheckIcon: {
//       display: 'block',
//       fontSize: 70,
//       margin: '0 auto',
//     },
//   })
// );

// export const DownloadTicketStep: React.FC = () => {
//   const classes = useStyles();
//   const flight = useSelector(selectBookingFlight);
//   const booking = useSelector(selectBookingData);

//   return (
//     <Container className={classes.ticketContainer} maxWidth="sm">
//       <Paper className={classes.TicketPaper}>
//         <CheckIcon color="primary" className={classes.CheckIcon} />
//         <Typography gutterBottom color="primary" variant="h4" align="center">
//           Payment successful
//         </Typography>
//         <PDFDownloadLink
//           style={{
//             textDecoration: 'none',
//             color: 'inherit',
//           }}
//           document={<PdfDocument data={{ flight, booking }} />}
//           fileName="ticket.pdf"
//         >
//           {({ blob, url, loading, error }) => (
//             <Button disabled={loading} variant="contained" color="primary" fullWidth>
//               Download ticket
//             </Button>
//           )}
//         </PDFDownloadLink>
//       </Paper>
//     </Container>
//   );
// };
