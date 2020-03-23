import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background: #fff;
  display: flex;
  min-height: 55px;
  align-items: center;

  .logo {
    line-height: 55px;
    padding: 0 20px 0 15px;
    background: #f5f5f5;
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    a {
      color: #000;
    }
  }
  .slider {
    padding: 0 10px;
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .level {
    display: inline-block;
    font-size: 1.4rem;
    padding: 0 15px;
    span {
      font-weight: 500;
    }
  }

  .rc-slider {
    max-width: 340px;
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
  .format {
    padding: 0 15px;
  }
  .Dropdown-root {
    font-size: 1.4rem;
    color: #000;
    width: 190px;
  }
  .Dropdown-control {
    border: 0;
    border-bottom: 1px solid #e9e9e9;
  }
  .Dropdown-menu {
    border-color: #e9e9e9;
  }
  .Dropdown-arrow {
    border-color: #000 transparent transparent;
  }
  .is-open .Dropdown-arrow {
    border-color: transparent transparent #000;
  }
`;
