---
title: "6. 컴포넌트 && 라우트 관리하기"
date: "2021-04-06"
category: "볶다"
desc: "지금까지 App.js에서 모든 작업을 수행했습니다. 하지만 효율적인 코드 관리를 위해 역할별로 컴포넌트를 나누어 관리하겠습니다."
thumbnail: "./folder.png"
alt: "6. 컴포넌트 && 라우트 관리하기"
---

## 컴포넌트와 라우트 정리하기

지금까지 App.js에서 모든 작업을 수행했습니다. 하지만 효율적인 코드 관리를 위해 역할별로 컴포넌트를 나누어 관리하겠습니다.

복지 이름, 기관, 설명 등 복지 정보를 알려줄 컴포넌트인 ResultCard와 ResultCard를 관리할 ResultList를 만듭니다. 컴포넌트의 구조는 'ResultList > ResultCard'가 되겠습니다.

또한 컴포넌트를 App.js에서 다루지 않고 추후 페이지가 더 생길 것을 고려해 Home 라우트를 만들어 작업을 수행하겠습니다.

![폴더구조](./folder.png)

## 라우트 생성

App.js의 내용을 Home.js로 전부 이동하고, App.js에서는 react-router-dom으로 Home.js만 불러옵니다.

App.js

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

## 컴포넌트 생성

라우트가 정리되었으면 컴포넌트를 만들어봅시다. 먼저, ResultCard에 들어갈 내용을 정리해보았습니다.

1. 복지서비스 이름
2. 담당 기관
3. 설명

필요한 값을 인자로 세팅한 뒤 html 코드를 정리합니다.

ResultCard.js

```js
import React from "react";

const ResultCard = ({ title, ministry, details }) => {
  return (
    <div className="result-card">
      <div>
        <ul>
          <li>
            <h3>{title}</h3>
          </li>
          <li>
            <h3>{ministry}</h3>
          </li>
        </ul>
        <h4 className="result-description">{details}</h4>
      </div>
    </div>
  );
};

export default ResultCard;
```
