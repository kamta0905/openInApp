import React from "react";
import { Cards } from "../../organism/Cards";
import google from "../../../assets/google.svg";
import apple from "../../../assets/apple.svg";
import { InputField } from "../../atoms/InputField";
import PrimaryBtn from "../../atoms/PrimaryBtn";
import { Link } from "react-router-dom";
import routes from "../../../routes";
export const SignInRight = () => {
  return (
    <div className="right_container">
      <h1 className="sign_in_title">Sign In</h1>
      <h5 className="sign_in_dec">Sign in to your account</h5>
      <div className="sign_options">
        <Cards className="card cust_card">
          <a href="">
            <img src={google} alt="google" /> Sign in with google
          </a>
        </Cards>
        <Cards className="card cust_card">
          <a href="">
            <img src={apple} alt="apple" />
            Sign in with google
          </a>
        </Cards>
      </div>
      <Cards className="card">
        <form>
          <label className="input_label">Email Address</label>
          <InputField className="input_field input_field_secondary" />
          <label className="input_label">Password</label>
          <InputField type="password" className="input_field" />
          <p className="forgot_link">
            <a href="">Forgot Password</a>
          </p>
          <Link to={routes.upload}>
            <PrimaryBtn className="primary" type="submit">
              Sign In
            </PrimaryBtn>
          </Link>
        </form>
      </Cards>
      <p className="register_link">
        Don’t have an account? <a href="">Register here</a>
      </p>
    </div>
  );
};
