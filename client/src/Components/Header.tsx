import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  header: {
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
  headerLogo: {
    cursor: 'pointer',
    width: 400,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Link to="/">
        <img
          alt="logo"
          className={classes.headerLogo}
          src="https://i.ibb.co/BVqZR6J/lastLogo.png"
        />
      </Link>
    </div>
  );
};
