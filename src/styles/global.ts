import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #eeeeee;
    color: #FFF;
    -webkit-font-smoothing: antialised;
  }
  body, input, button {
    font: 16px 'Montserrat', sans-serif;
  }
  #root {
    margin: 0 auto;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
