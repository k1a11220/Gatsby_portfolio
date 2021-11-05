---
title: "react start 시 Using target=_blank without rel=noopener noreferrer is a security risk 이슈"
date: "2020-03-26"
category: "Develop"
desc: "Tabnabbing 피싱 공격이란 target_blank인 태그를 클릭하였을 때 새롭게 열린 탭에서 기존 페이지를 피싱페이지로 바꿔 정보를 탈취하는 피싱공격입니다."
thumbnail: "./sample.JPG"
alt: "react start 시 Using target=_blank without rel=noopener noreferrer is a security risk 이슈"
---

## 원인

Tabnabbing 피싱 공격에 노출될 수 있기 때문입니다.
Tabnabbing 피싱 공격이란 target_blank인 태그를 클릭하였을 때 새롭게 열린 탭에서 기존 페이지를 피싱페이지로 바꿔 정보를 탈취하는 피싱공격입니다.

### 간단한 예시

A페이지에서 사용자가 blank 속성의 테그를 클릭하여 B페이지로 이동 -> 다시 A페이지로 돌아왔을 때는 A페이지 처럼 보이는 피싱사이트로 바뀜.
![error](./sample.JPG)

## 해결방법

target="\_blank" 와 rel="noopener noreferrer"을 같이 적용하여 문제를 해결합니다.  
rel="noopener noreferrer"는 rel=noopener 속성이 부여된 링크를 통해 열린 페이지는 opener의 location변경과 같은 자바스크립트 요청을 거부합니다.  
쉽게 말하자면, A페이지의 정보를 바꾸지 못한다는 뜻입니다.

따라서 아래와 같은 코드에 noopener 속성을 추가합니다.

```html
<a className="black" target="_blank" href="https://drive.google.com/">
  Catalog
</a>
```

이렇게요!

```html
<a
  className="black"
  target="_blank"
  rel="noopener noreferrer"
  href="https://drive.google.com/"
>
  Catalog
</a>
```

이렇게 수정하면 보안 이슈를 해결할 수 있습니다.
