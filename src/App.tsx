import React from "react";
import "./App.css";
import { SignInPage } from "./views/SignInPage";
import { SideBar } from "./views/SideBar";
import { Layout } from "./views/Layout";
import { AsideBar } from "./views/AsideBar";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Dashboard } from "./views/Dashboard";
import { Settings } from "./views/Settings";
import { Notification } from "./views/Notification";
import { Schedule } from "./views/Schedule";
import { Invoice } from "./views/Invoice";
import { Calender } from "./views/Calender";

function App() {
  return (
    <Routes>
      <Route path={routes.sign_in} element={<SignInPage />} />
      <Route path={routes.dashboard} element={<Layout sideBar={<SideBar />} asideBar={<Dashboard />} />} />
      <Route path={routes.upload} element={<Layout sideBar={<SideBar />} asideBar={<AsideBar />} />} />
      <Route path={routes.settings} element={<Layout sideBar={<SideBar />} asideBar={<Settings />} />} />
      <Route path={routes.notification} element={<Layout sideBar={<SideBar />} asideBar={<Notification />} />} />
      <Route path={routes.schedule} element={<Layout sideBar={<SideBar />} asideBar={<Schedule />} />} />
      <Route path={routes.invoice} element={<Layout sideBar={<SideBar />} asideBar={<Invoice />} />} />
      <Route path={routes.calender} element={<Layout sideBar={<SideBar />} asideBar={<Calender />} />} />
    </Routes>
  );
}

export default App;
