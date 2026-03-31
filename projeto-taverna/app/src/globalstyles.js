import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: #562F00;
    color: #FFFFFF;
    min-height: 100vh;
    font-family: "Inter", sans-serif;
  }
`;