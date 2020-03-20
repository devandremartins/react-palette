import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ColorBoxStyled } from './ColorBoxStyled';

const ColorBox = ({ background, name }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => setCopied(false), 2500);
  }, [copied]);

  const changeCopyState = () => {
    setCopied(true);
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <ColorBoxStyled style={{ background }}>
        <div
          style={{ background }}
          className={`copy-overlay ${copied && 'show'}`}
        />
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>Copied!</h1>
          <p>{background}</p>
        </div>
        <div className="color-name">{name}</div>
        <button className="copy-btn">copy</button>
        <Link to="/" onClick={e => e.stopPropagation()}>
          <div className="see-more">more</div>
        </Link>
      </ColorBoxStyled>
    </CopyToClipboard>
  );
};

export default ColorBox;
