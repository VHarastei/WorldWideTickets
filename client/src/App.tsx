import React from 'react';
import { Switch, Route } from 'react-router';
import { Booking } from './Pages/Booking';
import { Home } from './Pages/Home';
import { Search } from './Pages/Search';

function App() {
  return (
    <Switch>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/booking">
        <Booking />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
