---
title: "Mac OS 개발환경 구축하기"
date: "2020-08-01"
category: "developing"
desc: "Category Test"
thumbnail: "../images/default.jpg"
alt: "apple big sur gradient"
---

## 0. 개발환경 구축.

맥에서 개발환경 구축을 위한 메뉴얼을 작성했습니다.

## 1. Brew 설치

Brew를 설치합니다. Brew는 패키지 관리자로 쉽게 소프트웨어 설치를 도와줍니다.

[Brew 설치링크](https://brew.sh/index_ko)

## 2. Xcode, vscode, GitHub Desktop 설치

ios 개발을 위한 Xcode와 코드에디터로 사용할 vscode, gui로 GitHub를 관리할수 있는 GitHub Desktop을 설치합니다.

[Xcode 설치링크](https://apps.apple.com/kr/app/xcode/id497799835?mt=12)  
[vscode 설치링크](https://code.visualstudio.com)  
[GitHub Desktop 설치링크](https://desktop.github.com)

## 3. iTerm2 설치

터미널로 사용할 iTerm2를 설치합니다.

[iTerm2 설치링크](https://www.iterm2.com)

## 4. Oh my zsh 설치

Oh my zsh 는 테마 및 기타 플러그인 사용을 위해 설치합니다.

이전에 설치한 Brew를 이용합니다.

```bash
brew install zsh
brew install curl
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## 5. 터미널 테마 설정

[solarized 테마](https://github.com/altercation/solarized)

다운받아서 설정 -> 프로파일 -> 프리셋 설정

Meslo LG M for Powerline 설치, 폰트 변경

## 6. vscode 폰트 변경

Meslo LG M for Powerline 설치, 폰트 변경
