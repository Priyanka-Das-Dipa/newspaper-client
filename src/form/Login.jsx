import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../public/images/login.jpg";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);

  // const from = location.state?.from?.pathname || "/";
  // console.log("state in the location login page", location.state);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    console.log(email, password, captcha);

    signIn(email, password).then((result) => {
      const user = result.user;
      navigate(location?.state ? location.state : "/");
      console.log(user);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: `${user?.displayName} is Logged in successfully!`,
        showConfirmButton: false,
        timer: 1500,
      });
      // navigate(from, { replace: true });
    });
  };

  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  

  return (
    <div className=" mx-auto items-center flex ">
      <div className="w-1/2">
        <img src={login} alt="" />
      </div>

      <div className="w-1/2">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold my-5 flex mx-auto text-red-500 ">
            Login
          </h2>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <LoadCanvasTemplate />
            <input
              type="text"
              onBlur={handleCaptcha}
              name="captcha"
              id="captcha"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer"
              placeholder="Enter the Captcha"
              required
            />
          </div>

          <p className="text-md font-normal mb-5">
            Do not have an account? Please
            <span className="text-red-500 hover:underline">
              <Link to="/register"> Sign Up</Link>
            </span>
          </p>
          <Button
            type="submit"
            disabled={disabled}
            className=" text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-blue-800"
          >
            Login
          </Button>
          <GoogleLogin></GoogleLogin>
        </form>
      </div>
    </div>
  );
};

export default Login;
