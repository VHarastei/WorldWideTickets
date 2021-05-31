import { Avatar, Button, makeStyles, Tab, Typography } from '@material-ui/core';
import TicketIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { AuthWarning } from '../Components/AuthWarning';
import { Header } from '../Components/Header';
import { LinearPreloader } from '../Components/LinearPreloader';
import { UserOrders } from '../Components/UserOrders';
import { UserStyledTabs } from '../Components/UserStyledTabs';
import { signOut } from '../store/ducks/user/actionCreators';
import { selectIsAuth, selectIsAuthLoading, selectUserData } from '../store/ducks/user/selectors';

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
    marginTop: 20,
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
    dispatch(signOut());
    window.localStorage.removeItem('token');
    history.push('/');
  };

  const userData = useSelector(selectUserData);
  const isAuthLoading = useSelector(selectIsAuthLoading);
  const isAuth = useSelector(selectIsAuth);

  return (
    <div>
      <Header />
      {isAuthLoading ? (
        <LinearPreloader />
      ) : isAuth ? (
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
              <UserStyledTabs
                value={currentTab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="My orders" icon={<TicketIcon />} />
                <Tab label="Account settings" icon={<SettingsOutlinedIcon />} />
              </UserStyledTabs>
            </div>
          </div>
          <div className={classes.content}>{currentTab === 0 && <UserOrders />}</div>
        </div>
      ) : (
        <AuthWarning />
      )}
    </div>
  );
};
