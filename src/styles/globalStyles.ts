import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    width: 100%;
    min-height: 100vh;
    line-height: 1.4;
  }
`;
