---
title: "[FrontEnd] 2. Setup Apollo-Client"
date: "2020-09-03"
category: "prismagram"
desc: "로그인 여부를 확인하기 위해 Apollo Client를 사용합니다. apollo-boost 라이브러리를 통해 Apollo Client를 사용하겠습니다."
thumbnail: "./application.png"
alt: "[FrontEnd] 2. Setup Apollo-Client"
---

## 1. Apollo Client

로그인 여부를 확인하기 위해 Apollo Client를 사용합니다. apollo-boost 라이브러리를 통해 Apollo Client를 사용하겠습니다.

## 2. Client 만들기

Apollo/Client.js를 생성합니다. Client.js에서 클라이언트를 제작할 수 있습니다.

apollo-boost에서 Client를 추가하여 사용합니다. uri는 서버의 주소인 localhost:4000을 사용합니다.

Client.js

```js
import ApolloClient from "apollo-boost";

export default new ApolloClient({
  uri: "http://localhost:4000",
});
```

## 3. App.js와 연결하기

react-apollo-hooks의 Apollo-Provider를 통해 App.js와 연결합니다. App.js에 Client가 필요하므로 App.js에 Provider를 import 합니다.

App.js

```js
import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import { ApolloProvider } from "react-apollo-hooks";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import AppRouter from "./AppRouter";
import Client from "../Apollo/Client";

export default () => (
  <ThemeProvider theme={Theme}>
    <ApolloProvider client={Client}>
      <GlobalStyles />
      <AppRouter isLoggedIn={false} />
    </ApolloProvider>
  </ThemeProvider>
);
```

Backend 프로젝트에서 서버를 실행시키고 apollo-dev-tools를 실행시키면 툴이 동작합니다.

## 4. ClientState 만들기

ClientState를 만들기 전에 ApolloClient를 index.js로 이동합니다. 그 이유는 Components보다 Query를 먼저 생성하기 위해서입니다. ClientState는 App이 오프라인일 때 발생합니다.

처음 Router가 Auth가 될지, Post가 될지 결정하는 인자인 isLoggedIn을 defaults에서 정의하고 Mutation은 resolvers에서 정의합니다.

isLoggedIn은 localstorage에 token이 저장되어 있을 경우 ture 아닐 경우 false를 리턴합니다. (로컬에 저장하여도 문제가 없음.)

logUserIn Mutation은 token, cache를 인자로 받아 저장합니다.  
logUserOut Mutation은 token, cache를 초기화합니다.

localState.js

```js
export const defaults = {
  isLoggedIn: localStorage.getItem("token") !== null ? true : false,
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: {
          isLoggedIn: true,
        },
      });
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location.reload();
      return null;
    },
  },
};
```

Client.js

```js
import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";
export default new ApolloClient({
  uri: "http://localhost:4000",
  clientState: {
    defaults,
    resolvers,
  },
});
```

## 5. Query

backend의 Query를 호출하기 위해서는 client에서 Query를 작성해놔야 합니다.

App.js에서 gql을 import 합시다.

```js
import { gql } from "apollo-boost";
```

```js
const QUERY = gql`
  {
    isLoggedIn @client
  }
`;
```

## 6. App.js 코드

```js
import React from "react";
import { gql } from "apollo-boost";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";
import { useQuery } from "react-apollo-hooks";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router isLoggedIn={isLoggedIn} />
      </>
    </ThemeProvider>
  );
};
```

token 값을 입력하면, Auth 가 아닌 Feed 페이지가 나타납니다.

![application](./application.png)
