import React from "react";
import { Link } from "react-router-dom";

const AddressBook = () => {
  const addresses = [
    {
      id: 1,
      street: "q1212",
      city: "Gaurnadi",
      state: "Barisal",
      country: "Bangladesh",
    },
    {
      id: 2,
      street: "26 Elmore Street",
      city: "Bondila",
      state: "Arunachal Pradesh",
      country: "India",
    },
    {
      id: 3,
      street: "bihar",
      city: "Addanki",
      state: "Andhra Pradesh",
      country: "India",
    },
  ];

  const editAddress = (id) => {
    // Handle edit address logic
    console.log("Edit address with ID:", id);
  };

  const deleteAddress = (id) => {
    // Handle delete address logic
    console.log("Delete address with ID:", id);
  };

  // Replace the following function with your actual logic for adding a new address
  const addNewAddress = () => {
    console.log("Add new address logic");
  };

  return (
    <div className="address-book bg-white rounded p-5 border">
      <div className="flex justify-between items-center mb-5">
        <h4 className="text-2xl font-bold">Address Book</h4>
        <Link className="btn btn-primary text-white" to="/profile/add-address">
          Add Address
        </Link>
      </div>
      <div className="flex flex-wrap justify-between gap-5">
        {addresses.map((address) => (
          <div key={address.id} className="border p-3 rounded-md w-full md:w-3/5 lg:w-2/5">
            {/* Adjust the responsive width as needed */}
            <div className="flex justify-between">
              <div>
                <p className="fs-sm mb-0">
                  <strong>Street Address:</strong> {address.street}
                </p>
                <p className="fs-sm mb-0">
                  <strong>Police Station:</strong> {address.policeStation}
                </p>
                <p className="fs-sm mb-0">
                  <strong>District:</strong> {address.district}
                </p>
                <p className="fs-sm mb-0">
                  <strong>Country:</strong> {address.country}
                </p>
              </div>
              <div className="flex gap-2">
                <Link to={`edit/${address.id}`} className="text-primary">
                  Edit
                </Link>
                <Link to={`delete/${address.id}`} className="text-error">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressBook;
