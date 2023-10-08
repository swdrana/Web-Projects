import { useState, useRef } from "react";
import useCategory from "../../../hooks/useCategory";
import { Controller, useForm } from "react-hook-form";
import JoditEditor from 'jodit-react';
function AddProduct() {
    const [categories, isLoading, refetch] = useCategory();
    const [hasVariants, setHasVariants] = useState(false);
    const [variants, setVariants] = useState([{ size: '', price: '' }]);
    const {register,control, handleSubmit, formState: { errors },} = useForm();

    const addVariant = () => {
        setVariants([...variants, { size: '', price: '' }]);
    };
    const updateVariant = (index, field, value) => {
        const newVariants = [...variants];
        newVariants[index][field] = value;
        setVariants(newVariants);
    };
    const onSubmit = async (data) => {
        // Consider including variant data in the submission
        const productData = {
            ...data,
            hasVariants,
            variants
        };
        console.log(data);

        // Implement API submission as per requirement...
    };

  // Function to handle input changes
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
            <div className="form-control">
                <label className="label">
                <span className="label-text">
                Gallery<span className="text-red-500">*</span>
                </span>
                </label>
                <input
                {...register("productGallery", { required: false })}
                type="file"
                placeholder="Image Link"
                className="file-input file-input-bordered file-input-secondary"
                />
                {errors.productGallery && (
                <span className="text-error text-xs">This field is required</span>
                )}
            </div>
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
                    >
                        <option  disabled>Select Category</option>
                        {categories.sort((a, b) => a.categoryName.localeCompare(b.categoryName)).map(cat=>{
                            return <option key={cat._id}>{cat.categoryName}</option>
                        })}
                    </select>
                {errors.productGallery && (
                <span className="text-error text-xs">This field is required</span>
                )}
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text">
                Product Price<span className="text-red-500">*</span>
                </span>
                </label>
                {/* Variant Management */}
                <div className="form-control flex">
                    <label className="label">
                        <span className="label-text">Has Variants?</span>
                    </label>
                    <input
                        type="checkbox"
                        checked={hasVariants}
                        onChange={() => setHasVariants(!hasVariants)}
                    />
                </div>

                {/* Dynamic Variant Inputs */}
                {hasVariants && variants.map((variant, index) => (
                    <div key={index} className="form-control border">
                        <label className="label">
                            <span className="label-text">Variant {index + 1}</span>
                        </label>
                        <div className="flex">
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
                        /></div>
                    </div>
                ))}
                {/* Add Variant Button */}
                {hasVariants && (
                    <button className="btn btn-secondary text-white" type="button" onClick={addVariant}>
                        Add Another Variant
                    </button>
                )}
                {errors.productGallery && (
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
