import React from 'react';
import { ColorBoxStyled } from './ColorBoxStyled';

const ColorBox = ({ background, name }) => {
  return (
    <ColorBoxStyled style={{ background }}>
      <span>{name}</span>
      <span>MORE</span>
    </ColorBoxStyled>
  );
};

export default ColorBox;
