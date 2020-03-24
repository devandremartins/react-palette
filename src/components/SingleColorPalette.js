import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import seedColors from '../seeds/seedColors';
import { generatePalette } from '../colorHelpers';
import { useParams } from 'react-router-dom';
import ColorBox from './ColorBox';
import Header from './Header';
import Footer from './Footer';
import { SingleColorPaletteStyled } from './SingleColorPaletteStyled';

const SingleColorPalette = () => {
  const [format, setFormat] = useState('hex');

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
        ...palette.colors[key].filter(color => color.id === colorId)
      ];
    }
    console.log(shades);

    return shades.slice(1);
  };

  const colorBoxes = getShades().map(color => (
    <ColorBox
      key={color.name.replace(/\s/g, '')}
      name={color.name}
      background={color.hex}
      showLink={false}
    />
  ));

  const changeFormat = e => {
    setFormat(e.value);
  };

  return (
    <SingleColorPaletteStyled>
      <Header changeFormat={changeFormat} showFormatDropdown={true} />
      <div className="color-shades">
        {colorBoxes}
        <article className="goback-box">
          <Link to={`/palette/${palette.id}`} className="goback-btn">
            Go Back
          </Link>
        </article>
      </div>
      <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
    </SingleColorPaletteStyled>
  );
};

export default SingleColorPalette;
