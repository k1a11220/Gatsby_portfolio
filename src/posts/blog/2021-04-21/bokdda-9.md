---
title: "9. 에러 방지하기 && 안내문구 만들기"
date: "2021-04-21"
category: "볶다"
desc: "에러를 방지하기 위해서는 어디에서 에러가 발생하는지 찾아야 합니다. 볶다의 경우 API에서 불러오는 데이터가 없을경우 로딩 애니메이션만 계속 출력되므로 방지해야 합니다."
thumbnail: "../images/default.jpg"
alt: "9. 에러 방지하기 && 안내문구 만들기"
---

## 에러발생 변수 찾아내기

에러를 방지하기 위해서는 어디에서 에러가 발생하는지 찾아야 합니다. 볶다의 경우 API에서 불러오는 데이터가 없을 경우 로딩 애니메이션만 계속 출력되므로 방지해야 합니다.

API 배열의 개수로 데이터의 유무를 확인하겠습니다.

Home.js

```js
...
 async function parseStr(dataSet) {
    const dataArr = new XMLParser().parseFromString(dataSet).children;
    resultCount = dataArr.length; // 검색된 데이터의 수를 구한다. (dataArr length 에서 5개 값이 빠짐)
    if (resultCount < 5) { //만약에 데이터의 수가 5개 미만이면
      alert("검색결과가 없습니다."); // 알람
      setLoaded(false); // 로딩에니메이션 hide
      setPrint(false);
    }
    setState((preState) => {
      return {
        ...preState,
        results: dataArr.slice(resultNumber, resultCount - 1),
      };
    });
    setLoaded(false);
    setPrint(true);
 }
...
```

검색 결과가 없을 경우 브라우저에서 알림을 표시합니다.

## 상황에 맞는 텍스트 표시하기

UX 개선을 위해 데이터를 조회하기 전과 조회 후 텍스트를 다르게 해보려고 합니다.
print라는 hook을 하나 만들어 관리하겠습니다.

Home.js

```js
  const [print, setPrint] = useState(false);
...
        <div className="js-result">
          <h2>
            {print === true
              ? "지원 가능한 서비스를 살펴보세요."
              : "서비스를 조회해보세요."}
          </h2>
        </div>
...
```

parseStr 함수를 실행할 때 print의 state도 같이 변경합니다.

```Js
 async function parseStr(dataSet) {
    const dataArr = new XMLParser().parseFromString(dataSet).children;
    resultCount = dataArr.length; // 검색된 데이터의 수를 구한다. (dataArr length 에서 5개 값이 빠짐)
    if (resultCount < 5) { //만약에 데이터의 수가 5개 미만이면
      alert("검색결과가 없습니다."); // 알람
      setLoaded(false); // 로딩에니메이션 hide
    }
    setState((preState) => {
      return {
        ...preState,
        results: dataArr.slice(resultNumber, resultCount - 1),
      };
    });
    setLoaded(false);
 }
```

정상적으로 서비스가 작동합니다.
