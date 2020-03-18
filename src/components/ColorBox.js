import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ColorBoxStyled } from './ColorBoxStyled';

const ColorBox = ({ background, name }) => {
  return (
    <CopyToClipboard text={background}>
      <ColorBoxStyled style={{ background }}>
        <div className="color-name">{name}</div>
        <button className="copy-btn">copy</button>
        <div className="see-more">more</div>
      </ColorBoxStyled>
    </CopyToClipboard>
  );
};

export default ColorBox;
