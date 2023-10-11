import { useForm } from "react-hook-form";
import useProducts from "../../../../hooks/useProducts"

function ProductsDetails() {
    const [products, isLoading, refetch, isError, error] = useProducts();
    console.log(products)
   
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        console.log(data.categoryName, data.categoryImage);
      
        const formData = new FormData();
        formData.append('categoryName', data.categoryName);
        formData.append('categoryImage', data.categoryImage[0]);
      console.log(formData)
        try {
          // Now you can omit the base URL and just provide the endpoint path.
          await instance.post('/categories', formData);
          console.log('Category successfully added');
          refetch();
        } catch (error) {
          console.error('Error adding category:', error);
          if (error.response) {
            // Log the server response for more details
            console.error('Server Response:', error.response.data);
          }
        }
      };
      const handleDelete = async (categoryId) => {
        try {
          // Send a DELETE request to your server's delete endpoint
          await instance.delete(`/categories/${categoryId}`);
          refetch();
          console.log('Category deleted successfully');
          // Optionally, you can update your component's state or perform other actions as needed.
        } catch (error) {
          console.error('Error deleting category:', error);
        }
      };
    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-100 w-full lg:w-1/2">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">New Category Name<span className="text-red-500">*</span></span>
                </label>
                <input
                  {...register("categoryName", { required: true })}
                  type="text"
                  placeholder="Category Name"
                  className="input input-bordered input-secondary"
                />
                {errors.categoryName && <span className="text-error text-xs">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category Image<span className="text-red-500">*</span></span>
                </label>
                <input
                  {...register("categoryImage", { required: true })}
                  type="file"
                  placeholder="Image Link"
                  className="file-input file-input-bordered file-input-secondary"
                />
                {errors.categoryImage && <span className="text-error text-xs">This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary text-white">Add Category</button>
              </div>
            </div>
          </form>
    
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
