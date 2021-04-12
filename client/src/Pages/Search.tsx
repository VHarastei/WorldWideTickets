import { Container, makeStyles, Paper, Tab } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlightCard } from '../Components/FlightCard';
import { Header } from '../Components/Header';
import { Preloader } from '../Components/Preloader';
import { SearchFiltersTabs } from '../Components/SearchFiltersTabs';
import { SearchForm } from '../Components/SearchForm';
import { FetchFlights, SetFlightsLoadingState } from '../store/ducks/flights/actionCreators';
import { LoadingState } from '../store/ducks/flights/contracts/store';
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

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
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

  return (
    <div className={classes.searchContainer}>
      <Header />
      {IsFlightsLoaded ? (
        <div>
          <Paper square className={classes.headerForm}>
            <SearchForm />
          </Paper>
          <Container className={classes.flightsContainer}>
            <div>
              <Paper>
                <SearchFiltersTabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                >
                  <Tab label="Cheapest" />
                  <Tab label="Average" />
                  <Tab label="Fastest" />
                </SearchFiltersTabs>
              </Paper>
              <div>
                {flights.map((flight) => {
                  return (
                    <FlightCard
                      key={flight.flightId}
                      companyLogoSrc={flight.companyLogoSrc}
                      flightId={flight.flightId}
                      airplane={flight.airplane}
                      departureDate={flight.departureDate}
                      departureCity={flight.departureCity}
                      arrivalDate={flight.arrivalDate}
                      arrivalCity={flight.arrivalCity}
                      cost={flight.cost}
                    />
                  );
                })}
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
