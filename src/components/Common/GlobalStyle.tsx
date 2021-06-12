import React, { FunctionComponent } from "react";
import { Global, css } from "@emotion/react";

const defaultStyle = css`
  @import url("https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css");

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-decoration: none;
    color: #4e5968;
    font-weight: 400;
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
