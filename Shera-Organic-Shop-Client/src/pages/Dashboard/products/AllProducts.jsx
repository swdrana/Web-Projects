import { toast } from "react-toastify";
import useProducts from "../../../../hooks/useProducts"
import instance from "../../../provider/axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

function AllProducts() {
  const { user, loading } = useContext(AuthContext);
  const [products, isLoading, refetch, isError, error] = useProducts();

  if(loading || isLoading){
    return <p>Loading.... form add product page</p>
  }
  console.log(products)
   
    
  const handleDelete = async (productId) => {
        try {
          // Configuration object with headers
          const config = {
            headers: {
              email: user.email, // Replace with the actual user's email
            },
          };
          // Send a DELETE request to your server's delete endpoint
          await instance.delete(`/products/${productId}`, config);
          toast.info("Product Deleted!")
          refetch();
          console.log('Product deleted successfully');
          // Optionally, you can update your component's state or perform other actions as needed.
        } catch (error) {
          toast.warning("Error deleting product")
          console.error('Error deleting product:', error);
        }
  };
    return (
        <div>
          {/* A static table that could potentially display data dynamically fetched from an API */}
          <table className="table text-center">
            <thead>
              <tr>
                <th>S/L</th>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              {products.map((product, index) => (
                <tr key={product._id}>
                <th>
                    <label>
                    {index+1}
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {/* {TODO: Change URL} */}
                        <img src={product.productThumbnail} alt={product.productThumbnail} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{product.productName}</div>
                        <div className="text-sm opacity-50">{product.productCategory}</div>
                    </div>
                    </div>
                </td>
                <td>
                    {product.variants.map((v, index) => (
                        <div key={index}>
                            Size: {v.size}, Price: {v.price}
                        </div>
                    ))}
                </td>

                <td>
                    <input type="checkbox" className="checkbox"  checked={product.isPublished}/> </td>
                <th>
                    <Link to={product._id} className="btn btn-ghost btn-xs">Edit</Link>
                </th>
                <th><button onClick={() => handleDelete(product._id)} className="btn btn-error btn-xs">X</button></th>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
    )
}

export default AllProducts
