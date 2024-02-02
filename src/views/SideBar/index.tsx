import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/afterlogin.svg";
import dashboard from "../../assets/dashboard.svg";
import { Dashboard } from "../../assets/dynamic/Dashboard";
import close from "../../assets/closeIcon.svg";
import routes from "../../routes";
import { Upload } from "../../assets/dynamic/Upload";
import { Invoice } from "../../assets/dynamic/Invoice";
import { Schedule } from "../../assets/dynamic/Schedule";
import { Calender } from "../../assets/dynamic/Calender";
import { Notification } from "../../assets/dynamic/Notification";
import { Settings } from "../../assets/dynamic/Settings";
export const SideBar = (props: any) => {
  const location = useLocation();
  const path = location.pathname;
  console.log(props);
  return (
    <div className={`${"sidebar_container responsive_sidebar"} ${props.active}`}>
      <div className="image_with_title">
        <img src={logo} alt="" />
        <h1>Base</h1>
      </div>
      <div className={`${"close"} ${props.active}`} onClick={() => props.setActive("inActive")}>
        <img src={close} alt="" />
      </div>
      <nav className="flex flex-col nav_bar">
        <Link
          to={routes.dashboard}
          onClick={() => props.setActive("inActive")}
          className="font-bold  text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          <div className={`${"image_cont"} ${path === routes.dashboard ? "active" : ""}`}>
            <Dashboard color={path === routes.dashboard ? "#605BFF" : "#9A9AA9"} />
          </div>
          Dashboard
        </Link>
        <Link
          to={routes.upload}
          onClick={() => props.setActive("inActive")}
          className="font-bold  text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          <div className={`${"image_cont"} ${path === routes.upload ? "active" : ""}`}>
            <Upload color={path === routes.upload ? "#605BFF" : "#9A9AA9"} />
          </div>
          Upload
        </Link>
        <Link
          to={routes.invoice}
          onClick={() => props.setActive("inActive")}
          className="font-bold  text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          <div className={`${"image_cont"} ${path === routes.invoice ? "active" : ""}`}>
            <Invoice color={path === routes.invoice ? "#605BFF" : "#9A9AA9"} />
          </div>
          Invoice
        </Link>
        <Link
          to={routes.schedule}
          onClick={() => props.setActive("inActive")}
          className="font-bold  text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          <div className={`${"image_cont"} ${path === routes.schedule ? "active" : ""}`}>
            <Schedule color={path === routes.schedule ? "#605BFF" : "#9A9AA9"} />
          </div>
          Schedule
        </Link>
        <Link
          to={routes.calender}
          onClick={() => props.setActive("inActive")}
          className="font-bold  text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          <div className={`${"image_cont"} ${path === routes.calender ? "active" : ""}`}>
            <Calender color={path === routes.calender ? "#605BFF" : "#9A9AA9"} />
          </div>
          Calender
        </Link>
        <Link
          to={routes.notification}
          onClick={() => props.setActive("inActive")}
          className="font-bold  text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          <div className={`${"image_cont"} ${path === routes.notification ? "active" : ""}`}>
            <Notification color={path === routes.notification ? "#605BFF" : "#9A9AA9"} />
          </div>
          Notification
        </Link>
        <Link
          to={routes.settings}
          onClick={() => props.setActive("inActive")}
          className="font-bold  text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          <div className={`${"image_cont"} ${path === routes.settings ? "active" : ""}`}>
            <Settings color={path === routes.settings ? "#605BFF" : "#9A9AA9"} />
          </div>
          Settings
        </Link>
      </nav>
    </div>
  );
};
