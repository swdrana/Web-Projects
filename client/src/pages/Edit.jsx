import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import useFetchABook from "../hooks/useFetchABook";

const Edit = () => {
  const { id } = useParams();
  //   console.log(id)
  const [singleInfo, setSingleInfo] = useFetchABook(id);


  const navigate = useNavigate();
  var now = new Date();
  function dateFormater(date, separator) {
    var day = date.getDate();
    // add +1 to month because getMonth() returns month from 0 to 11
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    // show date and month in two digits
    // if month is less than 10, add a 0 before it
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    // now we have day, month and year
    // use the separator to join them
    return year + separator + month + separator + day;
  }

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [date, setDate] = useState(dateFormater(now, "-"));
  const [method, setMethod] = useState("Other");
  const [totalAmount, setTotalAmount] = useState(0);
  const [pay, setPay] = useState(0);
  const [due, setDue] = useState(0);
  const [note, setNote] = useState("");

  const handelSubmit =  (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setPhone(e.target.phone.value);
    const data = {
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
    };
    console.log(name, phone)
    console.log(data)
  };

  useEffect(() => {
    setDue(totalAmount - pay);
    if (isNaN(totalAmount)) {
      setTotalAmount(0);
    }
    if (isNaN(pay)) {
      setPay(0);
    }
  }, [totalAmount, pay]);
  
  return (
    <div>
      <Header />

      <div className=" bg-base-200 py-3">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-pink-600 mb-3">Edit Entry</h1>
        </div>
        <div className="container mx-auto shadow-2xl bg-base-100 rounded-xl p-6">
          <form
            onSubmit={(e) => handelSubmit(e)}
            action=""
            className="flex justify-center flex-col md:flex-row gap-5"
          >
            <div className="flex-1  flex justify-center items-center  flex-col ">
              <div className="flex md:gap-5 w-full flex-col md:flex-row">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Customar Name</span>
                  </label>
                  <input
                    required
                    defaultValue={singleInfo[0]?.name}
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="input input-bordered input-secondary"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="Phone"
                    defaultValue={singleInfo[0]?.phone}
                    id='phone'
                    className="input input-bordered input-secondary"
                  />
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  defaultValue={singleInfo[0]?.address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  className="input input-bordered "
                />
              </div>
              <img
                className="mask mask-square my-6 rounded-lg"
                src={singleInfo[0]?.photoURL}
                alt={singleInfo[0]?.name}
              />
              <input
                type="file"
                onChange={(e) => {
                  setPhotoURL(e.target.value);
                }}
                className="file-input file-input-bordered file-input-secondary w-full "
              />
            </div>
            <div className="flex-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Date</span>
                </label>
                <input
                  defaultValue={singleInfo[0]?.date}
                  type="date"
                  onChange={(e) => {
                    console.log(e);
                    setDate(e.target.value);
                  }}
                  placeholder="Date"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Method</span>
                </label>
                <select
                  required
                  
                  defaultValue={singleInfo[0]?.method}
                  className=" select select-secondary w-full"
                  onChange={(e) => {
                    setMethod(e.target.value);
                  }}
                >
                  <option disabled >
                    Pick your Method
                  </option>
                  <option>bKash</option>
                  <option>Nagad</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex w-full justify-center items-center gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Total Amount</span>
                  </label>
                  <input
                    required
                    defaultValue={singleInfo[0]?.totalAmount}
                    type="number"
                    onChange={(e) => {
                      setTotalAmount(Number.parseFloat(e.target.value));
                    }}
                    placeholder="Total Amount"
                    className="input input-bordered input-secondary"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Pay</span>
                  </label>
                  <input
                    required
                    type="number"
                    defaultValue={singleInfo[0]?.pay}
                    onChange={(e) => {
                      setPay(Number.parseFloat(e.target.value));
                    }}
                    placeholder="Pay"
                    className="input input-bordered input-secondary"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due</span>
                </label>
                <input
                  disabled
                  value={singleInfo[0]?.due}
                  type="text"
                  placeholder="Due"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Note</span>
                </label>
                <input
                  type="text"
                  placeholder="Remark"
                  defaultValue={singleInfo[0]?.note}
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Enter</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
