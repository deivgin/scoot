import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
    background-color: #F2F7F4;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
