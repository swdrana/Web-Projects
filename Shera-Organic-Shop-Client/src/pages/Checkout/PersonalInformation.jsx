function PersonalInformation({ userInfo }) {
  return (
    <div className=" bg-white pb-8 rounded-lg">
    <h1 className=" text-2xl font-bold p-5">Personal Information</h1>
    <div className=" flex flex-col gap-5 mx-5">
      <div className=" flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered input-primary w-full"
          defaultValue={userInfo?.displayName}
        />
        <input
          type="tel"
          placeholder="Phone No"
          className="input input-bordered input-primary w-full"
          required
          defaultValue={userInfo?.phoneNumber}
        />
      </div>
      <div className=" flex flex-col md:flex-row justify-between gap-5">
        <input
          type="tel"
          placeholder="Alternative Phone No"
          className="input input-bordered input-primary w-full"
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
  </div>
  );
}

export default PersonalInformation;
