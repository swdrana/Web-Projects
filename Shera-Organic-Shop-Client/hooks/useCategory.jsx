import {useQuery, useQueryClient, QueryClient, QueryClientProvider} from "react-query";
function useCategory() {
    const { isLoading, refetch, isError, data: categories = [], error } = useQuery(
        {
        queryKey:'categorys',
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:3000/api/categories`)
            if (!response.ok) {
                throw new Error('Network response was not ok Rana')
            }
            return response.json()
        }
    })
    return [categories, isLoading, refetch, isError, error]
}

export default useCategory;
