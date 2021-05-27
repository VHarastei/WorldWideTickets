import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Booking } from './Pages/Booking';
import { Home } from './Pages/Home';
import { Search } from './Pages/Search';
import { User } from './Pages/User';
import { Verify } from './Pages/Verify';
import { fetchUserData } from './store/ducks/user/actionCreators';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <Switch>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/user/verify/:hash">
        <Verify />
      </Route>
      <Route path="/user">
        <User />
      </Route>
      <Route path="/booking/:flightNumber">
        <Booking />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
