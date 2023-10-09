import { useState, useRef } from "react";
import useCategory from "../../../hooks/useCategory";
import { Controller, useForm } from "react-hook-form";
import JoditEditor from 'jodit-react';
import instance from "../../provider/axios";
function AddProduct() {
    const {register,control, handleSubmit, formState: { errors },} = useForm();
    // ============================== galleryImages ==============================
    const fileInputRef = useRef();
    const [galleryImages, setGalleryImages] = useState([]);
    const [galleryPreviews, setGalleryPreviews] = useState([]);
    const handleGalleryChange = (e) => {
        const file = e.target.files[0];  // Selecting the first file from the input
        if (file) {
            setGalleryImages([...galleryImages, file]);  // Appending new image File to the state
            setGalleryPreviews([...galleryPreviews, URL.createObjectURL(file)]);  // Appending new preview URL to the state
        }
    };
    const handleRemoveImage = (removeIndex) => {
        // Filter out the image from the states based on the index
        setGalleryImages(galleryImages.filter((_, index) => index !== removeIndex));
        setGalleryPreviews(galleryPreviews.filter((_, index) => index !== removeIndex));
    };
    const [categories, isLoading, refetch] = useCategory();

    // ============================== Price and Variants ==============================
    const [variants, setVariants] = useState([{ size: '', price: '' }]);
    const addVariant = () => {
        setVariants([...variants, { size: '', price: '' }]);
    };
    const removeVariant = (indexToRemove) => {
        setVariants(variants.filter((_, index) => index !== indexToRemove));
    };
    const updateVariant = (index, field, value) => {
        const newVariants = [...variants];
        newVariants[index][field] = value;
        setVariants(newVariants);
    };

    const onSubmit = async (data) => {
        // Create a new FormData object to store your form data
        const formData = new FormData();
      
        // Append form fields to the FormData object
        formData.append('productName', data.productName);
        formData.append('shortDescription', data.shortDescription);
        formData.append('description', data.description);
        formData.append('productCategory', data.productCategory);
        formData.append('variants', JSON.stringify(variants));
        formData.append('isPublished', data.isPublished);
      
        // Append the productThumbnail as a single file
        formData.append('productThumbnail', data.productThumbnail[0]);
      
        // Append each item in the galleryImages array
        galleryImages.forEach((imageFile, index) => {
            formData.append('productGallery', imageFile);
          });
      
        console.log([...formData]);
        console.log(galleryImages);
      
        // Implement API submission as per requirement...
        try {
          // Now you can omit the base URL and just provide the endpoint path.
          const response = await instance.post('/products', formData);
          console.log('Products successfully added');
          console.log('Response Data:', response.data);
        } catch (error) {
          console.error('Error adding Products:', error);
          if (error.response) {
            // Log the server response for more details
            console.error('Server Response:', error.response.data);
          }
        }
      };
      
    // const onSubmit = async (data) => {
    //     // bellow for multiple img upload 
    //     const formData = new FormData();
    //     formData.append('productName', data.productName);
    //     formData.append('shortDescription', data.shortDescription);
    //     formData.append('description', data.description);
    //     formData.append('productThumbnail', data.productThumbnail[0]);
    //     // formData.append('productGallery', galleryImages);
    //     formData.append('productCategory', data.productCategory);
    //     formData.append('variants', JSON.stringify(variants));
    //     formData.append('isPublished', data.isPublished);
    //     // Append gallery images
    //     galleryImages.forEach((imageFile, index) => {
    //             formData.append(`productGallery`, imageFile);
    //             });
        
    //     console.log([...formData])
    //     console.log(galleryImages)


    //     // Implement API submission as per requirement...
    //     try {
    //         // Now you can omit the base URL and just provide the endpoint path.
    //         const response = await instance.post('/products', formData);
    //         console.log('Products successfully added');
    //         console.log('Response Data:', response.data);
    //       } catch (error) {
    //         console.error('Error adding Products:', error);
    //         if (error.response) {
    //           // Log the server response for more details
    //           console.error('Server Response:', error.response.data);
    //         }}

    // };
    if (isLoading) {
        return <>Loading...</>
    }
    return (
        <div className=" ">
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="card bg-base-100 w-full lg:w-10/12 mx-auto"
        >
            <div className="card-body">
            {/* Product Name */}
            <div className="form-control">
                <label className="label"><p className="label-text">Product Name<span className="text-red-500">*</span></p></label>
                {/* TODO: req true */}
                <input
                {...register("productName", { required: false })}
                type="text"
                placeholder="Type your product name" className="input input-bordered input-secondary"
                />
                {errors.productName && (
                <span className="text-error text-xs">This field is required</span>
                )}
            </div>
            {/* Short Description */}
            <div className="form-control">
                <label className="label">
                <span className="label-text">
                Short Description<span className="text-red-500">*</span>
                </span>
                </label>
                <textarea
                {...register("shortDescription", { required: false })}
                type="text"
                placeholder="Type your product short description"
                className="textarea textarea-secondary h-28"
                ></textarea>
                {errors.shortDescription && (
                <span className="text-error text-xs">This field is required</span>
                )}
            </div>
            {/* Description */}
            <div className="form-control">
                <label className="label">
                <span className="label-text">
                Description<span className="text-red-500">*</span>
                </span>
                </label>
                <div className="border border-secondary rounded-md">
                <Controller
            name="description"
            control={control}
            defaultValue=""
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <JoditEditor
                {...field}  // Spread to allow reactivity and update the form state
                tabIndex={1}
                // config={config}
                onBlur={newContent => field.onChange(newContent)}
              />
            )}
          />
                </div>
                {/* <textarea
                //   {...register("shortDescription", { required: false })}
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
            {/* Thumbnail Images */}
            <div className="form-control">
                <label className="label">
                <span className="label-text">
                Thumbnail Images (592x592)<span className="text-red-500">*</span>
                </span>
                </label>
                <input
                {...register("productThumbnail", { required: false })}
                type="file"
                placeholder="Image Link"
                className="file-input file-input-bordered file-input-secondary"
                />
                {errors.productThumbnail && (
                <span className="text-error text-xs">This field is required</span>
                )}
            </div>





            {/* Gallery */}
            <div className="form-control">
                <label className="label">
                <span className="label-text">
                Gallery<span className="text-red-500">*</span>
                </span>
                </label>
                {/* <input
                {...register("productGallery", { required: false })}
                type="file"
                placeholder="Image Link"
                className="file-input file-input-bordered file-input-secondary"
                /> */}
                
