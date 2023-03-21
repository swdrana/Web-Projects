import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Add = () => {
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
  const [personType, setPersonType] = useState("");
  const [address, setAddress] = useState("");
  // const [photoURL, setPhotoURL] = useState("");
  const [date, setDate] = useState(dateFormater(now, "-"));
  const [method, setMethod] = useState("Other");
  const [totalAmount, setTotalAmount] = useState(0);
  const [pay, setPay] = useState(0);
  const [due, setDue] = useState(0);
  const [note, setNote] = useState("");
  const handelSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      phone,
      personType,
      address,
      // photoURL,
      date,
      method,
      totalAmount,
      pay,
      due,
      note,
    };
    console.log(data);
    try {
      await axios.post("http://localhost:8080/add", data);
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err);
    }
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
          <h1 className="text-3xl font-bold text-pink-600 mb-3">New Entry</h1>
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
                    <span className="label-text">Person Name</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    className="input input-bordered input-secondary"
                  />
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Person Type</span>
                </label>
                <select
                  required
                  className=" select select-secondary w-full"
                  onChange={(e) => {
                    setPersonType(e.target.value);
                  }}
                >
                  <option disabled selected value="">
                    --Person Type--
                  </option>
                  <option>Customer</option>
                  <option>Seller</option>
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  className="input input-bordered "
                />
              </div>
              {/* <img
                className="mask mask-square my-6 rounded-lg"
                src="data:image/jpeg;base64,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"
              /> */}
              {/* <input
                type="file"
                onChange={(e) => {
                  setPhotoURL(e.target.value);
                }}
                className="file-input file-input-bordered file-input-secondary w-full "
              /> */}
            </div>
            <div className="flex-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Date</span>
                </label>
                <input
                  type="date"
                  onChange={(e) => {
                    console.log(e);
                    setDate(e.target.value);
                  }}
                  placeholder="Date"
                  className="input input-bordered"
                />
              </div>
              {personType =='Customer' ? 
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Method</span>
                </label>
                <select
                  required
                  className=" select select-secondary w-full"
                  onChange={(e) => {
                    setMethod(e.target.value);
                  }}
                >
                  <option disabled selected value="">
                    --Pick your Method--
                  </option>
                  <option>bKash</option>
                  <option>Nagad</option>
                  <option>Other</option>
                </select>
              </div> : ''}
              <div className="flex w-full justify-center items-center gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Total Amount</span>
                  </label>
                  <input
                    required
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
                  type="text"
                  placeholder="Due"
                  value={due}
                  className="input input-bordered"
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Note</span>
                </label>
                <input
                  required={personType == 'Seller'}
                  type="text"
                  placeholder="Remark"
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                  className={`input input-bordered ${personType=='Seller'? 'input-secondary':''}`}
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

export default Add;
