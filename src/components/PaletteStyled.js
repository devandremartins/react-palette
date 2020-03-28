import styled from 'styled-components';

export const PaletteStyled = styled.div`
  min-height: 100vh;
  .palette-colors {
    height: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /*grid-auto-rows: 1fr;*/
  }
`;