{/* Gallery Previews */}
<div className="grid grid-cols-3 gap-4 mt-4">
    {galleryPreviews.map((preview, index) => (
        <div key={index} className="relative">
            <img
                src={preview}
                alt={`preview ${index + 1}`}
                className="h-24 w-24 object-cover"
            />
            {/* Optional: Delete Button on Each Image */}
            <button
                className="absolute top-0 right-0 bg-red-500 text-white p-1"
                onClick={() => handleRemoveImage(index)}
            >
                X
            </button>
        </div>
    ))}
</div>


                {/* Custom Button for Image Upload */}
<button 
    type="button" 
    onClick={() => fileInputRef.current.click()} 
    className="btn btn-secondary text-white mt-4"
>
    Add Another Image
</button>

{/* Hidden File Input for Image Upload */}
<input 
    {...register("productGallery", { required: false })}
    type="file"
    onChange={handleGalleryChange}
    className="hidden" 
    ref={fileInputRef}
/>


                {errors.productGallery && (
                <span className="text-error text-xs">This field is required</span>
                )}
            </div>
            {/* Product Categories */}
            <div className="form-control">
                <label className="label">
                <span className="label-text">
                Product Categories<span className="text-red-500">*</span>
                </span>
                </label>
                <select className="select select-primary  w-full"
                        // onChange={(event) => {
                        //     const selectedId = event.target.value;
                        //     const foundThana = thanas.find(thana => thana.name.toString() === selectedId);
                        //     setSelectedThana(foundThana);
                        // }}  
                        defaultValue={'Select Category'}
                        {...register("productCategory", { required: true })}
                    >
                        <option  disabled>Select Category</option>
                        {categories.sort((a, b) => a.categoryName.localeCompare(b.categoryName)).map(cat=>{
                            return <option key={cat._id}>{cat.categoryName}</option>
                        })}
                    </select>
                {errors.productCategory && (
                <span className="text-error text-xs">This field is required</span>
                )}
            </div>







            {/* Product Variant & Price */}
            <div className="form-control">
                <label className="label"><p className="label-text">
                    Product Variant & Price<span className="text-red-500">*</span></p>
                </label>

                {/* Dynamic Variant Inputs */}
                {variants.map((variant, index) => (
                    <div key={index} className="form-control border border-secondary rounded-lg mb-8 py-3">
                        <div className="flex flex-col md:flex-row gap-5 justify-between">
                        <label className="label">
                            <span className="label-text">Variant {index + 1}</span>
                        </label>
                        <input
                            className="input input-secondary"
                            type="text"
                            placeholder="Size"
                            value={variant.size}
                            onChange={(e) => updateVariant(index, 'size', e.target.value)}
                        />
                        <input
                        className="input input-secondary"
                            type="number"
                            placeholder="Price"
                            value={variant.price}
                            onChange={(e) => updateVariant(index, 'price', e.target.value)}
                        />
                        <button className="btn btn-error w-10 me-5 text-white" type="button" onClick={()=>removeVariant(index)}>X</button>
                        </div>
                    </div>
                ))}
                {/* Add Variant Button */}
                <button className="btn btn-secondary w-40 text-white" type="button" onClick=    {addVariant}>
                        Another Variant
                </button>
                
                {errors.productGallery && (
                <span className="text-error text-xs">This field is required</span>
                )}
            </div>







            {/* Publish Product */}
            <div className="form-control">
    <label className="label">
        <span className="label-text">Publish Product</span>
    </label>
    <input 
        {...register("isPublished", { required: false })} 
        type="checkbox" 
        className="checkbox checkbox-secondary" 
    />
    {errors.isPublished && (
        <span className="text-error text-xs">This field is required</span>
    )}
            </div>
                <div className="form-control mt-6">
                    <button className="btn btn-secondary text-white">Add Product</button>
                </div>
            </div>
        </form>
        </div>
  );
}

export default AddProduct;