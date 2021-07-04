---
title: "[FrontEnd] 3. Auth 페이지 제작"
date: "2020-09-13"
category: "prismagram"
desc: "Category Test"
thumbnail: "../images/default.jpg"
alt: "apple big sur gradient"
---

_모든 내용은 MacOS Bigsur 기준으로 작성되었습니다_

## 1. 컴포넌트 설계

Auth 페이지의 컴포넌트를 설계합니다.

![인스타그램 Auth 페이지](/assets/2020-09-13-prismagram-frontend-3/1.png)
![인스타그램 Auth 페이지](/assets/2020-09-13-prismagram-frontend-3/2.png)

Auth 페이지는 크게 3가지의 파트로 구성하었습니다.

1. login
2. register
3. footer

login과 register에는 StateChanger와 Input, Button이 필요합니다.
