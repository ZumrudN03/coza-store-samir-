import React from "react";
import Navbar from "../Navbar/indexd";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function Mainlayout() {
  return (
  <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Mainlayout;
