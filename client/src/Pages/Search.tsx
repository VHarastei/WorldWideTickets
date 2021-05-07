import { Button, CircularProgress, Container, makeStyles, Paper, Tab } from '@material-ui/core';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlightCard } from '../Components/FlightCard';
import { Header } from '../Components/Header';
import { Preloader } from '../Components/Preloader';
import { SearchFiltersTabs } from '../Components/SearchFiltersTabs';
import { SearchForm } from '../Components/SearchForm';
import { fetchFlights, setFlightsLoadingState } from '../store/ducks/flights/actionCreators';
import { Flight, FlightPair, LoadingState } from '../store/ducks/flights/contracts/store';
import {
  selectFlightsItems,
  selectIsFlightsLoaded,
  selectIsFlightsNever,
  selectTotalPages,
} from '../store/ducks/flights/selectors';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { FetchFlightPayload } from '../services/api/flightsApi';

const useStyles = makeStyles((theme) => ({
  searchContainer: {},
  headerForm: {
    zIndex: 101,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
    marginTop: -8,
    paddingBottom: 4,
    top: 0,
    position: 'sticky',
    flexDirection: 'column',
  },
  flightsContainer: {
    marginTop: 20,
    maxWidth: 1032,
    padding: 0,
    marginBottom: 20,
  },
}));

export const Search = () => {
  const classes = useStyles();
  type sortByType = 'cheapest' | 'earliest' | 'fastest';
  const [sortBy, setSortBy] = React.useState<sortByType>('cheapest');

  const handleSortBy = (event: React.ChangeEvent<{}>, newSortBy: sortByType) => {
    setSortBy(newSortBy);
  };
  const dispatch = useDispatch();

  const flights = useSelector(selectFlightsItems);
  const IsFlightsLoaded = useSelector(selectIsFlightsLoaded);
  const IsFlightsNever = useSelector(selectIsFlightsNever);
  const totalPages = useSelector(selectTotalPages);

  let parsed = (queryString.parse(useLocation().search) as unknown) as FetchFlightPayload;

  const [page, setPage] = React.useState<number>(1);

  const fetchFlightsPayload: FetchFlightPayload = {
    whereFrom: parsed.whereFrom,
    whereTo: parsed.whereTo,
    page,
  };

  useEffect(() => {
    dispatch(fetchFlights(fetchFlightsPayload));

    return () => {
      //dispatch(setFlightsLoadingState(LoadingState.NEVER));
    };
    // eslint-disable-next-line
  }, [dispatch, page]);
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  //deep copy
  // const sortedFlights: Flight[] = JSON.parse(JSON.stringify(flights));

  // if (sortBy === 'cheapest') {
  //   sortedFlights.sort((a, b) => (a.lowestTicketPrice > b.lowestTicketPrice ? 1 : -1));
  // }
  // if (sortBy === 'earliest') {
  //   sortedFlights.sort((a, b) => {
  //     const aDepDate = moment(a.departureDate, 'YYYY-MM-DD hh:mm:ss').format('X');
  //     const bDepDate = moment(b.departureDate, 'YYYY-MM-DD hh:mm:ss').format('X');

  //     return aDepDate > bDepDate ? 1 : -1;
  //   });
  // }
  // if (sortBy === 'fastest') {
  //   sortedFlights.sort((a, b) => {
  //     const aDepDate = moment(a.departureDate, 'YYYY-MM-DD hh:mm:ss');
  //     const aArrDate = moment(a.arrivalDate, 'YYYY-MM-DD hh:mm:ss');

  //     const bDepDate = moment(b.departureDate, 'YYYY-MM-DD hh:mm:ss');
  //     const bArrDate = moment(b.arrivalDate, 'YYYY-MM-DD hh:mm:ss');

  //     const aInFlDiff = aArrDate.diff(aDepDate);
  //     const bInFlDiff = bArrDate.diff(bDepDate);

  //     return aInFlDiff > bInFlDiff ? 1 : -1;
  //   });
  // }
  //if (!flights) return null;
  return (
    <div className={classes.searchContainer}>
      <Header />
      {flights.directFlights.length || flights.connectingFlights.length ? (
        <div>
          <Paper square className={classes.headerForm}>
            <SearchForm />
          </Paper>
          <Container className={classes.flightsContainer}>
            <Paper>
              <SearchFiltersTabs
                value={sortBy}
                onChange={handleSortBy}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab value="cheapest" label="Cheapest" />
                <Tab value="earliest" label="Earliest departure" />
                <Tab value="fastest" label="Fastest" />
              </SearchFiltersTabs>
            </Paper>
            {flights.directFlights?.map((flight: Flight, index) => {
              return (
                <FlightCard
                  key={index}
                  flightNumber={flight.flightNumber}
                  airplane={flight.Airplane.model}
                  departureDate={flight.departureDate}
                  arrivalDate={flight.arrivalDate}
                  departureCity={flight.departureAirport.city}
                  arrivalCity={flight.arrivalAirport.city}
                  price={flight.lowestTicketPrice}
                  companyLogoSrc={flight.Company.logoSrc}
                  companyName={flight.Company.name}
                  companyRating={flight.Company.rating}
                />
              );
            })}
            {flights.connectingFlights?.map((flightPair: FlightPair, index) => {
              const { firstFlight, lastFlight } = flightPair;
              return (
                <FlightCard
                  key={index}
                  flightNumber={firstFlight.flightNumber}
                  airplane={firstFlight.Airplane.model}
                  departureDate={firstFlight.departureDate}
                  arrivalDate={lastFlight.arrivalDate}
                  departureCity={firstFlight.departureAirport.city}
                  arrivalCity={lastFlight.arrivalAirport.city}
                  price={firstFlight.lowestTicketPrice + lastFlight.lowestTicketPrice}
                  companyLogoSrc={firstFlight.Company.logoSrc}
                  companyName={firstFlight.Company.name}
                  companyRating={firstFlight.Company.rating}
                  connectionCity={lastFlight.departureAirport.city}
                />
              );
            })}
            {totalPages !== page ? (
              IsFlightsLoaded ? (
                <Button color="primary" variant="contained" onClick={loadMore}>
                  Load more
                </Button>
              ) : (
                <CircularProgress />
              )
            ) : null}
          </Container>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
