import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";

const Home = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("data/info.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => setInfo(data));
  }, []);
  return (
    <div>
        <Header/>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {info.map((singleInfo, index) => {
              return (
                <tr>
                  <th>{index+1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={singleInfo.picture}
                            alt={singleInfo.name}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{singleInfo.name}</div>
                        <div className="text-sm opacity-50">{singleInfo.address}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                  {singleInfo.phone}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                    {singleInfo.method}
                    </span>
                  </td>
                  <td>
                  {singleInfo.balance}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                    Pay: {singleInfo.due}
                    </span>
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Home;
