import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchABook = (id) => {
  const [singleInfo, setSingleInfo] = useState([]);
  useEffect(() => {
    const fetchSingleInfo = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/info/${id}`);
        setSingleInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSingleInfo();
    // fetch(`http://localhost:8080/info/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => setSingleInfo(data));
  }, []);
  return [singleInfo, setSingleInfo];
};

export default useFetchABook;
