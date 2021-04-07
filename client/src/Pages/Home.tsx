import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Header } from '../Components/Header';
import { SearchForm } from '../Components/SearchForm';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundColor: theme.palette.primary.main,
    margin: 'none',
    minHeight: '100vh',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
  },
  tagContainer: {
    backgroundColor: 'transparent',
    margin: '0px auto',
    maxWidth: 400,
    display: 'flex',
    alignItems: 'center',
    padding: 15,
    marginBottom: 100,
  },
  tagImg: {
    borderRadius: 9,
    boxShadow: `0 10px 20px rgba(0,0,0,0.08), 0 10px 10px rgba(0,0,0,0.15)`,
    maxWidth: 200,
  },
  tagTitle: {
    marginLeft: 10,
    fontWeight: 500,
    maxWidth: 300,
    fontSize: '50px',
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <Header />
      <Paper className={classes.tagContainer}>
        <img alt="tag" className={classes.tagImg} src="https://i.ibb.co/jzwS91s/tagIcon.png" />
        <Typography className={classes.tagTitle} color="secondary">
          Search Flights
        </Typography>
      </Paper>
      <SearchForm />
    </div>
  );
};
