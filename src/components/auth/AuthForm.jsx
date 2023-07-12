import React from "react";
import { styled } from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const textMap = {
    login: "로그인",
    register: "회원가입",
  };
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <TextInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <TextInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === "register" && (
          <TextInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <ButtonWithMarginTop cyan="true" fullwidth="true">
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>{type === "login" ? <Link to={"/register"}>회원가입</Link> : <Link to={"/login"}>로그인</Link>}</Footer>
    </AuthFormBlock>
  );
};

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const TextInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }

  & + & {
    margin-top: 1rem;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

export default AuthForm;