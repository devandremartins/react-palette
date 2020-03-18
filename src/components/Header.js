import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { HeaderStyled } from './HeaderStyled';

const Header = ({ level, changeLevel }) => {
  return (
    <HeaderStyled>
      <div className="logo">React Palette</div>
      <span>Level: {level}</span>
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={changeLevel}
        />
      </div>
    </HeaderStyled>
  );
};

export default Header;
