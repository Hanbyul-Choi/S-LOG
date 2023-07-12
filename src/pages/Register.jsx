import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import RegisterFormContainer from "../containers/auth/RegisterFormContainer";

const Register = () => {
  return (
    <AuthTemplate>
      <RegisterFormContainer />
    </AuthTemplate>
  );
};

export default Register;
