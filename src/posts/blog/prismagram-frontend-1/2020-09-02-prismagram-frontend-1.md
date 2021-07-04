---
title: "[FrontEnd] 1. create-react-app"
date: "2020-09-02"
category: "prismagram"
desc: "Category Test"
thumbnail: "../images/default.jpg"
alt: "apple big sur gradient"
---

_모든 내용은 MacOS Bigsur 기준으로 작성되었습니다_

## 1. CRA (Create React App)

리액트 웹앱을 활용하여 제작할 예정이므로 CRA를 통해 프로젝트를 생성해 주어야 합니다.

먼저, github에 Repository를 만든 후 프로젝트를 생성합니다.

```bash
npx create-react-app prismagram-frontend
```

## 2. Clean Up

프로젝트를 생성하였으면 순서대로 프로젝트를 정리해줍니다.

- App.js를 제외한 파일을 모두 제거한 뒤 src/components 폴더를 생성합니다.
- styled-components, react-router-dom, graphql, react-apollo-hooks, apollo-boost, react-helmet, react-toastify를 추가합니다.

```bash
yarn add styled-components react-router-dom graphql react-apollo-hooks apollo-boost react-helmet react-toastify
```

- src/styles 폴더를 생성합니다.
- styles 폴더 내에 GlobalStyles.js, Theme.js 파일을 추가합니다. 공통적으로 해당되는 스타일과 테마를 지정하게 도와줍니다.

## 3. GlobalStyles.js

기본적으로 적용될 스타일을 추가합니다.

```js
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
${reset};
* {
    box-sizing:border-box;
}
`;
```

## 4. Theme.js

공통으로 사용될 리소스들을 테마에 추가합니다.

```js
const BOX_BORDER = "1px solid #e6e6e6";
const BORDER_RADIUS = "4px";

export default {
  bgColor: "#FAFAFA",
  blackColor: "#262626",
  darkGreyColor: "#999",
  lightGreyColor: "#c7c7c7",
  redColor: "#ED4956",
  blueColor: "#3897f0",
  darkBlueColor: "#003569",
  whiteBox: `${BOX_BORDER};
             ${BORDER_RADIUS};
             background-color:white;
             `,
};
```

## 5. App.js

컴포넌트와 테마를 불러옵니다. 실행이 잘 되는지 테스트해봅시다.

```js
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";

export default () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    안녕
  </ThemeProvider>
);
```
