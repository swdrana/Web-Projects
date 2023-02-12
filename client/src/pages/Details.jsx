import React from "react";
import { useParams } from "react-router-dom";
import logo from "../img/logo.png";
const Details = () => {
  const { id } = useParams();
  return (
    <div className=" container flex items-center content-center flex-col mx-auto">
        <img className="md:w-1/2 lg:w-1/3" src={logo} alt="" />
        
    </div>
  );
};

export default Details;
