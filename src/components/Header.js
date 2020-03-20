import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { HeaderStyled } from './HeaderStyled';

const Header = ({ level, changeLevel, changeFormat }) => {
  const formatOptions = [
    { value: 'hex', label: 'HEX - #ffffff' },
    { value: 'rgb', label: 'RGB - (255, 255, 255)' },
    { value: 'rgba', label: 'RGBA - (255, 255, 255, 1)' }
  ];
  return (
    <HeaderStyled>
      <div className="logo">
        <Link to="/">React Palette</Link>
      </div>
      <div className="slider">
        <div className="level">
          <span>Level:</span> {level}
        </div>
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={changeLevel}
        />
      </div>
      <div className="format">
        <Dropdown
          value={formatOptions[0]}
          options={formatOptions}
          onChange={changeFormat}
        />
      </div>
    </HeaderStyled>
  );
};

export default Header;
