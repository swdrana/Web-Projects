import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { AuthContext } from "../../provider/AuthProvider";
import { CheckoutContext } from "../../provider/CheckoutProvider";
import instance from "../../provider/axios";
import { AddToCart, Purchase } from "../../utilities/facebookPixel";
function ProductDetailsCard({ product }) {
  const {
    _id,
    productName,
    shortDescription,
    // rating,
    // description,
    productCategory,
    variants,
    // isPublished,
    productThumbnail,
    productGallery,
  } = product;
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };
  // productId=${_id}&selectedVariant=${selectedVariant}&quantity=${quantity
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleVariantChange = (index) => {
    setSelectedVariant(index);
  };

  const selectedProductInfo = {
    _id,
    selectedVariant,
    quantity,
    totalPrice: variants[selectedVariant].price * quantity,
    productDetails: product,
  };
  const { checkoutData, setCheckoutData } = useContext(CheckoutContext);
  useEffect(() => setCheckoutData([]), []);
  // console.log(checkoutData)
  const navigate = useNavigate();

  const handelBuyNow = async () => {
    const info = [selectedProductInfo];
    await setCheckoutData(info);
    console.log(checkoutData);
    Purchase()
    navigate("/checkout");
  };

  // Frontend code using fetch
  const { userInfo, refetch } = useContext(AuthContext);
  // console.log(userInfo._id)
  const handelAddToCart = async () => {
    try {
      AddToCart();
      if (!userInfo) {
        return navigate("/login");
      }
      const response = await instance.post(
        `/carts/${userInfo._id}/add-to-cart`,
        selectedProductInfo
      );
      refetch();

      const data = response.data;

      if (data.success) {
        toast.success("Item added to the cart successfully");
        console.log("Item added to the cart successfully");
        navigate("/carts");
      } else if (
        data.message ===
        "Item with the same variant already exists in the cart. Cannot add to cart."
      ) {
        toast.warning(
          "Item with the same variant already exists in the cart. Cannot add to cart."
        );
      } else {
        console.error("Failed to add item to the cart");
        toast.error("Failed to add item to the cart");
      }
    } catch (error) {
      console.error("Error adding item to the cart:", error);
      toast.error("Error adding item to the cart. Please try again later.");
    }
  };

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg pb-3 shadow-lg ">
      <div className=" h-96 w-full">
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={productThumbnail} alt="" />
            </SwiperSlide>
            {productGallery.map((img) => {
              return (
                <SwiperSlide key={img}>
                  <img src={img} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      </div>
      {/* Product Discription and pirce  */}
      <div className=" w-full  px-2">
        <div className="product-info">
          <h4 className="mt-1 mb-3 text-xl font-bold">{productName}</h4>

          {/* Rating  */}
          {/* <div className="flex  items-center flex-nowrap mb-2">
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
                readOnly
              />
            </div>
            <span className="flex-shrink-0  text-gray-deep text-[12px]">
              (5.2k Reviews) {rating}
            </span>
          </div> */}

          {/* Price  */}
          <div className="font-bold mt-2 text-error">
            ৳{variants[selectedVariant].price * quantity}
            <span className="font-bold text-gray-500 line-through ms-1">
              {/* ৳240.00 */}
            </span>
          </div>

          {/* Description */}
          <div className="flex mt-4">
            <h6 className="mb-1 flex-shrink-0 font-bold text-lg">
              Description
            </h6>
            <span className=" w-full border-b-2 border-secondary mb-3 ms-2 me-5"></span>
          </div>

          {/* shortDescription */}
          <p className="mb-3 text-gray-deep">{shortDescription}</p>

          {/* Weight */}
          <h6 className="mb-1 mt-4 flex-shrink-0 font-bold text-lg">Weight:</h6>
          <ul className="product-radio-btn mb-4 flex gap-2">
            {variants.map((singleVariant, index) => (
              <li key={singleVariant.price}>
                <input
                  type="radio"
                  id={`weight-${index}`}
                  name="weight"
                  value={singleVariant.size}
                  checked={index === selectedVariant}
                  onChange={() => handleVariantChange(index)}
                />
                <label
                  htmlFor={`weight-${index}`}
                  className={`inline-block px-4 bg-transparent border border-secondary text-secondary cursor-pointer rounded transition duration-300 ease-in-out hover:bg-secondary hover:text-white focus:outline-none focus:ring focus:border-secondary ${
                    index === selectedVariant ? "bg-secondary text-primary" : ""
                  }`}
                >
                  {singleVariant.size}
                </label>
              </li>
            ))}
          </ul>

          {/* Select Item Options  */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div>
              <label className="input-group w-full">
                <button
                  onClick={handleDecrement}
                  className="btn btn-sm btn-primary text-lg w-1/3"
                >
                  -
                </button>
                <input
                  type="text"
                  placeholder="1"
                  className="input w-1/3  btn-sm input-primary input-bordered text-center font-bold text-lg"
                  value={quantity}
                  readOnly
                />
                <button
                  onClick={handleIncrement}
                  className="btn w-1/3 btn-primary btn-sm text-lg"
                >
                  +
                </button>
              </label>
            </div>
            <button
              onClick={handelBuyNow}
              // to={`/checkout?productId=${_id}&selectedVariant=${selectedVariant}&quantity=${quantity}`}
              className="btn btn-error btn-sm text-white flex"
            >
              <div className=" flex gap-1 items-center justify-center">
                <FaCartArrowDown /> Buy Now
              </div>
            </button>
            <button
              onClick={() => handelAddToCart()}
              className="btn btn-secondary btn-sm text-white"
            >
              <div className=" flex gap-1 items-center justify-center">
                <FaCartArrowDown /> Add to Cart
              </div>
            </button>
          </div>

          {/* Tag  */}
          <div className="tt-category-tag mt-4 gap-1 flex">
            <div className="badge badge-accent badge-outline ">
              {productCategory}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsCard;
