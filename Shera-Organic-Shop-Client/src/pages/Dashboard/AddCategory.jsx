import instance from "./../../provider/axios";
import { useForm } from "react-hook-form";
import useCategory from "../../../hooks/useCategory";
import { toast } from "react-toastify";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

function AddCategory() {
  const [categories, isLoading, refetch] = useCategory();

  // Use the useContext hook to access the AuthContext
  const authContext = useContext(AuthContext);

  // Now you can access the user and other authentication-related functions
  const {
    user,
    userInfo,
    loading,
    createUser,
    updateUserNamePhone,
    signIn,
    logOut,
    sendPasswordReset,
  } = authContext;
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
  // console.log(categories)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const uploadImageToImgBB = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`,
      formData
    );

    // Extract the image URL from the ImgBB API response
    return response.data.data.url;
  };
  const onSubmit = async (data) => {
    console.log(data.categoryName, data.categoryImage);

    try {
      let formData = {
        categoryName: data.categoryName,
      };

      // Check if an image is selected
      if (data.categoryImage && data.categoryImage[0]) {
        const imageUrl = await uploadImageToImgBB(data.categoryImage[0]);
        formData = {
          ...formData,
          categoryImage: imageUrl,
        };
      }

      // Make sure authContext and authContext.user are defined
      if (authContext && authContext.user) {
        // Set the user's email as a header
        instance.defaults.headers.common["email"] = authContext.user.email;
      }

      await instance.post("/categories", formData);
      toast.success("Category Added");
      console.log("Category successfully added");
      refetch();
    } catch (error) {
      toast.error("Please Change Something");
      console.error("Error adding category:", error);
      if (error.response) {
        console.error("Server Response:", error.response.data);
      }
    } finally {
      // Reset the X-User-Email header after the request is made
      instance.defaults.headers.common["email"] = undefined;
    }
  };

  // bellow code is for previous: without imgbb direc upload to the server ts node server code

  // const onSubmit = async (data) => {
  //   console.log(data.categoryName, data.categoryImage);

  //   const formData = new FormData();
  //   formData.append('categoryName', data.categoryName);
  //   formData.append('categoryImage', data.categoryImage[0]);
  //   console.log(formData)
  //   try {
  //     // Now you can omit the base URL and just provide the endpoint path.
  //     await instance.post('/categories', formData);
  //     toast.success("Category Added");
  //     console.log('Category successfully added');
  //     refetch();
  //   } catch (error) {
  //     toast.error("Please Change Something");
  //     console.error('Error adding category:', error);
  //     if (error.response) {
  //       // Log the server response for more details
  //       console.error('Server Response:', error.response.data);
  //     }
  //   }
  // };

  // const handleDelete = async (categoryId) => {
  //   try {
  //     // Send a DELETE request to your server's delete endpoint
  //     await instance.delete(`/categories/${categoryId}`);
  //     toast.info("Category Deleted")
  //     refetch();
  //     console.log('Category deleted successfully');
  //     // Optionally, you can update your component's state or perform other actions as needed.
  //   } catch (error) {
  //     toast.info("Error deleting category")
  //     console.error('Error deleting category:', error);
  //   }
  // };

  const handleDelete = async (categoryId, categoryImage) => {
    try {
      // Delete the category from your server
      // Make sure authContext and authContext.user are defined
      if (authContext && authContext.user) {
        // Set the user's email as a header
        instance.defaults.headers.common["email"] = authContext.user.email;
      }
      await instance.delete(`/categories/${categoryId}`);
      toast.info("Category Deleted");

      // Delete the image from ImgBB
      const imageId = getImageIdFromUrl(categoryImage);
      if (imageId) {
        await deleteImageFromImgBB(imageId);
      }

      // Use the callback version of refetch
      refetch((data) => [
        ...data.filter((category) => category._id !== categoryId),
      ]);
      console.log("Category deleted successfully");
    } catch (error) {
      refetch((data) => [
        ...data.filter((category) => category._id !== categoryId),
      ]);
      toast.info("Error deleting category");
      console.error("Error deleting category:", error);
    }
  };

  const getImageIdFromUrl = (imageUrl) => {
    const match = imageUrl.match(/\/([^/]+)$/);
    return match ? match[1] : null;
  };

  const deleteImageFromImgBB = async (imageId) => {
    try {
      await axios.delete(
        `https://api.imgbb.com/1/image/${imageId}?key=${
          import.meta.env.VITE_IMGBB
        }`
      );
      console.log("Image deleted from ImgBB");
    } catch (error) {
      console.error("Error deleting image from ImgBB:", error);
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card bg-base-100"
      >
        <div className=" mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                New Category Name<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              {...register("categoryName", { required: true })}
              type="text"
              placeholder="Category Name"
              className="input input-bordered input-secondary"
            />
            {errors.categoryName && (
              <span className="text-error text-xs">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category Image (Optional)</span>
            </label>
            <input
              {...register("categoryImage", { required: false })}
              type="file"
              placeholder="Image Link"
              className="file-input file-input-bordered file-input-secondary"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary text-white">
              Add Category
            </button>
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
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center justify-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      {/* {TODO: change url} */}
                      <img src={category.categoryImage} alt="Product" />
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-secondary font-bold">
                <div className="font-bold">{category.categoryName}</div>
              </td>
              <th>
                <button
                  onClick={() => handleDelete(category._id)}
                  className="btn btn-error btn-xs"
                >
                  X
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddCategory;
