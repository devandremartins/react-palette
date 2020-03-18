import React, { useState } from 'react';
import Header from './Header';
import ColorBox from './ColorBox';
import { PaletteStyled } from './PaletteStyled';

const Palette = props => {
  const [level, setLevel] = useState(500);

  const colorBoxes = props.palette.colors[level].map(color => (
    <ColorBox background={color.hex} name={color.name} />
  ));

  const changeLevel = newLevel => {
    setLevel(newLevel);
  };

  return (
    <PaletteStyled>
      <Header level={level} changeLevel={changeLevel} />
      <div className="palette-colors">{colorBoxes}</div>
    </PaletteStyled>
  );
};

export default Palette;
