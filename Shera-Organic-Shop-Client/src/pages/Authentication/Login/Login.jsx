import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
  const { user, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data.email, data.password);
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
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
                  Don't Have an Account? Please Register.
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
