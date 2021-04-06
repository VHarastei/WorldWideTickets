import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { SearchForm } from '../Components/SearchForm';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    height: '300vh',
  },
  headerForm: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
    paddingBottom: 4,
    top: 0,
    position: 'sticky',
  },
}));

export const Search = () => {
  const classes = useStyles();

  return (
    <div className={classes.searchContainer}>
      <Paper square className={classes.headerForm}>
        <SearchForm />
      </Paper>
    </div>
  );
};
