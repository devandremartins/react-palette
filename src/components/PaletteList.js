import React from 'react';
import { Link } from 'react-router-dom';
import seedColors from '../seeds/seedColors';
import { PaletteListStyled } from './PaletteListStyled';
import MiniPalette from './MiniPalette';

const PaletteList = () => {
  const palettes = seedColors;

  return (
    <PaletteListStyled>
      <div className="palettes">
        {palettes.map(palette => (
          <MiniPalette {...palette} />
        ))}
      </div>
    </PaletteListStyled>
  );
};

export default PaletteList;
