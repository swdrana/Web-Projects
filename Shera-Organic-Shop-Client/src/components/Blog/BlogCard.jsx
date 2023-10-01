import { Link } from "react-router-dom";

import {FaArrowRightLong, FaTags, FaClock} from "react-icons/fa6";
function BlogCard({img}) {
  return (
    <section className=" w-[400px] bg-base-100 rounded-lg overflow-hidden">
      <section className="">
        <div className="">
          <img src={img} alt="" />
        </div>
        <div className=" p-6">
          <div className=" flex gap-3">
            <p className=" flex justify-center items-center gap-1 text-[#5d6374] text-sm"><FaTags/>Organic Vegetable</p>
            <p className=" flex justify-center items-center gap-1 text-[#5d6374] text-sm"> <FaClock/>May 24, 2022</p>
          </div>
          <Link className=" text-2xl font-bold pt-2">Holiday Home Delivery We have Recently Ordered</Link>
          <p className=" text-gray-dark text-[16px] py-5">Holisticly exploit equity invested growth strategies whereas enterpris</p>
        <Link to={'/'} className="btn btn-secondary my-3 bg-[#ddecd74d] border-0 hover:bg-primary  text-primary font-bold w-44 h-10 rounded-md normal-case text-base hover:text-white">
              Explore More <FaArrowRightLong></FaArrowRightLong>
      </Link>
        </div>
      </section>
    </section>
  )
}

export default BlogCard