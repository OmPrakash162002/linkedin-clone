import React, { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import { linkedinContext } from "./Store/Context";

const Applayout = () => {
  const { mode } = useContext(linkedinContext);
  return (
    <div className={`${mode ? "dark" : null}`}>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Applayout;
