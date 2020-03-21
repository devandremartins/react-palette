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
  .copy-overlay {
    opacity: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
    &.show {
      opacity: 1;
      transform: scale(50);
      z-index: 10;
      position: absolute;
    }
  }
  .copy-msg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 4.5rem;
    opacity: 0;
    color: #fff;
    transform: scale(0.1);
    &.show {
      opacity: 1;
      transform: scale(1);
      z-index: 25;
      transition: all 0.5s ease-in-out;
      transition-delay: 0.1s;
    }
    h1 {
      margin-bottom: 1.5rem;
    }
  }
`;
