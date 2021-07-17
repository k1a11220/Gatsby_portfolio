---
title: "3. API 불러오기"
category: "볶다"
date: "2021-02-01"
desc: "Category Test"
thumbnail: "../images/default.jpg"
alt: "apple big sur gradient"
---

## 공공데이터 API 분석하기

한국사회보장정보원에서 제공하는 복지서비스정보 API에서 데이터를 가져오기로 했습니다. 공공데이터포털에 접속해서 API를 살펴봅시다.

![파라미터](/assets/2021-02-01-bokdda-3/Parameter.png)

API 요청 변수를 살펴보니
생애주기, 대상특성, 장애유형, 장애등급, 가구유형, 욕구 총 6개의 기준으로 검색이 가능한 것으로 알 수 있습니다.

따라서 필요하다고 판단되는 생애주기, 대상특성, 가구유형, 욕구로 분류하기로 했습니다.

## API 확인하기

데이터 사용 신청을 하고 api key를 발급받으면 api를 사용할 수 있습니다. 활용가이드에 있는 링크를 접속해 웹브라우저로 API를 확인해봅시다.

생애주기가 아동인 경우

```
http://www.bokjiro.go.kr/openapi/rest/gvmtWelSvc?crtiKey=인증키&callTp=L&pageNum=1&numOfRows=10&lifeArray=002
```

![파라미터](/assets/2021-02-01-bokdda-3/result.png)

xml 형식으로 데이터가 출력되는걸 확인할 수 있습니다.

## 프로젝트에서 API 불러오기

axios를 활용해서 API를 호출해보겠습니다.
CORS에러가 발생하기 때문에 cors-anywhere url를 추가해줍니다.

```js
const API_KEY = "YOUR_API_KEY";
const LIFE_VALUE = "003";
const CHAR_VALUE = "001";
const INVID_VALUE = "001";
const DESIRE_VALUE = "5000000";

async function getAPI() {
  await axios({
    method: "get",
    url: `https://cors-anywhere.herokuapp.com/https://www.bokjiro.go.kr/openapi/rest/gvmtWelSvc?crtiKey=${API_KEY}&callTp=L&pageNum=1&numOfRows=100&lifeArray=${LIFE_VALUE}&charTrgterArray=${CHAR_VALUE}&trgterIndvdlArray=${INDVD_VALUE}&desireArray=${DESIRE_VALUE}`,
  }).then(function (response) {
    const dataSet = response.data;
    console.log(dataSet);
  });
}
```

![xml](/assets/2021-02-01-bokdda-3/xml.png)

정상적으로 콘솔에 출력됩니다.
