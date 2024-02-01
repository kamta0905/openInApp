import React from "react";
import "./layout.css";
export const Layout = (props: any) => {
  return (
    <div className="layout_container">
      {props.sideBar}
      {props.asideBar}
    </div>
  );
};
