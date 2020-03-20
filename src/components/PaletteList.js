import React from 'react';
import seedColors from '../seeds/seedColors';
import { PaletteListStyled } from './PaletteListStyled';
import MiniPalette from './MiniPalette';
import { useHistory } from 'react-router-dom';

const PaletteList = props => {
  const palettes = seedColors;
  const history = useHistory();

  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  return (
    <PaletteListStyled>
      <div className="palettes">
        {palettes.map(palette => (
          <MiniPalette
            {...palette}
            handleClick={() => goToPalette(palette.id)}
          />
        ))}
      </div>
    </PaletteListStyled>
  );
};

export default PaletteList;
