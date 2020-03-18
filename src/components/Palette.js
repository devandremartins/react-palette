import React from 'react';
import ColorBox from './ColorBox';
import { PaletteStyled } from './PaletteStyled';

const Palette = props => {
  const colorBoxes = props.colors.map(color => (
    <ColorBox background={color.color} name={color.name} />
  ));
  return (
    <PaletteStyled>
      <div className="palette-colors">{colorBoxes}</div>
    </PaletteStyled>
  );
};

export default Palette;
