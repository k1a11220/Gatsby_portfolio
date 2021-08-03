---
title: "shell-init: error retrieving current directory: getcwd: cannot access parent directories: Operation not permitted 에러 해결법"
date: "2020-03-24"
category: "Issue"
desc: "삭제된 디렉토리에서 명령을 실행할 때 생기는 오류입니다."
thumbnail: "../images/default.jpg"
alt: "shell-init: error retrieving current directory: getcwd: cannot access parent directories: Operation not permitted 에러 해결법"
---

## 원인

삭제된 디렉토리에서 명령을 실행할 때 생기는 오류입니다.

## 해결방법

cd ..를 통해 삭제된 디렉토리에서 나간 뒤 다시 접근하면 해결됩니다.
