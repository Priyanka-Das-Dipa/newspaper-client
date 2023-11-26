import { NavLink, Outlet } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-red-200 border p-8">
        <>
          <ul className="menu my-5 text-xl font-semibold space-y-4 ">
            <li className="hover:underline">
              <NavLink to="/dashboard/allArticle">All Article</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/dashboard/allUsers">All Users</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/dashboard/addPublisher">Add Publishers</NavLink>
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
