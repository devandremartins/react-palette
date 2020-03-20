import React from 'react';
import seedColors from '../seeds/seedColors';
import { generatePalette } from '../colorHelpers';
import { useParams } from 'react-router-dom';
import ColorBox from './ColorBox';

const SingleColorPalette = () => {
  const findPalette = slug => {
    return seedColors.find(palette => {
      return palette.id === slug;
    });
  };

  let { slug, colorId } = useParams();
  const palette = generatePalette(findPalette(slug));

  const getShades = () => {
    let shades = [];
    for (let key in palette.colors) {
      shades = [
        ...shades,
        palette.colors[key].filter(color => color.id === colorId)
      ];
    }
    return shades.slice(1);
  };

  const colorBoxes = getShades().map(color => (
    <ColorBox key={color.id} name={color.name} color={color.hex} />
  ));

  return <div>{colorBoxes}</div>;
};

export default SingleColorPalette;
