import styled from 'styled-components';

export const SingleColorPaletteStyled = styled.div`
  .color-shades {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    min-height: 90vh;
  }
  .goback-box {
    background: #000;
    position: relative;
    cursor: pointer;
    padding: 15px;
    text-transform: uppercase;
    min-height: 6rem;
  }
  .goback-btn {
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.3);
    padding: 0.5rem 1rem;
    color: #fff;
    border: 0;
    transition: 0.3s;
    font-size: 1.4rem;
    letter-spacing: 1px;
    font-weight: 400;
  }
`;
