import {useQuery} from "react-query";
function useProducts() {
    const { isLoading, refetch, isError, data: products = [], error } = useQuery(
        {
        queryKey:'products',
        queryFn: async ()=>{
            const response = await fetch('https://js-shera-orgamic-shop-server.vercel.app/api/products')
            if (!response.ok) {
                throw new Error('Network response was not ok Rana')
            }
            return response.json()
        }
    })
    return [products, isLoading, refetch, isError, error]
}

export default useProducts;
