import instance from "./../../provider/axios";
import { useForm } from "react-hook-form";
import useCategory from "../../../hooks/useCategory";


function AddCategory() {
  const [categories, isLoading, refetch] = useCategory();
  // useEffect(() => {
  //   // Make an HTTP GET request to fetch category data
  //   const fetchData = async () => {
  //     try {
  //       const response = await instance.get('/categories'); // Replace with your endpoint
  //       setCategories(response.data);
  //     } catch (error) {
  //       console.error('Error fetching category data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  console.log(categories)
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
            <th>Category Image</th>
            <th>Category Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          {categories.map((category, index) => (
          <tr key={category._id}>
            <th>{index+1}</th>
            <td>
              <div className="flex items-center justify-center">
                <div className="avatar">
                  <div className="mask mask-squircle w-16 h-16">
                    {/* {TODO: change url} */}
                    <img src={`http://localhost:3000/${category.categoryImage}`} alt="Product" />
                  </div>
                </div>
              </div>
            </td>
            <td className="text-secondary font-bold">
                  <div className="font-bold">{category.categoryName}</div></td>
            <th><button onClick={() => handleDelete(category._id)} className="btn btn-error btn-xs">X</button></th>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddCategory;