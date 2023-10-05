import useCategory from "../../../hooks/useCategory"

function AddProduct() {
    const [categories, isLoading, refetch] = useCategory();
    console.log(categories)
    return (
        <div>
            Add Product
        </div>
    )
}

export default AddProduct
