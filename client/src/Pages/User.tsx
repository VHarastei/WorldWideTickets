import { AppBar, Avatar, Button, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';
import { Header } from '../Components/Header';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
    backgroundColor: 'gray',
    width: 1032,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export const User = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

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
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="My orders" icon={<ExitToAppIcon />} />
              <Tab label="Account settings" icon={<ExitToAppIcon />} />
            </Tabs>
          </AppBar>
        </div>
      </div>
      <div className={classes.content}>
        <div>biba</div>
      </div>
    </div>
  );
};
