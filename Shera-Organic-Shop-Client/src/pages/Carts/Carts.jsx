import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../../components/Pages/SectionTitle";
import useCurrentUser from "../../../hooks/useCurrentUser";
import LoadingProgress from "../../components/LoadingProgress/LoadingProgress";
import { toast } from "react-toastify";
import { CheckoutContext } from "../../provider/CheckoutProvider";
import instance from "../../provider/axios";

function Carts() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const { userInfo } = useCurrentUser();
  const fetchProductDetails = async (productId) => {
    try {
      const response = await instance.get(`/products/${productId}`);
  
      return response.data;
    } catch (error) {
      console.error("Error fetching product details:", error);
      return null;
    }
  };


  const fetchCartItems = async () => {
    try {
      const userId = userInfo._id;
      const response = await instance.get(`/carts/${userId}/get-cart`);
      const data = await response.data;

      if (data.cartItems) {
        const updatedCartItems = await Promise.all(
          data.cartItems.map(async (item) => {
            const productDetails = await fetchProductDetails(item._id);
            return {
              ...item,
              productDetails,
              totalPrice:
                item.quantity *
                productDetails?.variants[item.selectedVariant].price,
            };
          })
        );

        setCartItems(updatedCartItems);
        const total = updatedCartItems.reduce(
          (acc, item) => acc + item.totalPrice,
          0
        );
        setSubtotal(total);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleIncrement = async (itemId) => {
    try {
      const selectedItem = cartItems.find((item) => item._id === itemId);
      if (selectedItem && selectedItem.quantity < 10) {
        console.log("Selected Item:", selectedItem);
        console.log("Selected Variant:", selectedItem.selectedVariant);

        // const response = await fetch(
        //   `http://localhost:3000/api/carts/${userInfo._id}/update-cart/${itemId}`,
        //   {
        //     method: "PUT",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       selectedVariant: selectedItem.selectedVariant,
        //       quantity: selectedItem.quantity + 1, // Increase quantity by 1
        //     }),
        //   }
        // );
        const response = await instance.put(
          `/carts/${userInfo._id}/update-cart/${itemId}`,
          {
            selectedVariant: selectedItem.selectedVariant,
            quantity: selectedItem.quantity + 1, // Increase quantity by 1
          }
        );
        
        const data = await response.data;

        if (data.success) {
          // If the quantity was successfully updated, refresh the cart items
          fetchCartItems();
        } else {
          console.error("Error updating cart item quantity:", data.error);
        }
      } else {
        console.error(
          "Error updating cart item quantity: Selected item or variant is undefined or quantity is already at the maximum"
        );
      }
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
    }
  };

  const handleDecrement = async (itemId) => {
    try {
      const selectedItem = cartItems.find((item) => item._id === itemId);

      if (selectedItem && selectedItem.quantity > 1) {
        console.log("Selected Item:", selectedItem);
        console.log("Selected Variant:", selectedItem.selectedVariant);

        // const response = await fetch(
        //   `http://localhost:3000/api/carts/${userInfo._id}/update-cart/${itemId}`,
        //   {
        //     method: "PUT",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       selectedVariant: selectedItem.selectedVariant,
        //       quantity: selectedItem.quantity - 1, // Decrease quantity by 1
        //     }),
        //   }
        // );
        const response = await instance.put(
          `/carts/${userInfo._id}/update-cart/${itemId}`,
          {
            selectedVariant: selectedItem.selectedVariant,
            quantity: selectedItem.quantity - 1, // Decrease quantity by 1
          }
        );
        
        const data = await response.data;

        if (data.success) {
          // If the quantity was successfully updated, refresh the cart items
          fetchCartItems();
        } else {
          console.error("Error updating cart item quantity:", data.error);
        }
      } else {
        console.error(
          "Error updating cart item quantity: Selected item or variant is undefined or quantity is already at the minimum"
        );
      }
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      // const response = await fetch(
      //   `http://localhost:3000/api/carts/${userInfo._id}/delete-cart/${itemId}`,
      //   {
      //     method: "DELETE",
      //   }
      // );
      const response = await instance.delete(`/carts/${userInfo._id}/delete-cart/${itemId}`);

      const data = await response.data;

      if (data.success) {
        // If the item was successfully deleted, show a success toast
        toast.success("Item removed from the cart", {
          position: toast.POSITION.TOP_RIGHT,
        });

        // Refresh the cart items
        fetchCartItems();
      } else {
        // If there was an error, show an error toast
        toast.error(`Error: ${data.error}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      // If there was a network error, show an error toast
      toast.error("Error deleting cart item. Please try again later.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [userInfo]);

  const { checkoutData, setCheckoutData } = useContext(CheckoutContext);
  const navigate = useNavigate();
  const handleCheckout = () => {
    // Assuming your checkoutData structure is an array of cart items
    setCheckoutData(cartItems);

    // Navigate to the checkout page
    navigate("/checkout");
  };

  if (loading) {
    return <LoadingProgress />;
  }
  return (
    <div>
      <SectionTitle title="Carts" />
      <div className="bg-gray-white">
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      {/* <input type="checkbox" className="checkbox" /> */} #
                    </label>
                  </th>
                  <th>Product Info</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Render cart items dynamically */}
                {cartItems.length == 0 ? (
                  <h2 className=" text-2xl text-center font-bold">
                    Your Cart is Empty
                  </h2>
                ) : (
                  ""
                )}
                {cartItems.map((item, index) => (
                  <tr key={item._id}>
                    <th>
                      <label>
                        {/* <input type="checkbox" className="checkbox" /> */}
                        {index + 1}
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.productDetails?.productThumbnail}
                              alt="Product"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {item.productDetails?.productName}
                            <br />
                            <span className=" text-secondary">
                              {
                                item.productDetails?.variants[
                                  `${item.selectedVariant}`
                                ].size
                              }
                            </span>
                          </div>
                          {/* Other details like variant, etc., can be added here */}
                        </div>
                      </div>
                    </td>
                    <td className="text-secondary font-bold">
                      ৳{item.totalPrice.toFixed(2)}{" "}
                    </td>

                    <td>
                      <div>
                        <label className="input-group w-20">
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => handleDecrement(item._id)}
                          >
                            -
                          </button>
                          <p className="input input-sm input-primary input-bordered w-10 text-center">
                            {item.quantity}
                          </p>
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => handleIncrement(item._id)}
                          >
                            +
                          </button>
                        </label>
                      </div>
                    </td>
                    <th>
                      <button
                        className="btn btn-error btn-xs"
                        onClick={() => handleDeleteItem(item._id)}
                      >
                        X
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th>
                    <label>
                      {/* <input type="checkbox" className="checkbox" /> */}#
                    </label>
                  </th>
                  <th>Product Info</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="flex flex-col w-full lg:flex-row py-10">
            <div className="flex-1 p-10 card bg-base-100 rounded-box">
              <h1 className="text-2xl py-5 font-bold">Want Discount?</h1>
              <p className="text-gray-600">Click bellow to get a coupon</p>
              <div className=" my-2">
                <Link className=" btn btn-primary text-white " to="/coupons">
                  Get Coupon
                </Link>
              </div>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="flex-1 p-10 card bg-base-100 rounded-box">
              <div className="flex justify-between">
                <h1 className="text-2xl py-5">Subtotal</h1>
                <h1 className="text-2xl py-5 font-bold">
                  ৳{subtotal.toFixed(2)}
                </h1>
              </div>
              <p className="text-gray-600">
                Shipping options will be updated during checkout.
              </p>
              <div className="py-2">
                <div className="flex justify-between">
                  <Link
                    to="/products"
                    className="btn btn-secondary btn-outline"
                  >
                    Continue Shopping
                  </Link>
                  <button
                    onClick={handleCheckout}
                    className="btn btn-primary hover:btn-secondary"
                  >
                    <p className="text-white">Checkout</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
