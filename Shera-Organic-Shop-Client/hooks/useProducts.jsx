import {useQuery} from "react-query";
function useProducts() {
    const { isLoading, refetch, isError, data: products = [], error } = useQuery(
        {
        queryKey:'products',
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:3000/api/products`)
            if (!response.ok) {
                throw new Error('Network response was not ok Rana')
            }
            return response.json()
        }
    })
    return [products, isLoading, refetch, isError, error]
}

export default useProducts;
