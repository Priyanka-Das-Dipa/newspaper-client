import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="min-h-screen ">
      <h1 className="text-2xl font-semibold text-black text-center my-5">
        {user.displayName}
      </h1>

      <div className="flex justify-center my-10 items-center">
        <div className="w-full  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center py-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={user?.photoURL}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {user?.displayName}
            </h5>
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              Admin
            </span>
            <div className="flex mt-4 md:mt-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
              >
                Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
