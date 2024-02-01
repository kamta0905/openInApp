import React from "react";
import { ButtonInterface } from "../../../Interfaces/ButtonInterface";
import "./button.css";

const PrimaryBtn = (props: ButtonInterface) => {
  return (
    <button
      className={props.className}
      type={props.type}
      disabled={props.disabled}
      id={props.id}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default PrimaryBtn;
