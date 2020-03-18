import styled from 'styled-components';

export const ColorBoxStyled = styled.article`
  position: relative;
  cursor: pointer;
  padding: 15px;
  text-transform: uppercase;
  &:hover .copy-btn {
    opacity: 1;
  }
  .copy-btn {
    border: 0;
    opacity: 0;
    transition: 0.3s;
  }
  .color-name {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 12px;
    letter-spacing: 1px;
    padding: 10px;
  }
  .see-more {
    font-size: 12px;
    position: absolute;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.3);
    line-height: 30px;
    width: 60px;
    text-align: center;
    height: 30px;
  }
`;
