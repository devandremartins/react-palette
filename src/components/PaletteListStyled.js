import styled from 'styled-components';

export const PaletteListStyled = styled.div`
  padding: 0 3rem;
  .palettes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    max-width: 100rem;
    margin: 3rem auto;
  }
`;
