import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { HeaderStyled } from './HeaderStyled';

const Header = ({ level, changeLevel, changeFormat }) => {
  const formatOptions = [
    { value: 'hex', label: 'HEX - #ffffff' },
    { value: 'rgb', label: 'RGB - rgb(255, 255, 255)' },
    { value: 'rgba', label: 'RGBA - rgba(255, 255, 255, 1)' }
  ];
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
      <Dropdown options={formatOptions} onChange={changeFormat} />
    </HeaderStyled>
  );
};

export default Header;
