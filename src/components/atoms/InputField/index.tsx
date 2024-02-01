import React from "react";
import { InputFieldInterface } from "../../../Interfaces/InputFieldInterface";
import "./input.css";
export const InputField = (props: InputFieldInterface) => {
  return (
    <input
      className={props.className}
      type={props.type}
      disabled={props.disabled}
      onChange={props.onChange}
      id={props.id}
      placeholder={props.placeholder}
    />
  );
};
