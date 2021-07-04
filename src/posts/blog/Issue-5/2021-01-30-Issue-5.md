---
title: "API 불러올 때 CORS 에러 이슈"
date: "2021-01-30"
category: "Issue"
desc: "Category Test"
thumbnail: "../images/default.jpg"
alt: "apple big sur gradient"
---

## 원인

API 서버에서 헤더에 CORS (Cross-Origin Resource Sharing, 교차 출처 리소스 공유) 설정을 안해줄 경우 생깁니다.
쉽게 말해서 다른 도메인에서 사용하지 못하게끔 되어있다고 생각하시면 됩니다.

저는 공공데이터를 가져오는 과정에서 에러가 생겼습니다.

### 간단한 예시

제가 사용했던 복지서비스 API를 불러와 오류를 확인해보겠습니다.

```js
const API_KEY = "myApiKey";

fetch(
  `http://www.bokjiro.go.kr/openapi/rest/gvmtWelSvc?crtiKey=${API_KEY}&callTp=L&pageNum=1&numOfRows=10&lifeArray=002`
)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
```

위 코드를 실행시키니 콘솔에 다음과 같은 에러가 나옵니다.

```
Access to fetch at 'http://www.bokjiro.go.kr/openapi/rest/gvmtWelSvc?crtiKey=myApiKey&callTp=L&pageNum=1&numOfRows=10&lifeArray=002' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

![error](/assets/2021-01-30-Issue5/sample.PNG)

## 해결방법

쉽게 CORS 에러를 해결할 수 있는 방법은 중간서버를 거쳐서 보내는 방법입니다.

직접 서버를 만들어도 되지만 규모가 큰 프로젝트가 아니거나 테스트용일 경우 간단하게 url을 추가하여 사용할 수 있습니다.

링크 앞에 https://cors-anywhere.herokuapp.com/ 을 붙여주시면 쉽게 해결됩니다.

```js
fetch(
  `http://www.bokjiro.go.kr/openapi/rest/gvmtWelSvc?crtiKey=${API_KEY}&callTp=L&pageNum=1&numOfRows=10&lifeArray=002`
);
```

를

```js
fetch(
  `https://cors-anywhere.herokuapp.com/http://www.bokjiro.go.kr/openapi/rest/gvmtWelSvc?crtiKey=${API_KEY}&callTp=L&pageNum=1&numOfRows=10&lifeArray=002`
);
```

로 변경하면 됩니다.
