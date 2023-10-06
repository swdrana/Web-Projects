import { useState, useRef, useMemo } from "react";
import useCategory from "../../../hooks/useCategory";
import { useForm } from "react-hook-form";
import JoditEditor from 'jodit-react';
function AddProduct() {
    const editor = useRef(null);
	const [content, setContent] = useState('');
    // const config = useMemo(
	// 	{
	// 		readonly: false, // all options from https://xdsoft.net/jodit/docs/,
	// 		placeholder: placeholder || 'Start typings...'
	// 	},
	// 	[placeholder]
	// );
    console.log(content)
  const [categories, isLoading, refetch] = useCategory();
  const {register, handleSubmit, formState: { errors },} = useForm();
  const onSubmit = async (data) => {
    // console.log(data.categoryName, data.categoryImage);
    // const formData = new FormData();
    // formData.append('categoryName', data.categoryName);
    // formData.append('categoryImage', data.categoryImage[0]);
    // try {
    //   // Now you can omit the base URL and just provide the endpoint path.
    //   await instance.post('/categories', formData);
    //   console.log('Category successfully added');
    //   refetch();
    // } catch (error) {
    //   console.error('Error adding category:', error);
    //   if (error.response) {
    //     // Log the server response for more details
    //     console.error('Server Response:', error.response.data);
    //   }
    // }
  };
  const [markdownInput, setMarkdownInput] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    setMarkdownInput(e.target.value);
  };
  return (
    <div>
        <JoditEditor
			ref={editor}
			value={content}
			// config={config}
			// tabIndex={1} // tabIndex of textarea
			// onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onBlur={newContent => setContent(newContent)}
		/>
        {/* <MyEditor/> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card bg-base-100 w-full lg:w-1/2"
      >
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">
              Product Name<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              {...register("productName", { required: true })}
              type="text"
              placeholder="Type your product name"
              className="input input-bordered input-secondary"
            />
            {errors.productName && (
              <span className="text-error text-xs">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
              Short Description<span className="text-red-500">*</span>
              </span>
            </label>
            <textarea
              {...register("shortDescription", { required: true })}
              type="text"
              placeholder="Type your product short description"
              className="textarea textarea-secondary"
            ></textarea>
            {errors.shortDescription && (
              <span className="text-error text-xs">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
              Description<span className="text-red-500">*</span>
              </span>
            </label>
            {/* <textarea
            //   {...register("shortDescription", { required: true })}
              value={markdownInput}
              onChange={(e) => setMarkdownInput(e.target.value)}
              type="text"
              placeholder="Type your product short description"
              className="textarea textarea-secondary"
            ></textarea> */}
            {errors.shortDescription && (
              <span className="text-error text-xs">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Category Image<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              {...register("categoryImage", { required: true })}
              type="file"
              placeholder="Image Link"
              className="file-input file-input-bordered file-input-secondary"
            />
            {errors.categoryImage && (
              <span className="text-error text-xs">This field is required</span>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary text-white">
              Add Category
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
