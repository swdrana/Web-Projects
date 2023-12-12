import {useQuery} from "react-query";
import instance from "../src/provider/axios";
function useProducts() {
    const { isLoading, refetch, isError, data: products = [], error } = useQuery(
        {
        queryKey:'products',
        queryFn: async ()=>{
            const response = await instance.get('/products');
            if (response.status < 200 || response.status >= 300) {
                throw new Error('Network response was not ok Rana');
            }
            return response.data;
        }
    })
    return [products, isLoading, refetch, isError, error]
}

export default useProducts;
