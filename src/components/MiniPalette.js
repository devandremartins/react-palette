import React from 'react';
import { MiniPaletteStyled } from './MiniPaletteStyled';

const MiniPalette = ({ paletteName, emoji, colors }) => {
  const miniColorBoxes = colors.map(color => (
    <div
      key={color.name}
      className="mini-color-boxes"
      style={{ background: color.color }}
    ></div>
  ));
  return (
    <MiniPaletteStyled>
      <div className="colors">{miniColorBoxes}</div>
      <h5 className="title">
        {paletteName} - <span className="emoji">{emoji}</span>
      </h5>
    </MiniPaletteStyled>
  );
};

export default MiniPalette;
