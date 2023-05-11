import React, { useState } from "react";
import "./login.css";
import carousel from "../../assets/insta.jpg";
import logo from "../../assets/logo-insta.png";
import app from "../../assets/appstore.png";
import play from "../../assets/playstore.png";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const signin = async () => {
    const resp = await axios.post("http://localhost:8080/login", formData);

    console.log(resp);
    if (resp.status == 200) {
      console.log("login successfull");
      localStorage.setItem("token", resp.data.token);
    }
  };

  return (
    <div>
      <div className="main-container">
        <div className="mobile-carousel">
          <img src={carousel} />
        </div>
        <div className="login-container">
          <div className="login-details">
            <img src={logo} />
            <div className="input-container">
              <input
                type="text"
                placeholder="Phone number, username, or email"
                name="username"
                onChange={handleChange}
              ></input>

              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              ></input>
              <button className="login" onClick={signin}>
                Log in
              </button>
              <div className="breaker">
                <hr className="smallhr"></hr>{" "}
                <span
                  style={{
                    verticalAlign: "top",
                    opacity: "0.5",
                    fontWeight: "Bold",
                  }}
                >
                  OR
                </span>
                <hr className="smallhr"></hr>
              </div>
              <p className="tplogin">Log in with Facebook</p>
              <p className="smallfont">Forgot Password?</p>
            </div>
          </div>
          <div className="action-signup">
            <p>
              Don't have an account?{" "}
              <span style={{ color: "dodgerblue", fontWeight: "bold" }}>
                Sign up
              </span>
            </p>
          </div>
          <div className="action-app">
            <p>Get the App.</p>
            <div className="app-banner">
              <img src={app} />
              <img src={play} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
