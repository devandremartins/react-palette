import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './components/PaletteList';
import Palette from './components/Palette';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <PaletteList />
        </Route>
        <Route exact path="/palette/:slug">
          <Palette />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
