import {useQuery, useQueryClient, QueryClient, QueryClientProvider} from "react-query";
function useAllUsers() {
    const { isLoading, refetch, isError, data: categories = [], error } = useQuery(
        {
        queryKey:'users',
        queryFn: async ()=>{
            const response = await fetch(`https://js-shera-orgamic-shop-server.vercel.app/api/users`)
            if (!response.ok) {
                throw new Error('Network response was not ok Rana')
            }
            return response.json()
        }
    })
    return [categories, isLoading, refetch, isError, error]
}

export default useAllUsers;
