import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
const Details = () => {
  const { id } = useParams();
  return (
    <div>
        <Header/>
    </div>
  );
};

export default Details;
