import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../../../public/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const [isAdmin] = useAdmin();
  return (
    <div>
      <Navbar fluid className="bg-slate-300 text-black   py-5">
        <Navbar.Brand href="">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt=" Logo" />
          <span className="self-center  whitespace-nowrap text-xl font-semibold dark:text-white">
            Sports News
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img={user?.photoURL} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm font-bold">
                    {user?.displayName}
                  </span>
                  <span className="block truncate text-sm font-normal">
                    {user.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>
                  <NavLink to="/userProfile">Profile</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link onClick={handleLogOut}>Sign out</Link>
                </Dropdown.Item>
              </Dropdown>
            </>
          ) : (
            <>
              <Navbar.Link>
                <NavLink to="/login">Login</NavLink>
              </Navbar.Link>
            </>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <NavLink to="/">Home</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/addArticle">Add Articles</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/userAllArticle">All Articles</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/subscription">Subscription</NavLink>
          </Navbar.Link>
          {isAdmin ? (
            <Navbar.Link>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </Navbar.Link>
          ) : (
            ""
          )}
          <Navbar.Link>
            <NavLink to="/myArticle">My Articles</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/">Premium Articles</NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
