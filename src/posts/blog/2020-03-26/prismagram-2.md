---
title: "[BackEnd] 2. typeDefs, Resolvers 만들기"
date: "2020-03-23"
category: "prismagram"
desc: "Category Test"
thumbnail: "../images/default.jpg"
alt: "apple big sur gradient"
---

_모든 내용은 MacOS Catalina 기준으로 작성되었습니다_

## 1. morgan 설치하기

- logging module인 morgan을 추가합니다.

```
yarn add morgan
```

- server.js에 morgan을 추가합니다.

```javascript
import logger from "morgan";
server.express.use(logger("dev"));
```

- morgan을 추가하면 console에 다음과 같이 실시간으로 포트가 출력됩니다.

```c
POST / 200 121.032 ms - 25787
POST / 200 22.315 ms - 25787
GET / 200 0.159 ms - -
POST / 200 17.741 ms - 25787
POST / 200 7.500 ms - 25786
POST / 200 6.661 ms - 25786
GET / 200 0.104 ms - -
```

morgan은 logging module 인데, graphql 서버에는 express 서버가 내장되어 있습니다.

이때 모든 파일은 schema.js에서 합칩니다. api폴더에 필요한 graphql, resolvers파일을 계속 추가하여 구조를 만들겁니다.

## 2. merge 에 필요한 라이브러리 설치

```
yarn add graphql-tools merge-graphql-schemas
```

```js
import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
```

fileLoader : 인자로 경로를 받아 파일을 불러옵니다.  
path.join : 해당 경로의 파일들을 가져옵니다.  
makeExecutabelSchema : type, resolver를 schema 형태로 만들어 줍니다.

## 3. schema를 서버에서 사용하기

#### 서버에서 불러오기

server.js에 다음을 추가합니다.

```js
import schema from "./schema";
```

#### 실행하기

schema로 서버를 실행시킵니다.

```js
const server = new GraphQLServer({ schema });
```

## 이슈

Query를 찾을 수 없다고 하는 에러.  
server.js, schema.js파일은 api 밖에 있어야 합니다.
