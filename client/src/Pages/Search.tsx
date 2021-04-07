import { Container, makeStyles, Paper, Tab } from '@material-ui/core';
import React from 'react';
import { FlightCard } from '../Components/FlightCard';
import { Header } from '../Components/Header';
import { SearchFiltersTabs } from '../Components/SearchFiltersTabs';
import { SearchForm } from '../Components/SearchForm';

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

  return (
    <div className={classes.searchContainer}>
      <Header />
      <Paper square className={classes.headerForm}>
        <SearchForm />
      </Paper>
      <Container className={classes.flightsContainer}>
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

        <FlightCard
          companyLogoSrc="https://static.tickets.ua/img/logos_s/PS.png?9e3008e77a"
          flight="PS-9066"
          flightId="1"
          airplane="Alenia ATR 72"
          departureDate="2021-4-17 6:00:00"
          departureCity="Lviv"
          arrivalDate="2021-4-17 13:30:00"
          arrivalCity="Kyiv"
          cost={135}
        />
        <FlightCard
          companyLogoSrc="https://static.tickets.ua/img/logos_s/EY.png?9e3008e77a"
          flight="EY-5417"
          flightId="1"
          airplane="Airbus A350"
          departureDate="2021-5-18 13:30:00"
          departureCity="Dubai"
          arrivalDate="2021-5-18 18:30:00"
          arrivalCity="Paris"
          cost={720}
        />
        <FlightCard
          companyLogoSrc="https://static.tickets.ua/img/logos_s/FR.png?9e3008e77a"
          flight="SS-346"
          flightId="1"
          airplane="Boeing 747"
          departureDate="2021-3-16 7:00:00"
          departureCity="Uzhhorod"
          arrivalDate="2021-3-16 14:45:00"
          arrivalCity="Kyiv"
          cost={110}
        />
        <FlightCard
          companyLogoSrc="https://static.tickets.ua/img/logos_s/TK.png?9e3008e77a"
          flight="TK-3277"
          flightId="1"
          airplane="Boeing 737-800"
          departureDate="2021-4-17 3:10:00"
          departureCity="Istanbul"
          arrivalDate="2021-4-17 18:30:00"
          arrivalCity="Tokyo"
          cost={460}
        />
      </Container>
    </div>
  );
};
