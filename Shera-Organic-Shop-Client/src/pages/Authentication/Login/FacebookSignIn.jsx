import { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
function FacebookSignIn() {
     const {facebookLogin} = useContext(AuthContext);
     const handelFbLogin = ()=>{
        facebookLogin().then((result) => {
             const user = result.user;
             console.log(user);
           }).catch((error) => {
             console.log(error.message)
           });
     }
    return (
        <div onClick={handelFbLogin} disabled className=" btn bg-transparent rounded-full w-12 border-0 p-0 m-0">
            <FaFacebook color="gray" size={40}/>
        </div>
    )
}

export default FacebookSignIn;
