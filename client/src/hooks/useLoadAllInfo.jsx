import React, { useEffect } from "react";
import { useState } from "react";

const useLoadAllInfo = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("data/info.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return [info, setInfo];
};

export default useLoadAllInfo;
