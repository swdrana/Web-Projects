import { useEffect, useState } from "react";
import SectionTitle from "../../components/Pages/SectionTitle";

function Checkout() {
    const [districts, setDistricts] = useState([]);
    const [thanas, setThanas] = useState([]);
    const [postOffices, setpostOffices] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedThana, setSelectedThana] = useState(null);
    const [selectedPost, setSelectedPost] = useState(null);
    useEffect(()=>{
        fetch('bd-districts.json').then(res=>res.json()).then(data=>setDistricts(data.districts))
        fetch('bd-upazilas.json').then(res=>res.json()).then(data=>setThanas(data.upazilas))
        fetch('bd-postcodes.json').then(res=>res.json()).then(data=>setpostOffices(data.postcodes))
    },[])
    // console.log(districts)
    return (
    <div className=" bg-gray-white">
      <SectionTitle title="Checkout" />
      <div className="container mx-auto py-16 px-4 sm:px-0">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className=" w-full lg:w-8/12 bg-white">
            <h1 className=" text-2xl font-bold p-5">Personal Information</h1>
            <div className=" flex flex-col gap-5 mx-5">
                <div className=" flex flex-col md:flex-row justify-between gap-5">
                    <input type="text" placeholder="Full Name" className="input input-bordered input-primary w-full" />
                    <input type="tel" placeholder="Phone No" className="input input-bordered input-primary w-full" required />
                </div>
                <div className=" flex flex-col md:flex-row justify-between gap-5">
                    <input type="tel" placeholder="Alternative Phone No" className="input input-bordered input-primary w-full" />
                    <input type="email" placeholder="Email" className="input input-bordered input-primary w-full" readOnly />
                </div>
            </div>
            <h1 className=" text-2xl font-bold p-5 py-7">Shipping Address</h1>
            <div className=" flex flex-col gap-5 mx-5">
                <div className=" flex flex-col md:flex-row justify-between gap-5">
                <select className="select select-primary  w-full">
                    <option disabled selected>Bangladesh</option>
                </select>
                <select className="select select-primary w-full "
                    onChange={(event) => {
                        const selectedId = event.target.value;
                        const foundDistrict = districts.find(dist => dist.name.toString() === selectedId);
                        setSelectedDistrict(foundDistrict);
                    }} 
                >
                    <option disabled selected>District</option>
                    {districts.sort((a, b) => a.name.localeCompare(b.name)).map(dist => {
                        return <option key={dist.id}>{dist.name}</option>
                    })}
                </select>
                <select className="select select-primary  w-full"
                    onChange={(event) => {
                        const selectedId = event.target.value;
                        const foundThana = thanas.find(thana => thana.name.toString() === selectedId);
                        setSelectedThana(foundThana);
                    }} 
                >
                    <option disabled selected>Thana</option>
                    {selectedDistrict?.id &&  thanas.filter(thana => thana.district_id === selectedDistrict.id).sort((a, b) => a.name.localeCompare(b.name)).map(thana => {
                        return <option key={thana.id}>{thana.name}</option>
                    })}
                </select>
                </div>
                <textarea className="textarea textarea-primary " placeholder="Home/ House No, Name of Area, Post Code etc."></textarea>
            </div>

                
            
          </div>
          <div className=" w-full lg:w-4/12 sticky top-0 z-10 bg-base-100 p-5">
            <h1 className=" text-2xl font-bold pb-7">Order Summery</h1>
            <div className="flex justify-between py-3"><p>(+) Items(4):</p>	<p>৳ 27,760.00</p></div>
            <div className="flex justify-between py-3"><p>(+) Tax:</p>	<p>৳ 0.00</p></div>
            <div className="flex justify-between py-3"><p>(+) Shipping:</p>	<p>৳ 100.00</p></div>
            <div className="divider"></div>

            <div className="flex justify-between py-3"><h3 className="text-lg font-bold">Total</h3><p className=" text-lg font-bold">৳ 100.00</p></div>
            
            <div className="divider"></div>
            <button className=" btn btn-primary w-full text-white">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
