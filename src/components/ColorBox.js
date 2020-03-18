import React from 'react';
import { ColorBoxStyled } from './ColorBoxStyled';

const ColorBox = ({ background, name }) => {
  return (
    <ColorBoxStyled style={{ background }}>
      <div className="color-name">{name}</div>
      <button className="copy-btn">copy</button>
      <div className="see-more">more</div>
    </ColorBoxStyled>
  );
};

export default ColorBox;
