import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

function Campaigns() {
  const {userInfo} = useContext(AuthContext);
  console.log(userInfo)
  // const { user, setUser } = useContext(AuthContext);
  // console.log(user);
  // const fetchData = async () => {
  //   try {
  //     const response = await instance.get(`/users/${user.email}`);
  //     console.log(response.data)
  //     // setUser(response.data)
  //   } catch (error) {
  //     console.error("Error fetching category data:", error);
  //   }
  // };

  // fetchData();
  return <div>Campaigns</div>;
}

export default Campaigns;
