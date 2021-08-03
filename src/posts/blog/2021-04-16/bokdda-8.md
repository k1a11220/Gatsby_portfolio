---
title: "8. 로딩 애니메이션 구현하기."
date: "2021-04-16"
category: "볶다"
desc: "로딩 여부를 확인해야 하는 컴포넌트는 ResultList 입니다. 따라서 검색 결과를 불러올 때 까지 로딩 애니메이션을 표시하겠습니다."
thumbnail: "../images/default.jpg"
alt: "8. 로딩 애니메이션 구현하기."
---

## 로딩 애니메이션 가져오기

로딩 여부를 확인해야 하는 컴포넌트는 ResultList입니다. 따라서 검색 결과를 불러올 때까지 로딩 애니메이션을 표시하겠습니다.
애니메이션은 따로 만들지 않고, 구글 머티리얼 디자인에서 사용합니다.

Home.js

```js
import { CircularProgress } from "@material-ui/core";

...
<CircularProgress className="spinner"/>
...
```

정상적으로 화면에 애니메이션이 표시됩니다.

## hook으로 애니메이션 제어하기

로딩 여부를 관리하는 hook을 하나 만듭니다.
Home.js

```js
...
const [loaded, setLoaded] = useState(false);
...
```

loaded hook의 작동 로직입니다.

| 상태               | Boolean |
| ------------------ | ------- |
| 기본               | false   |
| 검색버튼 클릭      | true    |
| 컴포넌트 로딩 완료 | false   |

삼항연산자를 사용하여 애니메이션을 관리하겠습니다.

Home.js

```js
...
const [loaded, setLoaded] = useState(false);

{
  loaded === true ? (
    <>
      <br />
      <br />
      <br />
      <CircularProgress className="spinner" />
      <br />
      <br />
    </>
  ) : null;
}
...
```

## hook으로 컴포넌트 로딩 여부 확인하기

먼저, 검색버튼을 누르면 loaded의 상태를 true로 변경해야 합니다.

Home.js

```js
const onSubmit = (data) => {
  LIFE_VALUE = data.lifeArr;
  CHAR_VALUE = data.charArr;
  INDVD_VALUE = data.indvdArr;
  DESIRE_VALUE = data.desireArr;
  setLoaded(true); // onSubmit 함수를 실행하면 loaded의 값을 true로 설정합니다.
  getAPI();
};
```

getAPI 이후 parseStr 함수가 차례대로 실행되면 loaded의 값을 다시 false로 변경합니다.

```js
async function parseStr(dataSet) {
  const dataArr = new XMLParser().parseFromString(dataSet).children;
  resultCount = dataArr.length; // 검색된 데이터의 수를 구한다. (dataArr length 에서 5개 값이 빠짐)
  setState((preState) => {
    return {
      ...preState,
      results: dataArr.slice(resultNumber, resultCount - 1),
    };
  });
  setLoaded(false);
}
```

정상적으로 hook을 사용하여 로딩 애니메이션을 구현했습니다.
