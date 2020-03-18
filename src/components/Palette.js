import React, { useState } from 'react';
import Header from './Header';
import ColorBox from './ColorBox';
import { PaletteStyled } from './PaletteStyled';

const Palette = props => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const colorBoxes = props.palette.colors[level].map(color => (
    <ColorBox background={color[format]} name={color.name} />
  ));

  const changeLevel = newLevel => {
    setLevel(newLevel);
  };

  const changeFormat = e => {
    setFormat(e.value);
  };

  return (
    <PaletteStyled>
      <Header
        level={level}
        changeLevel={changeLevel}
        changeFormat={changeFormat}
      />
      <div className="palette-colors">{colorBoxes}</div>
    </PaletteStyled>
  );
};

export default Palette;
