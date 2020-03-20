import React from 'react';

const Footer = ({ paletteName, emoji }) => {
  return (
    <footer className="palette-footer">
      {paletteName} - {emoji}
    </footer>
  );
};

export default Footer;
