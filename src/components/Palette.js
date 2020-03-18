import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
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
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={changeLevel}
        />
      </div>
      <div className="palette-colors">{colorBoxes}</div>
    </PaletteStyled>
  );
};

export default Palette;
