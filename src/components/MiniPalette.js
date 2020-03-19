import React from 'react';
import { MiniPaletteStyled } from './MiniPaletteStyled';

const MiniPalette = ({ paletteName, emoji }) => {
  return (
    <MiniPaletteStyled>
      <div className="colors"></div>
      <h5 className="title">
        {paletteName} - <span className="emoji">{emoji}</span>
      </h5>
    </MiniPaletteStyled>
  );
};

export default MiniPalette;
