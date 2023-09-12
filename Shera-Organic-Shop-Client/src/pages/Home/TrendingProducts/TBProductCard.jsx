import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { FaRegEye } from "react-icons/fa";
const OfferBatch = styled.span`
  &before {
    content: "";
    /* position: absolute;
    right: -1px;
    top: 0;
    width: 8px;
    height: 25px;
    background-color: #fff;
    -webkit-clip-path: polygon(100% 0, 0 50%, 100% 100%);
    clip-path: polygon(100% 0, 0 50%, 100% 100%); */
  }
`;

const TBProductCard = () => {
  return (
    <div className=" w-[300px] mb-6 border border-[#f4f4f4] rounded-md hover:shadow-xl  transition-all duration-1000 hover:border-white">
      <div className=" group ">
        <div className=" rounded-2 relative">
          <OfferBatch className="  bg-error p-1 rounded-tl-xl rounded-br-xl text-white absolute top-1 left-1">
            -10% <span className="text-uppercase">Off</span>
          </OfferBatch>

          <div className="relative text-center p-4">
            <img
              src="https://grostore.themetags.com/public/uploads/media/QRrqV5dcT0zLMPR7wNbRGGkSk9f16V3amjaKk4R8.png"
              alt="Dalim (Pomegranate)"
              className="img-fluid"
            />
            <button className=" hover:text-white eye absolute opacity-0  top-7 right-4 group-hover:opacity-100 flex gap-2  flex-col border rounded-full p-2 group  hover:bg-primary transition-all duration-500 hover:border-white">
                <FaRegEye></FaRegEye>
            </button>
          </div>

          <div className="px-8  py-6">
            {/* <!--product category start--> */}
            <div className="  text-gray-light text-[12px] mb-2">
              <a href="" className="d-inline-block text-muted fs-xxs">
                Breakfast ,
              </a>
              <a href="" className="d-inline-block text-muted fs-xxs">
                Fresh Organic ,
              </a>
              <a href="" className="d-inline-block text-muted fs-xxs">
                Fresh Fruits ,
              </a>
              <a href="" className="d-inline-block text-muted fs-xxs">
                Vegetables
              </a>
            </div>
            {/* <!--product category end--> */}

            <Link to="" className=" font-bold mb-2">
              Dalim (Pomegranate)
            </Link>
            <div className="flex  items-center flex-nowrap mb-2">
              <div className="rating rating-xs me-2">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
              <span className="flex-shrink-0  text-gray-deep text-[12px]">
                (5.2k Reviews)
              </span>
            </div>
            <h6 className=" font-bold ">
              <span className="text-md  text-error">₹1,440.00 </span>
              <small>/kg</small>
            </h6>
          </div>
          <div className="px-8 z-20 pb-6 rounded-b-md duration-1000 transition-all border-2 border-white bg-white absolute w-full group-hover:shadow-xl hidden group-hover:block">
            <button className="btn btn-secondary w-full text-white hover:btn-primary hover:text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TBProductCard;
