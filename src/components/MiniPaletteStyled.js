import styled from 'styled-components';

export const MiniPaletteStyled = styled.article`
  background: #fff;
  padding: 1.5rem;
  overflow: hidden;
  cursor: pointer;
  border-radius: 3px;
  margin: 0 0 3rem;
  .colors {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    height: 160px;
  }
  .title {
    margin: 0;
    font-size: 1.4rem;
    padding-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
  }
  .emoji {
    line-height: 1;
    font-size: 1.6rem;
  }
  .mini-color-boxes {
    height: 100%;
    width: 100%;
    display: inline-block;
  }
`;
