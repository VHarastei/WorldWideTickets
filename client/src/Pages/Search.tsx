import { Container, makeStyles, Paper, Tab } from '@material-ui/core';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlightCard } from '../Components/FlightCard';
import { Header } from '../Components/Header';
import { Preloader } from '../Components/Preloader';
import { SearchFiltersTabs } from '../Components/SearchFiltersTabs';
import { SearchForm } from '../Components/SearchForm';
import { FetchFlights, SetFlightsLoadingState } from '../store/ducks/flights/actionCreators';
import { Flight, LoadingState } from '../store/ducks/flights/contracts/store';
import { selectFlightsItems, selectIsFlightsLoaded } from '../store/ducks/flights/selectors';

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

  useEffect(() => {
    dispatch(FetchFlights());
    return () => {
      dispatch(SetFlightsLoadingState(LoadingState.NEVER));
    };
  }, [dispatch]);

  //deep copy
  const sortedFlights: Flight[] = JSON.parse(JSON.stringify(flights));

  // if (sortBy === 'cheapest') {
  //   sortedFlights.sort((a, b) => (a.cost.economy > b.cost.economy ? 1 : -1));
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
  return (
    <div className={classes.searchContainer}>
      <Header />
      {IsFlightsLoaded ? (
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
            {sortedFlights.map((flight) => {
              return (
                <FlightCard
                  key={flight.flightNumber}
                  companyLogoSrc={flight.Company.logoSrc}
                  flightNumber={flight.flightNumber}
                  airplane={flight.Airplane.model}
                  departureDate={flight.departureDate}
                  arrivalDate={flight.arrivalDate}
                  departureCity={flight.departureAirport.city}
                  arrivalCity={flight.arrivalAirport.city}
                  price={flight.lowestTicketPrice}
                />
              );
            })}
          </Container>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
