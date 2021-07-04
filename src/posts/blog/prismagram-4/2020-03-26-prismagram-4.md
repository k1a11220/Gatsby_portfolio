---
title: "[BackEnd] 4. Prisma에서 데이터 받아오기"
date: "2020-03-26"
category: "prismagram"
desc: "Category Test"
thumbnail: "../images/default.jpg"
alt: "apple big sur gradient"
---

_모든 내용은 MacOS Catalina 기준으로 작성되었습니다_

## 1. Prisma client

Prisma와 api를 연결하기 위해서는 Prisma client가 필요합니다.  
예를들면 영화 api처럼 Prisma에서 정의한 데이터를 쉽게 가져올 수 있도록 합니다.

```
yarn add prisma-client-lib
```

## 2. 스크립트 추가

package.json에서 다음과 같은 스크립트를 추가합니다.

```js
"deploy": "yarn prisma deploy",
"generate": "yarn prisma generate",
"do": "yarn run deploy && yarn run generate",
"dev": "nodemon --exec babel-node src/server.js”
```

js파일에

```js
import { prisma } from "../../../generated/prisma-client";
export default {
  Query: {
    hello: async () => {
      console.log(await prisma.users());
      return "hello";
    },
  },
};
```

## 3. prisma.yml 살펴보기

prisma.yml 파일을 보면...

```graphql
endpoint: https://us1.prisma.sh/blablabla....
datamodel: datamodel.prisma

generate:
  - generator: javascript-client
    output: ./generated/prisma-client/
```

generated 폴더에 있는 index, prisma-schema 파일을 통해 prisma와 정보를 주고받습니다.

## 이슈

prisma.yml파일은 git에 커밋하면 안됩니다. 여기에 endpoint url이 있는데 endpoint에서 모든 데이터를 조회할 수 있기 때문에 .gitignore에 추가합니다.

```py
# Next.js build output
.next
generated
prisma.yml
```

만약 prisma에 문제가 생긴다면 모든 서비스와 url을 변경해야 합니다.

스크립트에 do 대신에 prisma로 할 경우 스크립트 실행할 때 무한루프가 발생합니다.  
prisma 명령어가 콘솔에서 안먹는 경우에 yarn prisma를 해서 생기는데,  
prisma 대신에 do나 다른 스크립트로 대체하면 됩니다.
