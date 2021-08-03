---
title: "Expo 에러 'EMFILE: too many open files, watch at FSEvent.FSWatcher._handle.onchange (internal/fs/watchers.js:123:28)” Code Answer’s' 해결법"
date: "2021-06-18"
category: "Issue"
desc: "Expo 프로젝트를 실행한 뒤 아래와 같은 오류를 출력하면서 Expo가 꺼집니다."
thumbnail: "../images/default.jpg"
alt: "Expo 에러 'EMFILE: too many open files, watch at FSEvent.FSWatcher._handle.onchange (internal/fs/watchers.js:123:28)' Code Answer’s" 해결법"
---

### 문제

Expo 프로젝트를 실행한 뒤 아래와 같은 오류를 출력하면서 Expo가 꺼집니다.

EMFILE: too many open files, watch at FSEvent.FSWatcher.\_handle.onchange (internal/fs/watchers.js:123:28)” Code Answer’s

### 해결방법

brew install watchman 실행

**Mac OS 한정** watchman 설치해도 동일한 오류가 발생하면 xcode commandline 설치 or update 후 watchman 재설치

xcode-select --install
