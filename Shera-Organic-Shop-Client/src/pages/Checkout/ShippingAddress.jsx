const ShippingAddress = ({
  districts,
  thanas,
  setSelectedDistrict,
  setSelectedThana,
  selectedDistrict,
  selectedThana,
  setStreetAddress,
  setApartment,
  userInfo, // Add userInfo as a prop
}) => {
  const handleStreetAddressChange = (e) => {
    console.log("Street Address Changed:", e.target.value);
    setStreetAddress(e.target.value);
  };

  const handleApartmentChange = (e) => {
    console.log("Apartment Changed:", e.target.value);
    setApartment(e.target.value);
  };

  const getDefaultDistrictValue = () => {
    return selectedDistrict?.name || userInfo?.shippingAddress?.district || "";
  };

  const getDefaultThanaValue = () => {
    return (
      selectedThana?.name ||
      userInfo?.shippingAddress?.thana?.name ||
      ""
    );
  };

  const getDefaultStreetAddressValue = () => {
    return (
      userInfo?.shippingAddress?.streetAddress ||
      ""
    );
  };

  const getDefaultApartmentValue = () => {
    return (
      userInfo?.shippingAddress?.apartment ||
      ""
    );
  };

  return (
    <div className="bg-white pb-8 mt-6 rounded-lg">
      <h1 className="text-2xl font-bold p-5 py-7">Shipping Address</h1>
      <div className="flex flex-col gap-5 mx-5">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <select
            className="select select-primary w-full"
            disabled
          >
            <option>Bangladesh</option>
          </select>
          <select
            className="select select-primary w-full"
            onChange={(event) => {
              const selectedId = event.target.value;
              const foundDistrict = districts.find(
                (dist) => dist.name.toString() === selectedId
              );
              setSelectedDistrict(foundDistrict);
              // Reset the selected thana when the district changes
              setSelectedThana(null);
            }}
            value={getDefaultDistrictValue()}
            required
          >
            <option disabled value="">
              District
            </option>
            {districts
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((dist) => (
                <option key={dist.id} value={dist.name}>
                  {dist.name}
                </option>
              ))}
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
            value={getDefaultThanaValue()}
            required
          >
            <option disabled value="">
              {getDefaultThanaValue() || "Thana"}
            </option>
            {thanas
              .filter(
                (upazila) =>
                  upazila.district_id.toString() ===
                  (selectedDistrict?.id || "").toString()
              )
              .map((upazila) => (
                <option key={upazila.id} value={upazila.name}>
                  {upazila.name}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <input
            type="text"
            placeholder="Street Address"
            onChange={handleStreetAddressChange}
            className="input input-bordered input-primary w-full"
            defaultValue={getDefaultStreetAddressValue()}
            required
          />
          <input
            type="text"
            onChange={handleApartmentChange}
            placeholder="Apartment, suite, etc. (optional)"
            className="input input-bordered input-primary w-full"
            defaultValue={getDefaultApartmentValue()}
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
