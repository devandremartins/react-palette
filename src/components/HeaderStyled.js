import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background: #fff;
  display: flex;
  height: 6vh;
  align-items: center;
  justify-content: flex-start;
  .logo {
    padding: 0 15px;
    background: #f9f9f9;
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    a {
      color: #000;
    }
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
