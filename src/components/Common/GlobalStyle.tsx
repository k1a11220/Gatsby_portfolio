import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  fontColor: "#1D1D1F",
  bgColor: "#ffffff",
  subBgColor: "#F1F2F4",
  btnTextColor: "#ffffff",
  btnBgColor: "#086BCE",
  borderColor: "solid 1px #EBEBEB",
};
export const darkTheme = {
  fontColor: "#ffffff",
  bgColor: "#1D1D1F",
  subBgColor: "#2B2B2B",
  btnTextColor: "#62B1FF",
  btnBgColor: "#203E5C",
  borderColor: "solid 1px #2B2B2B",
};

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
