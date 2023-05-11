import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Sidenav from "../../Components/Sidenav/Sidenav";
import Stories from "../../Components/Stories/Stories";
import "./landing.css";
export default function Landing() {
  return (
    <div>
      <div className="landing-container">
        <div className="sidenav">
          <Sidenav />
        </div>
        <div className="content-container">
          <Header />
          <Stories />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
