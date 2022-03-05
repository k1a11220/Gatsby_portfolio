---
title: "Matched leaf route at location "/" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page. 에러 해결법"
date: "2021-11-11"
category: "Develop"
desc: "react-router-dom에서 component={Component} 타입으로 Route를 작성했을 때 생기는 에러입니다."
thumbnail: "./1.png"
alt: "react-router-dom에서 component={Component} 타입으로 Route를 작성했을 때 생기는 에러입니다."
---

react-router-dom에서 component={Component} 타입으로 Route를 작성했을 때 생기는 에러입니다.

최신 문법으로 변경하면 에러가 해결됩니다.

![1](./1.png)

를

![2](./2.png)

이렇게 바꾸면 됩니다.

[ReactJS routing says page has no element](https://www.reddit.com/r/reactjs/comments/qq253h/reactjs_routing_says_page_has_no_element/)
