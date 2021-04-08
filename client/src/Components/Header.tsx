import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  headerLogo: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    top: 0,
    position: 'sticky',
    zIndex: 101
  },
}));


export const Header = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.headerLogo}>
      <img alt="logo" style={{ width: 500 }} src="https://i.ibb.co/KKk47bp/wwtLogo.png" />
    </Paper>
  );
};
