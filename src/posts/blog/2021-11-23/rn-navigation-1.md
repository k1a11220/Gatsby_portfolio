---
title: "React Native Navigation 시작하기"
date: "2021-11-23"
category: "Develop"
desc: "React Native 에서 네비게이션 기능을 어떻게 사용할 수 있는지 설명합니다."
thumbnail: "./thumbnail.png"
alt: "React Native 에서 네비게이션 기능을 어떻게 사용할 수 있는지 설명합니다."
---

## 리액트 네이티브 네비게이션 시작하기

최근 리액트 네이티브를 공부하기 시작했습니다. 만들고 싶은 제품은 많은데, 어떻게 구현해야 할지 몰라서 차근차근 공부하고 있습니다. 많은 앱에서 쓰이고 있는 기능부터 만드는 방법을 적어보고자 합니다. 첫 번째는 네비게이션 입니다. 공식문서를 참고해서 쉽게 정리해놓았습니다.

브라우저에서 페이지를 이동할 때 보통 a태그를 사용합니다. 사용자가 a태그로 감싸진 링크를 누르면 새로운 URL로 이동하고, 이전 페이지는 브라우저 히스토리에 순서대로 저장됩니다. 사용자가 브라우저의 뒤로 가기 버튼을 누르면 히스토리의 가장 첫 번째 페이지로 이동합니다.

하지만, 리액트 네이티브 네비게이션은 웹브라우저 작동 방식과 조금 다릅니다. URL이 바뀌는 것이 아니라 스택이 계속 쌓이는 개념에 가깝습니다.

## 스택 네비게이터 만들기

먼저, react-navigation 패키지를 설치합니다. yarn add @react-navigation/native-stack

createNativeStackNavigator 함수는 Screen과 Navigator라는 2가지 property를 가집니다. Navigator 안에 Screen 요소가 꼭 포함되어야 합니다. Screen은 우리가 리액트에서 부르는 routes와 비슷한 성질을 가지고 있습니다. Screen Component는 name과 component를 props로 받습니다. name은 브라우저의 url처럼 이동할 경로와 같고, component는 해당 Screen에서 보일 Component를 의미합니다.

예제 코드와 실행 결과를 살펴봅시다.

```jsx
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57b5f2db-b3eb-47c7-a66c-2642dfe20240/Untitled.png)

iOS 기준으로 기본 스타일이 적용된 네비게이션 바와 콘텐츠 영역을 확인할 수 있습니다. 이때 Screen의 Name은 소문자(home)로 설정해도 문제없지만 공식 문서에서는 대문자(Home)를 사용하길 권장하고 있습니다.

## Navigator 설정하기

모든 Screen에 기본적으로 적용되는 설정은 Navigator의 props로 지정할 수 있습니다. 현재 아무런 props도 전달하지 않았기 때문에 기본 설정이 적용되었습니다. 한번 새로운 Screen을 추가하고 Home Screen을 맨 처음에 나오도록 만들어봅시다.

```jsx
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

이제 Navigator는 Home과 Details라는 2개의 Screen을 가지게 되었습니다. Home에선 HomeScreen Component를, Details에선 DetailsScreen Component를 불러옵니다. 그리고, 초기 Screen은 Navigator에서 지정한 Home Screen이 됩니다. 만약에 Home이 아닌 Details를 처음에 나타나게 하고 싶다면, initalRouteName을 Home이 아닌 Details로 바꾼 뒤 재시작을 해보세요.

## Screen에 옵션 지정하기

각각의 Screen에도 옵션을 지정할 수 있습니다. 예를 들어 Header에 표시되는 이름을 바꿀 수도 있죠. 지금은 name에 지정된 이름이 출력되지만 우리가 원하는 다른 이름이 나오게 바꿔봅시다.

```jsx
<Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{ title: "Overview" }}
/>
```

이처럼 options props에서 여러 옵션을 설정할 수 있습니다. 그리고 만약, 모든 Screen에 해당하는 옵션을 설정하고 싶다면 개별 Screen이 아닌 Navigator에서 지정해 주면 모든 Screen에 적용됩니다.

## Screen에 props 전달하기

때로는 우리가 만든 props를 Screen에 전달해야 할 때가 있습니다. 이런 경우 React Context를 사용하길 추천하지만, 직접 props를 전달할 수도 있습니다.

```jsx
<Stack.Screen name="Home">
  {(props) => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen>
```
