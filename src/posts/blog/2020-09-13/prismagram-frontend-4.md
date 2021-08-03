---
title: "[FrontEnd] 4. Auth 페이지에 Hooks 추가."
date: "2020-09-13"
category: "prismagram"
desc: "이메일의 형식지정, 비밀번호 input의 value와 type등이 필요합니다. input을 먼저 만들고 hooks를 더할 예정입니다."
thumbnail: "../images/default.jpg"
alt: "[FrontEnd] 4. Auth 페이지에 Hooks 추가."
---

## 1. Hooks 추가

button, Input과 같이 눈에 보이는 컴포넌트를 만들었습니다. 하지만 이메일의 형식 지정, 비밀번호 input의 \*\*\*처리처럼 value와 type 등이 필요합니다. input을 먼저 만들고 hooks를 더할 예정입니다.

## 2. Hooks 만들기

src/hooks 폴더를 만듭니다. hooks 폴더 내부에 useInput.js 파일을 추가합니다.

useInput.js

```js
import { useState } from "react";

export default (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange };
};
```

## 3. Auth에 추가하기

완성된 Hooks를 Auth에 추가합니다.

Auth.js

```js
import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Button";
import useInput from "../Hooks/useInput";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${(props) => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const password = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");

  return (
    <Wrapper>
      <Form>
        {action === "logIn" ? (
          <form>
            <Input placeholder={"Username"} {...username} />
            <Input placeholder={"Password"} {...password} type="password" />
            <Button text={"Log in"} />
          </form>
        ) : (
          <form>
            <Input placeholder={"First name"} {...firstName} />
            <Input placeholder={"Last name"} {...lastName} />
            <Input placeholder={"Email"} {...email} type="email" />
            <Input placeholder={"Username"} {...username} />
            <Input placeholder={"Password"} {...password} type="password" />
            <Button text={"Sign up"} />
          </form>
        )}
      </Form>
      <StateChanger>
        {action === "logIn" ? (
          <>
            Don't have an account?{" "}
            <Link onClick={() => setAction("signUp")}>Sign up</Link>
          </>
        ) : (
          <>
            Have an account?{" "}
            <Link onClick={() => setAction("logIn")}>Log in</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
```
