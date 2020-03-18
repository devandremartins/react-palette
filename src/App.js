import React from 'react';
import Palette from './components/Palette';
import seedColors from './seeds/seedColors';
import { generatePalette } from './colorHelpers';

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[3]} />
    </div>
  );
}

export default App;
