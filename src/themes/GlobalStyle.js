import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    user-select: none;
    margin: 0;
    padding: 0;
    font-family: "Rubik", sans-serif;
  }
  body {
    overflow-x: hidden;
    ::before {
         content: " ";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.palette.primary.default};
        z-index: -999;
      }
  }
  code * {
    font-family: "Cascadia Code", source-code-pro, Menlo, Monaco, Consolas,
      "Courier New", monospace !important;
  }
  #root {
    display: flex;
    margin: 0;
    min-height: 100vh;
    height: fit-content;
    width: 100vw;
    /* padding-bottom: 6rem; */
    ::before {
      content: " ";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.15;
      /* */
      background-image: url("./images/binback${({ theme }) => theme.theme}.png");
      background-repeat: no-repeat;
      background-position: 50% 0;
      background-size: cover;
      z-index: -998;
    }
  }
  @media (orientation: portrait) {
    #root {
      flex-direction: column;
    }
  }
`;

export default GlobalStyle;
