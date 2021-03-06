import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
  }

  #root{
    position:relative;
    min-height: 100vh;
  }

  html{
    font-size: 62.5%;
  }

  body {
    font-family: 'Quicksand', sans-serif;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
