---
title: "[BackEnd] 8. nodemailer를 활용한 메일보내기 - Part1"
date: "2020-04-12"
category: "prismagram"
desc: "nodemailer를 활용하여 메일을 보내봅시다. 먼저 nodemailer를 설치합니다."
thumbnail: "../images/default.jpg"
alt: "[BackEnd] 8. nodemailer를 활용한 메일보내기 - Part1"
---

## 1. nodemailer 설치하기

nodemailer를 활용하여 메일을 보내봅시다. 먼저 nodemailer를 설치합니다.

```
yarn add nodemailer
```

nodemailer를 설치했으면 utils.js에 메일에 들어갈 내용을 작성해 줍니다.

```js
export const sendMail = (email) => null;

export const sendSecretMail = (adress, secret) => {
  const email = {
    from: "sbs@prismagram.com",
    to: adress,
    subject: "🔒Login Secret for Prismagram🔒",
    html: `Hello Your login secret is ${secret}. <br/> Copy paste on the app/website to login`,
  };
};
```

## 2. transport 설치하기

그런데, 메일을 전송해 주기 위해서는 transport를 설치해 줘야 합니다. 일단 sendgrid를 사용해보겠습니다.  
sendgrid에서 회원가입을 하고 sendgrid transport를 설치합니다.

```
yarn add nodemailer-sendgrid-transport
```

utils.js에 노드메일러와 트랜스포트를 import 합니다.

```js
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
```

그리고 export const sendMail = email => null;에서 null을 지우고 api_user와 api_key를 입력합니다.

```js
export const sendMail = (email) => {
  const options = {
    auth: {
      api_user: "SENDGRID_USERNAME",
      api_key: "SENDGRID_PASSWORD",
    },
  };
};
```

그리고 username과 password는 .env에 저장합니다.

```js
SENDGRID_USERNAME = "사용자이름 입력";
SENDGRID_PASSWORD = "비밀번호 입력";
```

server.js에 utils를 import 합니다.

```js
import "./utils";
```

console.log로 .env 상의 내용을 확인하면 undefined로 출력되는데 이는 server와 util에 동일한 내용을 import 해주면 해결됩니다.

utils.js

```js
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });
```

## 3. 메일 전송되는지 테스트해보기

sendSecretmail은 내부에서 실행되는 함수이므로 export를 지웁니다.

```js
const sendSecretMail = (adress, secret) => {
  const email = {
    from: "sbs@prismagram.com",
    to: adress,
    subject: "🔒Login Secret for Prismagram🔒",
    html: `Hello Your login secret is ${secret}. <br/> Copy paste on the app/website to login`,
  };
};
```

server.js에 함수를 실행시켜봅니다.

```js
import { sendSecretMail } from "./utils";

sendSecretMail("k1a11220@naver.com", "123");
```

그런데, sendgrid가 계정 승인을 안 해줘서 mailgun으로 바꾸겠습니다.

## 이슈

yarn dev 할 때 포트 중복이라고 오류가 나옵니다

```js
events.js:298
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::4000
    at Server.setupListenHandle [as _listen2] (net.js:1309:16)
    at listenInCluster (net.js:1357:12)
    at Server.listen (net.js:1445:7)
    at /Users/beomsoo/Documents/GitHub/prismagram/node_modules/graphql-yoga/src/index.ts:391:22
    at new Promise (<anonymous>)
    at GraphQLServer.start (/Users/beomsoo/Documents/GitHub/prismagram/node_modules/graphql-yoga/src/index.ts:389:12)
    at Object.<anonymous> (/Users/beomsoo/Documents/GitHub/prismagram/src/server.js:16:8)
    at Module._compile (internal/modules/cjs/loader.js:1157:30)
    at Module._compile (/Users/beomsoo/Documents/GitHub/prismagram/node_modules/pirates/lib/index.js:99:24)
    at Module._extensions..js (internal/modules/cjs/loader.js:1177:10)
Emitted 'error' event on WebSocketServer instance at:
    at Server.emit (events.js:321:20)
    at Server.EventEmitter.emit (domain.js:482:12)
    at emitErrorNT (net.js:1336:8)
    at processTicksAndRejections (internal/process/task_queues.js:84:21) {
  code: 'EADDRINUSE',
  errno: 'EADDRINUSE',
  syscall: 'listen',
  address: '::',
  port: 4000
}
```

nodemon에 --delay 2s를 추가하거나 포트 값을 변경해도 동일하게 오류가 나옵니다. 따라서 그냥 server.js에 시작 포트를 입력해 줍니다.

```js
server.start({ port: 4000 }, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
```
