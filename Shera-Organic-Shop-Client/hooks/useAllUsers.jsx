import {useQuery, useQueryClient, QueryClient, QueryClientProvider} from "react-query";
import instance from "../src/provider/axios";
function useAllUsers() {
    const { isLoading, refetch, isError, data: categories = [], error } = useQuery(
        {
        queryKey:'users',
        queryFn: async ()=>{
            const response = await instance.get('/users'); // Update the endpoint
            if (response.status < 200 || response.status >= 300) {
                throw new Error('Network response was not ok Rana');
            }
            return response.data;
        }
    })
    return [categories, isLoading, refetch, isError, error]
}

export default useAllUsers;
