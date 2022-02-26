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
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  #root {
    display: flex;
    margin: 0;
    min-height: 100vh;
    height: fit-content;
    width: 100vw;
    background-color: ${(props) => props.theme.palette.primary.default};
    overflow: hidden;
  }
  @media (orientation: portrait) {
    #root {
      flex-direction: column;
    }
  }
`;

export default GlobalStyle;
