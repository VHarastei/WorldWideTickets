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
    //alignItems: 'center',
    flexDirection: 'column',
  },
}));

export const User = () => {
  const classes = useStyles();

  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newCurrentTab: number) => {
    setCurrentTab(newCurrentTab);
  };

  const dispatch = useDispatch();

  const flight = useSelector(selectBookingFlight);

  useEffect(() => {
    dispatch(fetchBookingFlight('FO-1496'));
  }, [dispatch]);

  if (!flight) return null;

  return (
    <div>
      <Header />
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          <div className={classes.titleUser}>
            <Avatar className={classes.titleAvatar} color="secondary" alt={'logo'}>
              V
            </Avatar>
            <div>
              <span className={classes.titleTitle}>VHarastei</span>
              <Typography className={classes.titleSubTitle} color="textSecondary">
                garastey.vas@gmail.com
              </Typography>
            </div>
          </div>
          <Button variant="contained" color="secondary">
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
