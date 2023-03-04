import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { FiEdit3 } from "react-icons/fi";
import useFetchABook from "../hooks/useFetchABook";
const Details = () => {
  const { id } = useParams();
  const [singleInfo, setSingleInfo] = useFetchABook(id);
  console.log(singleInfo[0]);
  // const {
  //   name,
  //   phone,
  //   address,
  //   photoURL,
  //   date,
  //   method,
  //   totalAmount,
  //   pay,
  //   due,
  //   note,
  // } = singleInfo[0];
  return (
    <div>
      <Header />
      {/* {singleInfo} */}
      {/* {console.log(singleInfo[0].name)} */}
      <div className="container mx-auto flex flex-col lg:flex-row mb-5">
        <div className=" flex-grow flex-1  card bg-base-300 rounded-box p-4">
          <div className="">
            <table className=" w-1/2">
              <tbody>
                <tr>
                  <td className=" font-bold text-blue-700">Coustomer ID</td>
                  <td>{id}</td>
                </tr>
                <tr>
                  <td className=" font-bold text-blue-700">Name</td>
                  <td>{singleInfo[0] ? singleInfo[0].name : ""}</td>
                </tr>
                <tr>
                  <td className=" font-bold text-blue-700">Address</td>
                  <td>{singleInfo[0] ? singleInfo[0].address : ""}</td>
                </tr>
                <tr>
                  <td className=" font-bold text-blue-700">Phone</td>
                  <td>{singleInfo[0] ? singleInfo[0].phone : ""}</td>
                </tr>
                <tr>
                  <td className=" font-bold text-blue-700">Method</td>
                  <td>{singleInfo[0] ? singleInfo[0].method : ""}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"> </div>
        <div className="grid flex-grow flex-1 bg-base-100 rounded-box place-items-center">
          <div className="avatar">
            <div className="w-24 rounded">
              <img
                src={singleInfo[0] ? singleInfo[0].photoURL : ""}
                alt={singleInfo[0] ? singleInfo[0].photoURL : ""}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto container mx-auto mb-5">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th>Date</th>
              <th>Note</th>
              <th>Total Amount</th>
              <th>Pay</th>
              <th>Due</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{singleInfo[0] ? singleInfo[0].date : ''}</td>
              <td>{singleInfo[0] ? singleInfo[0].note : ''}</td>
              <td>{singleInfo[0] ? singleInfo[0].totalAmount : ''}</td>
              <td>{singleInfo[0] ? singleInfo[0].pay : ''}</td>
              <td>{singleInfo[0] ? singleInfo[0].due : ''}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mb-5 print:hidden">
      <Link className="btn btn-success btn-outline" to={`/edit/${id}`}><FiEdit3 color="green" size={40}/></Link></div>
    </div>
  );
};

export default Details;
