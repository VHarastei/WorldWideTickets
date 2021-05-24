import React from 'react';
import { Switch, Route } from 'react-router';
import { Booking } from './Pages/Booking';
import { Home } from './Pages/Home';
import { Search } from './Pages/Search';
import { User } from './Pages/User';

function App() {
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
