import { Button, Input } from "antd";

import { setLogin, $login, $password, setPassword, submit } from "./model";
import { useUnit } from "effector-react";
import styled from "styled-components";

export const AuthPage = () => {
  const { login, password } = useUnit({ login: $login, password: $password })

  return (
    <Wrapper>
      <Form>
        <Input onChange={(e) => setLogin(e.target.value)} value={login}/>
        <Input onChange={(e) => setPassword(e.target.value)} value={password}/>
        <Button onClick={() => submit()}>Войти</Button>
      </Form>
    </Wrapper>
  );
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`