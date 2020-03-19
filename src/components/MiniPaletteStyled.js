import styled from 'styled-components';

export const MiniPaletteStyled = styled.div`
  background: white;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid black;
  .colors {
    background: grey;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding-top: 0.5rem;
    font-size: 1rem;
  }
  .emoji {
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }
`;
