import { Button, makeStyles } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUserData } from '../store/ducks/user/selectors';
import { SignInDialog } from './SignInDialog/index';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '1032px',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  login: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
  },
  avatar: {
    color: '#fff',
  },
  loginIcon: {
    color: theme.palette.secondary.main,
    fontSize: 36,
  },
  loginText: {
    color: 'white',
    size: 22,
    fontWeight: 500,
    marginRight: 8,
  },
}));

export const Header = React.memo(() => {
  const classes = useStyles();
  const userData = useSelector(selectUserData);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Link to="/">
          <img
            alt="logo"
            className={classes.headerLogo}
            src="https://i.ibb.co/BVqZR6J/lastLogo.png"
          />
        </Link>
        {!!userData ? (
          <Link to="/user" style={{ textDecoration: 'none' }}>
            <Button>
              <div className={classes.login}>
                <span className={classes.loginText}>{userData?.username}</span>
                <AccountCircleIcon className={classes.loginIcon} style={{ color: 'orange' }} />
              </div>
            </Button>
          </Link>
        ) : (
          <SignInDialog />
        )}
      </div>
    </div>
  );
});
