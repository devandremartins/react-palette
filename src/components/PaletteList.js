import React from 'react';
import { Link } from 'react-router-dom';
import seedColors from '../seeds/seedColors';

const PaletteList = () => {
  const palettes = seedColors;

  return (
    <div>
      {palettes.map(palette => (
        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
      ))}
    </div>
  );
};

export default PaletteList;
