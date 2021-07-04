---
title: "[BackEnd] 1. 프로젝트 생성, 셋업하기"
date: "2020-03-22"
category: "prismagram"
desc: "Category Test"
thumbnail: "../images/default.jpg"
alt: "apple big sur gradient"
---

_모든 내용은 MacOS Catalina 기준으로 작성되었습니다_

## 프로젝트 셋업하기

## 1. 프로젝트 생성

- Github에서 Repository 만들기
- .gitignore: Node
- yarn init 혹은 npm init 한뒤 Git 연동.

## 2. GraphQL 서버 구축을 위한 라이브러리 설치

- graphql-yoga

  ```
  yarn add graphql-yoga
  ```

- nodemon -D (src/server.js에 있는 코드를 실행하는 script를 작성하는데 필요합니다.)

  ```
  yarn add nodemon -D
  ```

- babel-cli -D

  ```
  yarn add babel-cli -D
  ```

## 3. server.js 생성

- src 폴더 내부에 server.js 파일을 생성합니다.

## 4. package.json 수정

- main: index.js 제거
- yarn dev를 실행하면 nodemon –exec babel-node src/server.js를 실행하게 합니다

  ```js
  "scripts" : {
  "dev" : "nodemon --exec babel-node src/server.js"
  }
  ```

- nodemon을 실행할 때마다 babel-node로 src폴더의 server.js 파일을 실행하게 됩니다.
- nodemon은 저장할 때마다 실행을 해주는 도구입니다. 서버를 껐다가 킬 필요가 없어지게 해주는 도구입니다.
- babel은 코드를 호환성 있게 만들어줍니다.
- .babelrc 파일을 만든뒤 node가 import를 인식할 수 있도록 아래와 같은 코드를 입력합니다.

  ```js
  {
  "presets": ["@babel/preset-env"]
  }
  ```

- @babel/node와 @babel/preset-env, @babel/core를 설치하여 babel을 세팅합니다.

## 5. 환경변수 설정하기

로컬서버를 사용하기위한 PORT와 같은 환경변수를 설정해주는 작업을 해야합니다. 이러한 환경변수들은 따로 .env파일을 통해 관리합니다.

- .env파일을 src 폴더에 만든 뒤 설정할 포트 PORT = 4000을 선언합니다. 모든 환경변수들은 .env에 선언하는 것이 좋습니다.

  ```js
  PORT = 4000;
  ```

- server.js에서 PORT 변수를 만듭니다.

  ```js
  require("dotenv").config();
  const PORT = process.env.PORT || 4000;
  ```

이때, .config()에서 아무것도 입력하지 않은 경우에는 .env 파일로 인식하여 실제 .env파일에는 아무내용도 입력하지 않는 것 같습니다.

## 6. typeDefs, Resolvers 만들기

서버를 만들기 위해서는 query를 생성해야하는데, query를 생성하기 위해서는 typeDefs과 Resolvers가 필요합니다.
그 Type과 Resolvers를 Server.js안에 우선 만들어보도록 하겠습니다.

```js
//typeDefs
const typeDefs = `type Query{ hello : String! }`;
//resolvers
const resolvers = {
  Query: {
    hello: () => "hello",
  },
};
const server = new GraphQLServer({ typeDefs, resolvers });
server.start({ port: PORT }, () =>
  console.log(`server is running http://localhost:${PORT}`)
);
```

## 7. 마무리

yarn dev를 하면 server is running http://localhost:4000 라는 메시지가 뜨며 서버가 동작합니다.

## 이슈

Requires Babel "^7.0.0-0", but was loaded with "6.26.3".  
If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version.

에러 발생. -> yarn global remove babel-cli로 해결
