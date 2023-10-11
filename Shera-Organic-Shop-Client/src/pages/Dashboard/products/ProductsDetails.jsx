import useProducts from "../../../../hooks/useProducts"
import instance from "../../../provider/axios";

function ProductsDetails() {
    const [products, isLoading, refetch, isError, error] = useProducts();
    console.log(products)
   
    
      const handleDelete = async (productId) => {
        try {
          // Send a DELETE request to your server's delete endpoint
          await instance.delete(`/products/${productId}`);
          refetch();
          console.log('Product deleted successfully');
          // Optionally, you can update your component's state or perform other actions as needed.
        } catch (error) {
          console.error('Error deleting category:', error);
        }
      };
    return (
        <div>
          {/* A static table that could potentially display data dynamically fetched from an API */}
          <table className="table text-center">
            <thead>
              <tr>
                <th>S/L</th>
                <th>Product Image</th>
                <th>Name</th>
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
                        <img src={`http://localhost:3000/${product.productThumbnail}`} alt={product.productThumbnail} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{product.productName}</div>
                        <div className="text-sm opacity-50">{product.productCategory}</div>
                    </div>
                    </div>
                </td>
                <td>
                    {/* {products[8].variants[0].size} */}
                    {product.variants.map(v=>{
                        <div key={v._id}>
                            {v?.size}
                            {v?.price}
                        </div>
                    })}
                    <br/>
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>
                    <input type="checkbox" className="checkbox"  checked={product.isPublished}/> </td>
                <th>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                </th>
                <th><button onClick={() => handleDelete(product._id)} className="btn btn-error btn-xs">X</button></th>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
    )
}

export default ProductsDetails
