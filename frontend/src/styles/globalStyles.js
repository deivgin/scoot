import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
    background-color: #F2F7F4;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
