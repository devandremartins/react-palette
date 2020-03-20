import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './components/PaletteList';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import './App.css';

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
        <Route exact path="/palette/:slug/:colorId">
          <SingleColorPalette />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
