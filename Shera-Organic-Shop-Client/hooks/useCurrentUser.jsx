import { useQuery } from "react-query";
import instance from "../src/provider/axios";
import { useContext } from "react";
import { AuthContext } from "../src/provider/AuthProvider";

function useCurrentUser() {
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    isError,
    data: userInfo,
    error,
    refetch,
  } = useQuery(["currentUser", user?.email], async () => {
    try {
      if (!user) {
        return {}
      }
      const response = await instance.get(`/users/${user.email}`);

      // Assuming your API returns an error status code for unsuccessful requests
      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return response.data; // Assuming your API response has a 'data' field
    } catch (error) {
      throw new Error("Error fetching user data: " + error.message);
    }
  });

  return { isLoading, isError, userInfo, error, refetch };
}

export default useCurrentUser;