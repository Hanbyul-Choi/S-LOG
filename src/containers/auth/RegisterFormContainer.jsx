import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __register, changeField } from "../../redux/modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import { initializeForm } from "../../redux/modules/auth";
import { __check } from "../../redux/modules/user";
import { useNavigate } from "react-router-dom";

const RegisterFormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if ([username, password, passwordConfirm].includes("")) {
      setError("빈 칸을 모두 입력하세요.");
      return;
    }
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      dispatch(changeField({ form: "register", key: password, value: "" }));
      dispatch(changeField({ form: "register", key: passwordConfirm, value: "" }));
      return;
    }
    dispatch(__register({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch, auth]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 401) {
        setError("이미 존재하는 계정입니다.");
        return;
      }
      setError("회원가입 실패. 다시 시도하세요.");
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      dispatch(__check(auth));
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      } catch (error) {
        console.log("cookie is not working");
      }
    }
  }, [user, navigate]);

  return <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} error={error} />;
};

export default RegisterFormContainer;
