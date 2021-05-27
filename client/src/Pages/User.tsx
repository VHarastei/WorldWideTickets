import {
  AppBar,
  Avatar,
  Button,
  makeStyles,
  Tab,
  Tabs,
  Typography,
  withStyles,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { Header } from '../Components/Header';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TicketIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { TabPanel } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookingFlight } from '../store/ducks/booking/actionCreators';
import { FlightCard } from '../Components/FlightCard/FlightCard';
import { selectBookingFlight } from '../store/ducks/booking/selectors';
import { selectIsAuth, selectUserData } from '../store/ducks/user/selectors';
import WaitIcon from '@material-ui/icons/PanToolOutlined';

import { SignInDialog } from '../Components/SignInDialog';
import { setUserData, setUserLoadingState } from '../store/ducks/user/actionCreators';
import { useHistory } from 'react-router';
import { LoadingState } from '../store/ducks/user/contracts/store';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    backgroundColor: 'white',
  },
  title: {
    margin: 'auto',
    width: 1032,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleUser: {
    display: 'flex',
    alignItems: 'center',
    padding: '25px 0px',
    justifyContent: 'space-between',
  },
  titleAvatar: {
    backgroundColor: theme.palette.secondary.main,
    width: 70,
    height: 70,
    fontSize: 32,
    fontWeight: 500,
    marginRight: 12,
  },
  titleTitle: {
    fontSize: 24,
    fontWeight: 500,
  },
  titleSubTitle: {
    fontSize: 16,
    fontWeight: 500,
  },
  content: {
    margin: 'auto',
    width: 1032,
    display: 'flex',
    flexDirection: 'column',
  },
  auth: {
    marginTop: 70,
    display: 'flex',
    margin: 'auto',
    width: '40%',
  },
  authIcon: {
    fontSize: 125,
    fontWeight: 100,
    marginRight: 20,
  },
  authSubTitle: {
    marginBottom: 20,
    fontWeight: 500,
  },
}));

export const User = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newCurrentTab: number) => {
    setCurrentTab(newCurrentTab);
  };

  const handleSignOut = () => {
    dispatch(setUserData(undefined));
    dispatch(setUserLoadingState(LoadingState.NEVER));
    window.localStorage.removeItem('token');
    history.push('/');
  };

  const flight = useSelector(selectBookingFlight);
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector(selectUserData);

  useEffect(() => {
    dispatch(fetchBookingFlight('FO-1496'));
  }, [dispatch]);

  if (!flight) return null;

  return (
    <div>
      <Header />
      {isAuth ? (
        <div>
          <div className={classes.titleContainer}>
            <div className={classes.title}>
              <div className={classes.titleUser}>
                <Avatar className={classes.titleAvatar} color="secondary" alt={'logo'}>
                  {userData?.username[0].toUpperCase()}
                </Avatar>
                <div>
                  <span className={classes.titleTitle}> {userData?.username}</span>
                  <Typography className={classes.titleSubTitle} color="textSecondary">
                    {userData?.email}
                  </Typography>
                </div>
              </div>
              <Button variant="contained" color="secondary" onClick={handleSignOut}>
                <span style={{ marginRight: 6 }}>Sign Out</span>
                <ExitToAppIcon />
              </Button>
            </div>
            <div className={classes.title}>
              {/* <AppBar position="static" color="default"> */}
              <UserStyledTabs
                value={currentTab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="My orders" icon={<TicketIcon />} />
                <Tab label="Account settings" icon={<SettingsOutlinedIcon />} />
              </UserStyledTabs>
              {/* </AppBar> */}
            </div>
          </div>
          <div className={classes.content}>
            {currentTab === 0 && (
              <div>
                <FlightCard flight={flight} simplified />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={classes.auth}>
          <WaitIcon className={classes.authIcon} color="primary" />
          <div>
            <Typography className={classes.titleTitle}>Sign in to visit your account</Typography>
            <Typography className={classes.authSubTitle} color="textSecondary">
              You'll be able to access your trips, price alerts, and settings.
            </Typography>
            <SignInDialog simplified />
          </div>
        </div>
      )}
    </div>
  );
};

export const UserStyledTabs = withStyles((theme) => ({
  root: {
    '& .MuiTab-root': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
      textTransform: 'none',
      fontSize: 18,
      fontWeight: 500,
      minHeight: 48,
      '& .MuiTab-wrapper': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: '0px 12px',
        margin: 0,
        '& .MuiSvgIcon-root': {
          margin: 0,
          marginRight: 6,
        },
      },
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.02);',
        transition: '0.3s',
      },
    },
  },
}))(Tabs);
