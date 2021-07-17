---
title: "5. xml 데이터를 json 타입으로 변환하기"
category: "볶다"
date: "2021-04-05"
desc: "Category Test"
thumbnail: "../images/default.jpg"
alt: "apple big sur gradient"
---

## select 값을 API에 집어넣기

hook을 통해 html의 select 값을 가져왔습니다. 먼저, let 으로 선언한 변수에 select 값을 넣어줍니다.

```js
let LIFE_VALUE = "";
let CHAR_VALUE = "";
let INDVD_VALUE = "";
let DESIRE_VALUE = "";

const { register, handleSubmit } = useForm();
const onSubmit = (data) => {
  LIFE_VALUE = data.lifeArr;
  CHAR_VALUE = data.charArr;
  INDVD_VALUE = data.indvdArr;
  DESIRE_VALUE = data.desireArr;
};
```

변수에 들어있는 값을 API에 집어넣기 위해서 처음에 만들었던 axios 함수를 응용해봅시다.

getAPI라는 함수를 만들겠습니다. async와 await를 사용하는 이유는 API가 로드될 때 까지 기다린 후 다음 함수를 실행하기 위함입니다. async와 await는 나중에 더 자세히 설명하도록 하겠습니다.

```js
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

정상적으로 dataSet이 console에 출력되는걸 알 수 있습니다.

## xml 데이터를 json 타입으로 변환하기

출력된 데이터 형식을 보면 xml 형식입니다. json 타입으로 변환해서 사용해보도록 하겠습니다.

1. XMLParser를 추가합니다.

XMLParser는 xml → json 변환을 도와줍니다.

```s
yarn add react-xml-parser
```

```js
import XMLParser from "react-xml-parser";
```

parseStr 함수를 만들고, getAPI 함수의 리턴값을 parseStr에 넣겠습니다.

```js
function parseStr(dataSet) {
  const dataArr = new XMLParser().parseFromString(dataSet).children;
  console.log(dataArr);
}

async function getAPI() {
  await axios({
    method: "get",
    url: `https://cors-anywhere.herokuapp.com/https://www.bokjiro.go.kr/openapi/rest/gvmtWelSvc?crtiKey=${API_KEY}&callTp=L&pageNum=1&numOfRows=100&lifeArray=${LIFE_VALUE}&charTrgterArray=${CHAR_VALUE}&trgterIndvdlArray=${INDVD_VALUE}&desireArray=${DESIRE_VALUE}`,
  }).then(function (response) {
    const dataSet = response.data;
    parseStr(dataSet);
  });
}
```

console에 정상적으로 json 타입으로 변환된 데이터가 출력되었습니다.

![콘솔출력](/assets/2021-04-05-bokdda-5/console.png)
