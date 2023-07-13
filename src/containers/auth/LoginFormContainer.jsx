import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __login, changeField } from "../../redux/modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import { initializeForm } from "../../redux/modules/auth";
import { useNavigate } from "react-router-dom";
import { __check } from "../../redux/modules/user";

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
    error: auth.error,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(__login({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log(authError);
      return;
    }
    if (auth) {
      dispatch(__check(auth));
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (error) {
        console.log("cookie is not working");
      }
      navigate(-1);
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={authError?.response.data.message ?? false}
    />
  );
};

export default LoginFormContainer;
