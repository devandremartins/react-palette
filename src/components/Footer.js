import React from 'react';
import { FooterStyled } from './FooterStyled';

const Footer = ({ paletteName, emoji }) => {
  return (
    <FooterStyled>
      {paletteName} - {emoji}
    </FooterStyled>
  );
};

export default Footer;
