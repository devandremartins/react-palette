import styled from 'styled-components';

export const PaletteListStyled = styled.div`
  .palettes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5%;
    max-width: 100rem;
    margin: 0 auto;
  }
`;
