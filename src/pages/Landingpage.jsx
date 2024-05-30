import React from "react";
import Main from "../components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
const Landingpage = () => {
  return (
    <Router basename="/Netflix-Clone">
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Landingpage;
