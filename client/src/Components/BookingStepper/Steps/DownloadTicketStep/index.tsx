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
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import { PDFDownloadLink } from '@react-pdf/renderer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBookingTickets } from '../../../../store/ducks/booking/actionCreators';
import {
  selectBookingData,
  selectBookingTickets,
  selectIsTicketsCreated,
  selectIsTicketsError,
} from '../../../../store/ducks/booking/selectors';
import { PdfDocument } from './Components/PdfDocument';

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

  const tickets = useSelector(selectBookingTickets);
  const isCreated = useSelector(selectIsTicketsCreated);
  const isError = useSelector(selectIsTicketsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createBookingTickets(booking));
  }, [dispatch, booking]);

  return (
    <Container className={classes.ticketContainer} maxWidth="sm">
      <Paper className={classes.ticketPaper}>
        <div className={classes.ticketLoadingProgress}>
          {isCreated && !isError ? (
            <CheckIcon
              color="primary"
              className={classes.checkIcon}
              style={{ opacity: +isCreated }}
            />
          ) : isError ? (
            <ErrorIcon color="error" className={classes.checkIcon} />
          ) : (
            <CircularProgress
              color="primary"
              size={58}
              thickness={4.8}
              className={classes.loadingIcon}
            />
          )}
        </div>
        {isCreated && !isError ? (
          <Typography gutterBottom color="primary" variant="h4" align="center">
            Payment successful
          </Typography>
        ) : isError ? (
          <div>
            <Typography color="error" variant="h4" align="center">
              Payment failed
            </Typography>
            <Typography gutterBottom color="textSecondary" variant="h6" align="center">
              Please try again
            </Typography>
          </div>
        ) : (
          <Typography gutterBottom variant="h4" align="center">
            Payment processing
          </Typography>
        )}

        <PDFDownloadLink
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
          document={<PdfDocument tickets={tickets} />}
          fileName="boardingPass.pdf"
        >
          {({ blob, url, loading, error }) => (
            <Button
              disabled={loading || !isCreated || isError}
              variant="contained"
              color="primary"
              fullWidth
            >
              Download boarding pass
            </Button>
          )}
        </PDFDownloadLink>
      </Paper>
    </Container>
  );
};
