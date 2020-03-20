import React, { useState } from 'react';
import Header from './Header';
import ColorBox from './ColorBox';
import seedColors from '../seeds/seedColors';
import { generatePalette } from '../colorHelpers';
import { useParams } from 'react-router-dom';
import { PaletteStyled } from './PaletteStyled';

const Palette = props => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const findPalette = slug => {
    return seedColors.find(palette => {
      return palette.id === slug;
    });
  };

  let { slug } = useParams();
  const palette = generatePalette(findPalette(slug));

  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox
      key={color.id}
      background={color[format]}
      name={color.name}
      id={color.id}
      paletteId={palette.id}
    />
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
      <footer className="palette-footer">
        {palette.paletteName} - {palette.emoji}
      </footer>
    </PaletteStyled>
  );
};

export default Palette;
