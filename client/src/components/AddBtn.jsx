import React from "react";
import { Link } from "react-router-dom";

import { RiUserAddLine } from "react-icons/ri";
const AddBtn = () => {
  return (
    <div className="flex items-center justify-center">
      <Link
        to={"add/"}
        className="btn btn-lg btn-outline border-red-500 mb-5 hover:bg-red-200"
      >
        <RiUserAddLine color="red" size={50} />
      </Link>
    </div>
  );
};

export default AddBtn;
