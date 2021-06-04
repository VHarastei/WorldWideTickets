import { Container, makeStyles, Paper, Tab } from '@material-ui/core';
import queryString from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { FlightCard } from '../Components/FlightCard';
import { Header } from '../Components/Header';
import { Preloader } from '../Components/Preloader';
import { SearchFiltersTabs } from '../Components/SearchFiltersTabs';
import { SearchForm } from '../Components/SearchForm';
import { FetchFlightsPayload, SortByType } from '../services/api/flightsApi';
import { fetchFlights, setFlightsLoadingState } from '../store/ducks/flights/actionCreators';
import { Flight, FlightPair, LoadingState } from '../store/ducks/flights/contracts/store';
import {
  selectFlightsItems,
  selectIsFlightsLoaded,
  selectTotalPages,
} from '../store/ducks/flights/selectors';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    maxHeight: '100vh',
    overflowY: 'scroll',
  },
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
  loadMoreItemsProgress: {
    margin: 'auto',
    marginTop: '20px',
  },
}));

export const Search = () => {
  const classes = useStyles();
  const [sortBy, setSortBy] = React.useState<SortByType>('cheapest');

  const handleSortBy = (event: React.ChangeEvent<{}>, newSortBy: SortByType) => {
    setSortBy(newSortBy);
  };
  const dispatch = useDispatch();

  const flights = useSelector(selectFlightsItems);
  const IsFlightsLoaded = useSelector(selectIsFlightsLoaded);
  const totalPages = useSelector(selectTotalPages);

  let parsed = queryString.parse(useLocation().search) as unknown as FetchFlightsPayload;

  const [page, setPage] = React.useState<number>(1);

  const loadMoreItems = (event: any) => {
    if (
      Math.ceil(event.target.scrollTop + event.target.clientHeight) >=
        Math.floor(event.target.scrollHeight) &&
      IsFlightsLoaded
    ) {
      setPage((prevPage) => {
        if (totalPages !== prevPage) return prevPage + 1;
        else return prevPage;
      });
    }
  };
  const fetchFlightsPayload: FetchFlightsPayload = {
    whereFrom: parsed.whereFrom,
    whereTo: parsed.whereTo,
    size: 5,
    page,
    sortBy,
  };

  useEffect(() => {
    dispatch(fetchFlights(fetchFlightsPayload));
    // eslint-disable-next-line
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(setFlightsLoadingState(LoadingState.NEVER));
    dispatch(fetchFlights(fetchFlightsPayload));
    // eslint-disable-next-line
  }, [dispatch, sortBy]);

  useEffect(() => {
    setPage(1);
  }, [parsed.whereFrom, parsed.whereTo, sortBy]);


  return (
    <div onScroll={loadMoreItems} className={classes.searchContainer}>
      <Header />
      {flights.length ? (
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

            {flights.map((flight: Flight | FlightPair, index) => {
              return <FlightCard key={index} flight={flight} />;
            })}
            {
              !IsFlightsLoaded && null
              // <CircularProgress
              //   thickness={5}
              //   size={50}
              //   color="primary"
              //   className={classes.loadMoreItemsProgress}
              // />
            }
          </Container>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
