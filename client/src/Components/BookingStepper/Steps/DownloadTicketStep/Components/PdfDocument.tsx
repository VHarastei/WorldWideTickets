import { Document, Page, StyleSheet, Text } from '@react-pdf/renderer';
import React from 'react';
import { BookingTicket } from '../../../../../store/ducks/booking/contracts/store';
import { BoardingPass } from './BoardingPass';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#eff1f4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    color: 'white',
    padding: 20,
  },
});

type PropsType = {
  tickets: BookingTicket[] | undefined;
};

export const PdfDocument: React.FC<PropsType> = ({ tickets }) => {
  if (!tickets) {
    return (
      <Document>
        <Page style={styles.page}></Page>
        <Text style={styles.headerText}>CANNOT GENERATE BOARDING PASS</Text>
      </Document>
    );
  }

  return (
    <Document>
      {tickets.map((ticket, index) => {
        return <BoardingPass key={index} ticket={ticket} />;
      })}
    </Document>
  );
};
