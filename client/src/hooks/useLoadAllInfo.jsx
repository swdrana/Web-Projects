import React, { useEffect } from "react";
import { useState } from "react";

const useLoadAllInfo = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/info")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return [info, setInfo];
};

export default useLoadAllInfo;
