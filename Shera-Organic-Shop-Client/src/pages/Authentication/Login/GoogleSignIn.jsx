import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../provider/AuthProvider";
function GoogleSignIn() {
    const {googleLogin} = useContext(AuthContext);
    const handelGoogleLogin = ()=>{
        googleLogin().then((result) => {
            const user = result.user;
            console.log(user);
          }).catch((error) => {
            console.log(error.message)
          });
    }
   return (
       <div onClick={handelGoogleLogin} className=" btn bg-transparent rounded-full w-12 border-0 p-0 m-0">
            <FcGoogle size={40}/>
       </div>
   )
}

export default GoogleSignIn
