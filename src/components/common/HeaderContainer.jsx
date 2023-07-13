import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { __check, __logout } from "../../redux/modules/user";
import { initializeForm } from "../../redux/modules/auth";
import { useNavigate } from "react-router";

const HeaderContainer = () => {
  const { user, checkError, logout } = useSelector(({ user }) => ({
    user: user.user,
    checkError: user.checkError,
    logout: user.logout,
  }));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(__logout());
    dispatch(initializeForm("login"));
  };
  if (checkError) {
    alert(checkError);
    dispatch(__logout());
    dispatch(initializeForm("login"));
    if (logout) {
      navigate("/login");
    }
  }

  useEffect(() => {
    dispatch(__check(user));
  }, [user, dispatch]);

  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
