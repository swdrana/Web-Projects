import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { GrAdd } from "react-icons/gr";
import logo from "../img/logo.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        onClick={() => {
          navigate("/");
        }}
        className=" container flex items-center content-center flex-col mx-auto mt-5 mb-2"
      >
        <img className="md:w-1/2 lg:w-1/3" src={logo} alt="" />
      </button>
      <Link to={"add/"} className="btn btn-warning btn-outline ">
        <GrAdd color="text-warning" size={40} />
      </Link>
    </div>
  );
};

export default Header;
