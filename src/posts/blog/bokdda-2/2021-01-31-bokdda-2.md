---
title: "2. CRA && 컴포넌트와 라우트 설정하기."
date: "2021-01-31"
category: "볶다"
desc: "Category Test"
thumbnail: "../images/default.jpg"
alt: "apple big sur gradient"
---

## CRA setup

bokjiiiiii 라는 이름으로 프로젝트를 생성합니다.

```
npx create-react-app bokjiiiiii
```

app.js와 index.js를 제외한 파일을 모두 제거하고 컴포넌트와 라우트 폴더를 만듭니다.

![UI](/assets/2021-01-31-bokdda-2/ui.png)

## 컴포넌트, 라우트 구성

하나의 라우트로 간단하게 구성합니다. 따라서 Home.js 파일 하나만 생성합니다.

컴포넌트는 검색결과를 불러올 ResultList.js와 검색결과를 포함하는 ResultCard.js 총 2개의 컴포넌트를 생성합니다.

![UI](/assets/2021-01-31-bokdda-2/routes.png)

## App.js

react-router-dom으로 Home.js를 불러옵니다.

```js
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
    </HashRouter>
  );
}

export default App;
```
