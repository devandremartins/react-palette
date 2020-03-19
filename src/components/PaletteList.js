import React from 'react';
import { Link } from 'react-router-dom';
import seedColors from '../seeds/seedColors';
import { PaletteListStyled } from './PaletteListStyled';
import MiniPalette from './MiniPalette';

const PaletteList = () => {
  const palettes = seedColors;

  return (
    <PaletteListStyled>
      {palettes.map(palette => (
        <MiniPalette {...palette} />
      ))}
    </PaletteListStyled>
  );
};

export default PaletteList;
