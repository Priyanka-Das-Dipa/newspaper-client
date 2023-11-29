import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserAlt, FaUsers } from "react-icons/fa";
import { PiArticleMediumBold } from "react-icons/pi";
import PieChart from "./PieChart";


const DashDesign = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center text-black mb-5">
        {user?.displayName}
      </h2>
      <div className="flex gap-10 ">
        <div className="max-w-sm p-6 bg-red-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg
            className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <FaUsers></FaUsers>
          </svg>
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Total Users
            </h5>
          </a>
          <p className="mb-3 font-bold text-3xl text-black dark:text-gray-400">
            {stats?.users}
          </p>
        </div>
        <div className="max-w-sm p-6 bg-red-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg
            className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <PiArticleMediumBold></PiArticleMediumBold>
          </svg>
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Total Articles
            </h5>
          </a>
          <p className="mb-3  text-3xl font-bold text-black dark:text-gray-400">
            {stats?.articles}
          </p>
        </div>
        <div className="max-w-sm p-6 bg-red-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg
            className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <FaUserAlt></FaUserAlt>
          </svg>
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Total Publisher
            </h5>
          </a>
          <p className="mb-3 font-normal text-3xl text-black dark:text-gray-400">
            {stats?.totalPublisher}
          </p>
        </div>
      </div>
      <div>
        <PieChart></PieChart>
      </div>
    </div>
  );
};

export default DashDesign;
