import { useEffect, useState } from "react";
import instance from "../../../provider/axios";
import LoadingProgress from "../../../components/LoadingProgress/LoadingProgress";

function OrderRow({index,item}) {
    // console.log(item)
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // console.log(product)
    useEffect(() => {
        const fetchOrderById = async (productId) => {
          try {
            const response = await instance.get(`/products/${item.productId}`);
            // Assuming your API returns the order data in the response.data property
            setProduct(response.data);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching order:", error);
            setError(error);
            setLoading(false);
          }
        };
    
        // Call the fetchOrderById function with the order ID from the URL
        fetchOrderById(item.productId);
      }, [item]);
      if (loading ) {
        return <LoadingProgress></LoadingProgress>
      }
      if (error ) {
        return <>{error}</>
      }
    return (
        <tr>
            <td>{index}</td>
            <td className=" flex items-center ">
                <img className="w-10" src={product.productThumbnail} alt="" />  
                <p className=" ms-4">{product.productName}</p>  
            </td>
            <td>
                <p>{product.variants[item.variant].price}</p>  
            </td>
            <td>
                <p>{item.quantity}</p>  
            </td>
            <td>
                <p>{product.variants[item.variant].price * item.quantity}</p>  
            </td>
        </tr>
    )
}

export default OrderRow
