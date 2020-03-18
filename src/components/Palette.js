import React, { useState } from 'react';
import ColorBox from './ColorBox';
import { PaletteStyled } from './PaletteStyled';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        step={100}
        onAfterChange={changeLevel}
      />
      <div className="palette-colors">{colorBoxes}</div>
    </PaletteStyled>
  );
};

export default Palette;
