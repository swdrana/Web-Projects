import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";
import axiosInstance from '../../../provider/axios'
const Signup = () => {
  const navigate = useNavigate();
  const {user, createUser, updateUserName } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data.email, data.password, data.name);
    try {
      const result = await createUser(data.email, data.password);
      await updateUserName(data.name);
  
      const user = result.user;
      console.log(user);
  
      // Now that the user profile is updated, send the user info to the server
      await sendUserInfoToServer(user);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const sendUserInfoToServer = (user) => {
    axiosInstance.post("/users", user)
      .then(response => {
        console.log("User information sent to the server:", response.data);
        // Optionally handle any additional logic after a successful request
        navigate("/"); // Redirect or perform other actions after successful registration
      })
      .catch(error => {
        console.error("Error sending user information:", error);
        // Optionally handle errors or show error messages
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
