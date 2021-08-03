---
title: "4. React hook 으로 select 값 관리하기"
category: "볶다"
date: "2021-03-29"
desc: "리액트에서는 Hook을 사용해서 좀 더 쿨하게 태그의 값을 받아올 수 있습니다. 직접 만들어보면서 구현해보겠습니다."
thumbnail: "./console.png"
alt: "4. React hook 으로 select 값 관리하기"
---

## 리액트 Hook && ref와 Select 태그로 선택 값 받아오기

바닐라 자바스크립트에서는 document.qureySelector("")로 태그를 선택해서 값을 받아왔습니다. 그런데, 리액트에서는 Hook을 사용해서 좀 더 쿨하게 태그의 값을 받아올 수 있습니다. 직접 만들어보면서 구현해보겠습니다.

1. react-hook-form에서 useForm을 불러옵니다.

```
yarn add react-hook-form
```

```js
import { useForm } from "react-hook-form";
```

2. 코드 구조 만들기

option의 value는 복지 API 공식문서에 나와있는 값을 넣었습니다.

```js
import { useForm } from "react-hook-form";
import "./App.css";

const App = () => {
  let LIFE_VALUE = ""; // 값이 계속 바뀌기 때문에 let으로 선언.
  const { register, handleSubmit } = useForm(); //ref의 선택자인 register
  const onSubmit = (data) => {
    LIFE_VALUE = data.lifeArr;
    console.log(LIFE_VALUE);
  }; // data(인자)를 받아 lifeArr(select name 속성) LIFE_VALUE의 값에 반영한다.
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*폼을 제출할 때 onSubmit을 실행한다.*/}
        <select name="lifeArr" ref={register}>
          <option value="none">선택하세요</option>
          <option value="001">영유아</option>
          <option value="002">아동</option>
          <option value="003">청소년</option>
          <option value="004">청년</option>
          <option value="005">중장년</option>
          <option value="006">노년</option>
        </select>
        <input type="submit" value="결과보기" />
      </form>
    </div>
  );
};

export default App;
```

select 태그에 name과 ref를 추가합니다. name은 option의 값을 저장할 변수의 이름이고, ref는 id나 class처럼 DOM에 붙이는 이름이라 생각하면 됩니다.
ref는 id와 달리 컴포넌트 내부에서만 사용하기 때문에 충돌할 위험성이 줄어듭니다. 또한 react 매서드의 사용이 가능합니다.

![콘솔출력](./console.gif)

폼을 제출하면 정상적으로 데이터가 콘솔에 출력됩니다.

더 디테일한 내용은 아래 공식 문서를 참고하면 좋습니다.
[react-hook-form 공식문서](https://react-hook-form.com/kr/api/)

## 나머지 값도 추가하기

CSS 스타일링을 위해 html 코드를 조금 수정하고 위 형식에 맞춰 다른 데이터도 폼에 추가해 줍니다.

```js
<form className="select-wrapper" onSubmit={handleSubmit(onSubmit)}>
  <div className="select-container">
    <ul className="select-area">
      <li className="option-container">
        <h2 className="option-title">생애주기</h2>
        <select name="lifeArr" ref={register} className="js-life">
          <option value="none">선택하세요</option>
          <option value="001">영유아</option>
          <option value="002">아동</option>
          <option value="003">청소년</option>
          <option value="004">청년</option>
          <option value="005">중장년</option> //asd
          <option value="006">노년</option>
        </select>
      </li>

      <li className="option-container">
        <h2 className="option-title">대상특성</h2>
        <select name="charArr" ref={register} className="js-char">
          <option value="none">선택하세요</option>
          <option value="001">해당없음</option>
          <option value="002">여성</option>
          <option value="003">임산부</option>
          <option value="004">장애</option>
          <option value="005">국가유동자등 보훈대상자</option>
          <option value="006">실업자</option>
        </select>
      </li>

      <li className="option-container">
        <h2 className="option-title">가구유형</h2>
        <select name="indvdArr" ref={register} className="js-indvd">
          <option value="none">선택하세요</option>
          <option value="001">해당없음</option>
          <option value="002">한부모</option>
          <option value="003">다문화</option>
          <option value="004">조손</option>
          <option value="005">새터민</option>
          <option value="006">소년소녀가장</option>
          <option value="007">독거노인</option>
        </select>
      </li>

      <li className="option-container">
        <h2 className="option-title">욕구</h2>
        <select name="desireArr" ref={register} className="js-desire">
          <option value="none">선택하세요</option>
          <option value="0000000">안전</option>
          <option value="1000000">건강</option>
          <option value="2000000">일상생활유지</option>
          <option value="3000000">가족관계</option>
          <option value="4000000">사회적 관계</option>
          <option value="500000">경제</option>
          <option value="6000000">교육</option>
          <option value="7000000">고용</option>
          <option value="8000000">생활환경</option>
          <option value="9000000">법률 및 권익보장</option>
          <option value="A000000">기타</option>
        </select>
      </li>
    </ul>
  </div>
  <div className="search-container">
    <input className="submitBtn" type="submit" value="결과보기" />
    <input className="resetBtn" type="reset" value="초기화" />
  </div>
</form>
```
