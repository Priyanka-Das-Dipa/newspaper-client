import { NavLink, Outlet } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 border p-8">
        <>
          <ul className="menu my-5">
            <li>
              <NavLink to="/dashboard/allArticle">All Article</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allUsers">All Users</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addPublisher">Add Publishers</NavLink>
            </li>
          </ul>
        </>
      </div>
      <div className="flex-1 border p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminHome;
