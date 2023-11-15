import { useQuery } from "react-query";
import instance from "../src/provider/axios";
import { useContext } from "react";
import { AuthContext } from "../src/provider/AuthProvider";

function useCurrentUser() {
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    isError,
    data: userInfo = null,
    error,
    refetch,
  } = useQuery(["currentUser", user?.email], async () => {
    try {
      const response = await instance.get(`/users/${user.email}`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching user data");
    }
  });
  return { isLoading, isError, userInfo, error, refetch };
}

export default useCurrentUser;
