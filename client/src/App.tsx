import React from 'react';
import { Switch, Route } from 'react-router';
import { Home } from './Pages/Home';
import { Search } from './Pages/Search';

function App() {
  return (
    <Switch>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
