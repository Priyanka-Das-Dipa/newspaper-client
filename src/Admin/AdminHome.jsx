import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser, FaUsers } from "react-icons/fa";
import { PiArticle, PiArticleFill, PiSubtractBold } from "react-icons/pi";

const AdminHome = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-red-200 border p-8">
        <>
          <ul className="menu my-5 mb-10 text-xl font-semibold space-y-4 ">
            <li className="hover:underline">
              <NavLink to="/dashboard" className="flex items-center gap-2">
                <FaHome></FaHome> Admin Home
              </NavLink>
            </li>
            <li className="hover:underline">
              <NavLink
                to="/dashboard/allArticle"
                className="flex items-center gap-2"
              >
                <PiArticle></PiArticle>
                All Article
              </NavLink>
            </li>
            <li className="hover:underline">
              <NavLink
                to="/dashboard/allUsers"
                className="flex items-center gap-2"
              >
                <FaUsers></FaUsers>
                All Users
              </NavLink>
            </li>
            <li className="hover:underline">
              <NavLink
                to="/dashboard/addPublisher"
                className="flex items-center gap-2"
              >
                <FaUser></FaUser>
                Add Publishers
              </NavLink>
            </li>
          </ul>

          <ul className="text-xl space-y-3 font-medium  text-red-700 ">
            <li>
              <NavLink className="flex items-center gap-2" to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-2" to="/addArticle">
                <PiArticle></PiArticle> Add Articles
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-2" to="/userAllArticle">
                <PiArticleFill></PiArticleFill> All Articles
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-2" to="/">
                <PiSubtractBold></PiSubtractBold>
                Subscription
              </NavLink>
            </li>
          </ul>
        </>
      </div>

      <div className="flex-1  border p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminHome;
