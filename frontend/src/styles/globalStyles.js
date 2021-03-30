import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 0; //change with mediaqueries
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
    background-color: #F2F7F4;

    @media(min-width: ${theme.screenSize.laptopL}){
      margin: 0 15rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
