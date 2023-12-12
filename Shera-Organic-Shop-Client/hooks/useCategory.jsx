import {useQuery, useQueryClient, QueryClient, QueryClientProvider} from "react-query";
import instance from "../src/provider/axios";
function useCategory() {
    const { isLoading, refetch, isError, data: categories = [], error } = useQuery(
        {
        queryKey:'categorys',
        queryFn: async ()=>{
            const response = await instance.get('/categories');

            if (response.status < 200 || response.status >= 300) {
                throw new Error('Network response was not ok Rana');
            }
            return response.data;
        }
    })
    return [categories, isLoading, refetch, isError, error]
}

export default useCategory;
