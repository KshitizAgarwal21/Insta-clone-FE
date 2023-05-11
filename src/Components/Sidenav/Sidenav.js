import React from "react";
import "./sidenav.css";
import menulogo from "../../assets/pngegg.png";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { NavLink } from "react-router-dom";
export default function Sidenav() {
  return (
    <>
      <img src={menulogo} className="menulogo" />
      <div class="side-nav">
        <div class="display-picture"></div>
        <div class="name-container">Rayan Adlardard</div>
        <div class="title-container">@RayanAd</div>
        <div className="info">
          <div className="posts mini">
            <p>46</p>
            <p>Posts</p>
          </div>
          <div className="followers mini">
            <p>2.8k</p>
            <p>Followers</p>
          </div>
          <div className="following mini">
            <p>526</p>
            <p>Following</p>
          </div>
        </div>
        <div class="social-links">
          <ul class="social-ul">
            <NavLink
              className="navlink"
              to="/feed"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "palevioletred" : "black",
                };
              }}
            >
              {" "}
              <li>
                <AppsOutlinedIcon />
                <span className="menu-item">Feed</span>
              </li>
            </NavLink>
            <NavLink
              className="navlink"
              to="/explore"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "palevioletred" : "black",
                };
              }}
            >
              <li>
                <AppsOutlinedIcon />
                <span className="menu-item">Explore</span>
              </li>
            </NavLink>

            <NavLink
              className="navlink"
              to="/notifications"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "palevioletred" : "black",
                };
              }}
            >
              <li>
                <AppsOutlinedIcon />
                <span className="menu-item">Notifications</span>
              </li>
            </NavLink>
            <NavLink
              className="navlink"
              to="/messages"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "palevioletred" : "black",
                };
              }}
            >
              <li>
                <AppsOutlinedIcon />
                <span className="menu-item">Messages</span>
              </li>
            </NavLink>
            <NavLink
              className="navlink"
              to="/direct"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "palevioletred" : "black",
                };
              }}
            >
              <li>
                <AppsOutlinedIcon />
                <span className="menu-item">Direct</span>
              </li>
            </NavLink>
            <NavLink
              className="navlink"
              to="/stats"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "palevioletred" : "black",
                };
              }}
            >
              <li>
                <AppsOutlinedIcon />
                <span className="menu-item">Stats</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}
