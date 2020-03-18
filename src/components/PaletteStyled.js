import styled from 'styled-components';

export const PaletteStyled = styled.div`
  height: 100vh;
  .palette-colors {
    height: 90%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  .slider {
    width: 340px;
    margin: 0 10px;
    display: inline-block;
  }
  .rc-slider-track {
    background: transparent;
  }
  .rc-slider-rail {
    height: 8px;
  }
  .rc-slider-handle,
  .rc-slider-handle:active,
  .rc-slider-handle:hover,
  .rc-slider-handle:focus {
    background: green;
    outline: none;
    border: 2px solid green;
    box-shadow: none;
    width: 13px;
    height: 13px;
    margin-left: -7px;
    margin-top: -3px;
  }
`;
