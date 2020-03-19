import styled from 'styled-components';

export const PaletteListStyled = styled.div`
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  .palettes {
    display: grid;
    grid-template-columns: repeat(3, 30%);
    gap: 5%;
  }
`;
