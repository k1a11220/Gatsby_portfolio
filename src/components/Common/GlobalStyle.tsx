import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.fontColor};
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    transition: background-color 0.2s ease;
  }

  html,
  body {
    width: 100vw;
    background-color: ${(props) => props.theme.bgColor};
    display: flex;
    justify-content: center;
    text-rendering: optimizeLegibility;
    font-size: 16px;
  }

  p, a, li {
    font-weight: 400;
    text-decoration: none;
  }
`;
