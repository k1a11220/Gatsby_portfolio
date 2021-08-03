---
title: "git fatal: remote origin already exists. 에러 해결법"
date: "2020-03-23"
category: "Issue"
desc: "git fatal: remote origin already exists. 에러 해결법"
thumbnail: "../images/default.jpg"
alt: "git fatal: remote origin already exists. 에러 해결법"
---

## 원인

깃허브에 먼저 레포지토리를 생성 후 기존 로컬에 있던 폴더를 오리진 설정 시 생기는 오류입니다.

## 해결 방법

따라서 이때 remote origin을 하기 전 git remote rm origin을 실행한 뒤 다시 git remote origin {link} 하면 해결됩니다.
