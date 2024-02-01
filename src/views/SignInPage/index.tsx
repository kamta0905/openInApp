import React from "react";
import "./signIn.css";
import { SignInLeft } from "../../components/molecules/SignInLeft";
import { SignInRight } from "../../components/molecules/SignInRight";

export const SignInPage = () => {
  return (
    <div className="sign_in_container">
      <SignInLeft />
      <SignInRight />
    </div>
  );
};
