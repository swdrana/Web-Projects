const ShippingAddress = ({ districts, thanas, setSelectedDistrict, setSelectedThana, selectedDistrict, selectedThana,setStreetAddress, setApartment  }) => {

  return (
    <div className="bg-white pb-8 mt-6 rounded-lg">
      <h1 className="text-2xl font-bold p-5 py-7">Shipping Address</h1>
      <div className="flex flex-col gap-5 mx-5">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <select className="select select-primary w-full">
            <option disabled selected>
              Bangladesh
            </option>
          </select>
          <select
            className="select select-primary w-full"
            onChange={(event) => {
              const selectedId = event.target.value;
              const foundDistrict = districts.find(
                (dist) => dist.name.toString() === selectedId
              );
              setSelectedDistrict(foundDistrict);
            }}
            
          >
            <option disabled selected>
              District
            </option>
            {districts
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((dist) => {
                return <option key={dist.id} required> {dist.name} </option>;
              })}
          </select>
          <select
            className="select select-primary w-full"
            onChange={(event) => {
              const selectedId = event.target.value;
              const foundThana = thanas.find(
                (upazila) => upazila.name.toString() === selectedId
              );
              setSelectedThana(foundThana);
            }}
            required
          >
            <option disabled selected>
              Thana
            </option>
            {thanas
              .filter(
                (upazila) =>
                  upazila.district_id.toString() ===
                  (selectedDistrict?.id || "").toString()
              )
              .map((upazila) => {
                return <option key={upazila.id}>{upazila.name}</option>;
              })}
          </select>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <input
            type="text"
            placeholder="Street Address"
            onChange={(e) => setStreetAddress(e.target.value)}
            className="input input-bordered input-primary w-full"
            required
          />
          <input
            type="text"
            onChange={(e) => setApartment(e.target.value)}
            placeholder="Apartment, suite, etc. (optional)"
            className="input input-bordered input-primary w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
