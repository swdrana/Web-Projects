import React from "react";
import {  useNavigate } from "react-router-dom";

import logo from "../img/logo.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className=" container flex items-center content-center flex-col mx-auto mt-5 mb-4"
      >
        <img className="md:w-1/2 lg:w-1/3" src={logo} alt="" />
      </button>
    </div>
  );
};

export default Header;
