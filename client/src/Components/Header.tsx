import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  headerLogo: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    top: 0,
    position: 'sticky',
    zIndex: 101,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerLogo}>
      <img alt="logo" style={{ width: 400 }} src="https://i.ibb.co/BVqZR6J/lastLogo.png" />
    </div>
  );
};
