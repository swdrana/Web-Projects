import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import useLoadAllInfo from "../hooks/useLoadAllInfo";
import AddBtn from "../components/AddBtn";

const Home = () => {
  const [info, setInfo] = useLoadAllInfo([]);
  const [deleteId, setDeleteID] = useState("");
  const [hideModal, setHideModal] = useState("");
  const handelDelete = (e) => {
    e.preventDefault();
    setHideModal("hidden");
    console.log(deleteId);
  };
  return (
    <div>
      <Header />
      <AddBtn/>
      <div className="overflow-x-auto w-full ">
        <table className="table w-full table-zebra text-center">
          <thead>
            <tr>
              <th className=" bg-pink-500 text-white text-sm"></th>
              <th className=" bg-pink-500 text-white text-sm">Name</th>
              <th className=" bg-pink-500 text-white text-sm">Phone</th>
              <th className=" bg-pink-500 text-white text-sm">Amount</th>
              <th className=" bg-pink-500 text-white text-sm">Due</th>
              <th className=" bg-pink-500 text-white text-sm">Action</th>
            </tr>
          </thead>

          <tbody>
            {info.map((singleInfo, index) => {

  const {
    id,
    name,
    phone,
    address,
    photoURL,
    date,
    method,
    totalAmount,
    pay,
    due,
    note,
  } = singleInfo;
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3 text-start">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={photoURL} alt={name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">
                          {address}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {phone}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {method}
                    </span>
                  </td>
                  <td>
                    {totalAmount}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Pay: {pay}
                    </span>
                  </td>
                  <td>{due}</td>
                  <th>
                    <Link
                      to={`/details/` + id}
                      className="btn btn-success btn-sm"
                    >
                      <BsFillInfoCircleFill color="white" size={25} />
                    </Link>
                    <Link
                      to={`/edit/` +id}
                      className="btn btn-warning btn-outline btn-sm mx-2"
                    >
                      <FiEdit3 color="text-warning" size={25} />
                    </Link>
                    <label
                      className="btn btn-error btn-sm"
                      htmlFor="delete-modal"
                      onClick={() => {
                        setHideModal('');
                        return setDeleteID(id);
                      }}
                    >
                      <TiDeleteOutline color="white" size={25} />
                    </label>
                  </th>

                  <div>
                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="delete-modal"
                      className="modal-toggle "
                    />
                    <label
                      htmlFor="delete-modal"
                      className={`modal cursor-pointer ${hideModal}`}
                    >
                      <label className="modal-box relative ">
                        <h3 className="text-lg font-bold">
                          Are you sure want to delete?
                        </h3>
                        <label
                          className=" mt-10 btn btn-error"
                          onClick={handelDelete}
                        >
                          Yes
                        </label>
                      </label>
                    </label>
                  </div>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th className=" bg-pink-500 text-white text-sm"></th>
              <th className=" bg-pink-500 text-white text-sm">Name</th>
              <th className=" bg-pink-500 text-white text-sm">Phone</th>
              <th className=" bg-pink-500 text-white text-sm">Amount</th>
              <th className=" bg-pink-500 text-white text-sm">Due</th>
              <th className=" bg-pink-500 text-white text-sm">Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Home;
