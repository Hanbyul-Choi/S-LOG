import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { __logout } from "../../redux/modules/user";
import { initializeForm } from "../../redux/modules/auth";

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(__logout());
    dispatch(initializeForm("login"));
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
