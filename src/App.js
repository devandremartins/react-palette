import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';

const App = props => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" />
        <Route exact path="/palette/:slug">
          {<Palette />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
