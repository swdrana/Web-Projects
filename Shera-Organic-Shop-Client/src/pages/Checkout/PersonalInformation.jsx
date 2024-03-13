import { useState } from "react";
import { Link } from "react-router-dom";

function PersonalInformation({ userInfo, updateUserInfo }) {
  // State variables to store user input
  const [fullName, setFullName] = useState(userInfo?.displayName || "");
  const [phoneNo, setPhoneNo] = useState(userInfo?.phoneNumber || "");
  const [altPhoneNo, setAltPhoneNo] = useState("");

  // Function to handle updating user information
  const handleUpdateUserInfo = () => {
    const updatedUserInfo = {
      ...userInfo,
      displayName: fullName,
      phoneNumber: phoneNo,
      // Add any additional fields as needed
    };

    // Call the updateUserInfo function passed as props
    updateUserInfo(updatedUserInfo);
  };

  return (
    <div className="bg-white pb-8 rounded-lg">
      <h1 className="text-2xl font-bold p-5">Personal Information</h1>
      <div className="flex flex-col gap-5 mx-5">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered input-primary w-full"
            disabled
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone No"
            className="input input-bordered input-primary w-full"
            disabled
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <input
            type="tel"
            placeholder="Alternative Phone No"
            className="input input-bordered input-primary w-full"
            hidden
            value={altPhoneNo}
            onChange={(e) => setAltPhoneNo(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full"
            defaultValue={userInfo?.email}
            disabled
          />
        </div>
      </div>
      {/* Button to update user information */}
      <button
        className="btn btn-primary mt-5 mx-auto block hidden"
        onClick={handleUpdateUserInfo}
      >
        Update Information
      </button>
      <Link
        to="/profile/edit-profile"
        className=" btn btn-primary m-5 flex text-base-100 justify-center items-center"
      >
        Edit Information
      </Link>
    </div>
  );
}

export default PersonalInformation;
