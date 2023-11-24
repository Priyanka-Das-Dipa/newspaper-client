import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const GoogleLogin = () => {
  const { user, googleLogin } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${user?.displayName} is Logged in successfully!`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.message)
      });
  };
  return (
    <div>
      <div className="divider text-black text-center my-5">continue with</div>
      <div className="flex justify-around">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn text-4xl text-orange-400 btn-circle"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
