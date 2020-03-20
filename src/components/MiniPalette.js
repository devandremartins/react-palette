import React from 'react';
import { MiniPaletteStyled } from './MiniPaletteStyled';

const MiniPalette = ({ paletteName, emoji, colors, handleClick }) => {
  const miniColorBoxes = colors.map(color => (
    <div
      key={color.name}
      className="mini-color-boxes"
      style={{ background: color.color }}
    ></div>
  ));
  return (
    <MiniPaletteStyled onClick={handleClick}>
      <div className="colors">{miniColorBoxes}</div>
      <h2 className="title">
        {paletteName} <span className="emoji">{emoji}</span>
      </h2>
    </MiniPaletteStyled>
  );
};

export default MiniPalette;
