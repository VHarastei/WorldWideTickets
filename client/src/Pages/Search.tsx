import { Container, makeStyles, Paper, Tab } from '@material-ui/core';
import React from 'react';
import { FlightCard } from '../Components/FlightCard';
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
    paddingBottom: 4,
    top: 0,
    position: 'sticky',
  },
  flightsContainer: {
    marginTop: 20,
    maxWidth: 1032,
    padding: 0,
    marginBottom: 20
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
          airplane="Alenia ATR 72"
          departureDate=""
          departureCity="Lviv"
          arrivalDate=""
          arrivalCity="Kyiv"
          cost={135}
        />
          <FlightCard
            companyLogoSrc="https://static.tickets.ua/img/logos_s/EY.png?9e3008e77a"
            flight="EY-5417"
            airplane="Airbus A350"
            departureDate=""
            departureCity="Dubai"
            arrivalDate=""
            arrivalCity="Paris"
            cost={720}
          />
        <FlightCard
          companyLogoSrc="https://static.tickets.ua/img/logos_s/FR.png?9e3008e77a"
          flight="SS-346"
          airplane="Boeing 747"
          departureDate=""
          departureCity="Uzhhorod"
          arrivalDate=""
          arrivalCity="Kyiv"
          cost={110}
        />
        <FlightCard
          companyLogoSrc="https://static.tickets.ua/img/logos_s/TK.png?9e3008e77a"
          flight="TK-3277"
          airplane="Boeing 737-800"
          departureDate=""
          departureCity="Istanbul"
          arrivalDate=""
          arrivalCity="Tokyo"
          cost={460}
        />

      </Container>
    </div>
  );
};
