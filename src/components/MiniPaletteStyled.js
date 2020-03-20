import styled from 'styled-components';

export const MiniPaletteStyled = styled.article`
  background: #fff;
  padding: 1rem;
  overflow: hidden;
  cursor: pointer;
  border-radius: 3px;
  .colors {
    height: 150px;
    width: 100%;
  }
  .title {
    margin: 0;
    font-size: 1.4rem;
  }
  .emoji {
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }
  .mini-color-boxes {
    height: 25%;
    width: 20%;
    display: inline-block;
    margin: 0 auto;
    position: relative;
  }
`;
