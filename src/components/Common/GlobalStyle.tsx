import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
 @import url('<http://cdn.jsdelivr.net/gh/joungkyun/font-d2coding/d2coding.css>');

 @font-face {
  font-family: 'D2 coding';
  font-style: normal;
  font-weight: 400;
  src: url('D2Coding.eot');
  src: local('※'), local('D2Coding'),
       url('D2Coding.eot?#iefix') format('embedded-opentype'),
       url('D2Coding.woff2') format('x-woff2'),
       url('D2Coding.woff') format('woff'),
       url('D2Coding.ttf') format('truetype'),
       url('D2Coding.svg') format('svg');
}
@font-face {
  font-family: 'D2 coding';
  font-style: normal;
  font-weight: 700;
  src: url('D2CodingBold.eot');
  src: local('※'), local('D2Coding Bold'),
       url('D2CodingBold.eot?#iefix') format('embedded-opentype'),
       url('D2CodingBold.woff2') format('x-woff2'),
       url('D2CodingBold.woff') format('woff'),
       url('D2CodingBold.ttf') format('truetype'),
       url('D2CodingBold.svg') format('svg');
}

  * {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.fontColor};
    transition: background-color 0.2s ease;

    &:not(code > span) {
      font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
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
