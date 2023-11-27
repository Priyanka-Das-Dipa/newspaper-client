import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../public/images/login.jpg";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import GoogleLogin from "./GoogleLogin";
import useAxiosPublic from "../hooks/useAxiosPublic";
const Register = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, user, handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.first_name, data.img, data.password).then(
      (result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        handleUpdateProfile(data.first_name, data.img).then(() => {
          const userInfo = {
            name: data.first_name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${user?.displayName} is Logged in successfully!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
          navigate(location?.state ? location.state : "/");
        });

        // navigate(location?.state ? location.state : "/");
      }
    );
  };

  return (
    <div>
      <div className=" mx-auto items-center flex ">
        <div className="w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold my-5 flex mx-auto text-red-500 ">
              Register
            </h2>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  {...register("first_name", { required: true })}
                  name="first_name"
                  id="first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  First name
                </label>
                {errors.first_name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  {...register("last_name", { required: true })}
                  name="last_name"
                  id="last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Last name
                </label>
                {errors.last_name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer"
                placeholder=" "
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                {...register("img", { required: true })}
                name="img"
                id="img"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer"
                placeholder=" "
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Image URL
              </label>
              {errors.img && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer"
                placeholder=" "
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>

            <p className="text-md font-normal mb-5">
              Already have an account? Please
              <span className="text-red-500 hover:underline">
                <Link to="/login"> Sign In</Link>
              </span>
            </p>
            <input
              type="submit"
              value="Sign Up"
              className="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-blue-800"
            ></input>
            <GoogleLogin></GoogleLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
