import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-toastify";
import FacebookSignIn from "./FacebookSignIn";
import GoogleSignIn from "./GoogleSignIn";

const Login = () => {
  const { user, signIn, sendPasswordReset } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  const { register, handleSubmit, getValues } = useForm();
  const onSubmit = (data) => {
    console.log(data.email, data.password);
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  const handelPasswordReset=()=>{
    const email = getValues('email');
    if (!email) {
      toast.error('Please Provide Your Email');
    }else{
      sendPasswordReset(email);
      toast.success("Email sent, check your inbox.")
      console.log(email);
    }
  }
  if (user) {
    return navigate(from, {replace:true});
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card bg-base-100 w-full lg:w-1/2"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email<span className=" text-red-500">*</span>
                  </span>
                </label>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="youremail@gmail.com"
                  className="input input-bordered input-primary"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Password<span className=" text-red-500">*</span>
                  </span>
                </label>
                <input
                  {...register("password")}
                  type="text"
                  placeholder="password"
                  className="input input-bordered input-primary"
                />
                <label className="label">
                  <span onClick={handelPasswordReset} className="label-text-alt link link-hover">
                    Forgot password?
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="form-control mt-6">
                <Link
                  to="/signup"
                  className=" text-sm underline hover:no-underline"
                >
                  Don&apos;t Have an Account? Please Register.
                </Link>
              </div>
              <div className="divider">OR</div>

          <div className=" flex items-center justify-around gap-10">
            <FacebookSignIn/>
            <GoogleSignIn/>
          </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
