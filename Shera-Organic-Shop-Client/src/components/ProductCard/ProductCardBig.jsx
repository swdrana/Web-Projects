import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
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

const ProductCardBig = ({product}) => {
  console.log(product)
  const {_id, productName,shortDescription, description, productCategory,variants, isPublished, productThumbnail, productGallery} = product;
  return (
    <div className=" w-full sm:w-[300px] mb-6 border border-[#f4f4f4] rounded-md hover:shadow-2xl  transition-all duration-100 hover:border-white">
      <div className=" group ">
        <div className=" rounded-2 relative">
          {/* <OfferBatch className="  bg-error p-1 rounded-tl-xl rounded-br-xl text-white absolute top-1 left-1">
            -10% <span className="text-uppercase">Off</span>
          </OfferBatch> */}

          <div className="relative text-center p-4">
            <img
              src={productThumbnail}
              alt={productThumbnail}
              className="img-fluid"
            />
            <div className="flex gap-2  flex-col absolute opacity-0 group-hover:opacity-100 top-7 right-4 transition-all duration-500">
              <button className=" hover:text-white  border rounded-full p-2 group  hover:bg-secondary transition-all duration-500 hover:border-white">
                <FaRegHeart></FaRegHeart>
              </button>
              <button className=" hover:text-white border rounded-full p-2 group  hover:bg-primary  transition-all duration-500 hover:border-white">
                <FaRegEye></FaRegEye>
              </button>
            </div>
          </div>

          <div className="px-8  py-6">
            {/* <!--product category start--> */}
            <div className="  text-gray-light text-[12px] mb-2">
              <a href="" className="d-inline-block text-muted fs-xxs">
                {productCategory}
              </a>
            </div>
            {/* <!--product category end--> */}

            <Link to="" className=" font-bold mb-2">
              {productName}
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
                  checked readOnly
                />
              </div>
              <span className="flex-shrink-0  text-gray-deep text-[12px]">
                (5.2k Reviews)
              </span>
            </div>
            <h6 className=" font-bold ">
              <span className="text-md  text-error">৳{variants[0].price} </span>
              <small>/{variants[0].size}</small>
            </h6>
          </div>
          <div className="px-8 z-20 pb-6 rounded-b-md duration-1000 transition-all border-2 border-white bg-white absolute w-full group-hover:shadow-2xl hidden group-hover:block">
            <Link to={`details/${_id}`} className="btn btn-secondary w-full text-white hover:btn-primary hover:text-white">
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardBig;
