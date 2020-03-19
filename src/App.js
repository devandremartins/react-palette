import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';
import seedColors from './seeds/seedColors';
import { generatePalette } from './colorHelpers';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" />
        <Route exact path="/palette/:id" />
      </Switch>
      <Palette palette={generatePalette(seedColors[3])} />
    </div>
  );
}

export default App;
