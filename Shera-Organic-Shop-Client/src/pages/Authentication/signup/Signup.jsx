import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const {user, createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.email, data.password);
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  if (user) {
    return navigate("/");
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center lg:text-left  w-full lg:w-1/2">
            <h1 className="text-5xl font-bold">Register now!</h1>
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
                    Full Name<span className=" text-red-500">*</span>
                  </span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="your name"
                  className="input input-bordered input-secondary"
                />
                {errors.name && (
                  <span className=" text-error text-xs">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+8801220000000"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email<span className=" text-red-500">*</span>
                  </span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="youremail@gmail.com"
                  className="input input-bordered input-secondary"
                />
                {errors.email && (
                  <span className=" text-error text-xs">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Password<span className=" text-red-500">*</span>
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  type="text"
                  placeholder="password"
                  className="input input-bordered input-secondary"
                />
                {errors.password?.type === "required" && (
                  <span className=" text-error text-xs">
                    This field is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className=" text-error text-xs">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className=" text-error text-xs">
                    Password must be less then 20 characters
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary text-white">
                  Create Account
                </button>
              </div>
              <div className="form-control mt-6">
                <Link
                  to="/login"
                  className=" text-sm underline hover:no-underline"
                >
                  Have an Account? Please Login.
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
