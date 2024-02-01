import React from "react";
import "./card.css";

export const Cards = (props: any) => {
  return <div className={props.className}>{props.children}</div>;
};
