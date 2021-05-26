import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router';
import { Booking } from './Pages/Booking';
import { Home } from './Pages/Home';
import { Search } from './Pages/Search';
import { User } from './Pages/User';
import { AuthApi } from './services/api/authApi';
import { setUserData } from './store/ducks/user/actionCreators';

function App() {
  const dispatch = useDispatch();
  const checkAuth = async () => {
    const data = await AuthApi.getMe();
    dispatch(setUserData(data));
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Switch>
      <Route path="/search">
        <Search />
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
