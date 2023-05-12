import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login/Login";
import { useState, useEffect } from "react";
import Landing from "./Pages/Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "./Pages/Feed/Feed";
import Explore from "./Pages/Explore/Explore";
import Story from "./Pages/Story/Story";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      {isLoggedIn && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}>
              <Route path="/" element={<Feed />}></Route>
              <Route path="explore" element={<Explore />}></Route>
            </Route>
            <Route path="story" element={<Story />}></Route>
          </Routes>
        </BrowserRouter>
      )}
      {!isLoggedIn && <Login />}
    </>
  );
}

export default App;
