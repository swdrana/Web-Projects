function AddAddress() {
  return (
    <div className="">
      <h4 className="text-2xl font-bold">Add New Address</h4>
      <form className="">
        <div className=" flex gap-5 w-full label-input-field my-5">
          <div className=" w-full">
            <label className="block">Country</label>
            <select className=" input input-primary w-full">
              <option selected>Bangladesh</option>
            </select>
          </div>
          <div className=" w-full">
            <label className="block">District</label>
            <select className=" input input-primary w-full">
              <option value="" disabled>
                Select District
              </option>
              <option value="18">Bangladesh</option>
            </select>
          </div>
        </div>
        <div className=" flex gap-5 w-full label-input-field mb-5">
          <div className=" w-full">
            <label className="block">Police Station</label>
            <select className=" input input-primary w-full">
              <option disabled>Select P/S</option>
              <option value="18">Bangladesh</option>
            </select>
          </div>
          <div className=" w-full">
            <label className="block">Default Address?</label>
            <select
              className=" input input-primary w-full"
              name="is_default"
              tabIndex="-1"
              aria-hidden="true"
            >
              <option value="0">No</option>
              <option value="1">Set Default</option>
            </select>
          </div>
        </div>
        <div className=" w-full mb-5">
          <div>
            <label className="block">Address</label>
            <textarea
              placeholder="2/5 Elephant Road, New Town"
              className="textarea textarea-primary w-full"
              rows={4}
            ></textarea>
          </div>
        </div>

        <div className=" flex justify-center">
          <button type="submit" className="btn btn-primary text-white w-full">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddAddress;
