import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import logo from "../../../public/images/logo.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar fluid rounded className="bg-red-200 py-5">
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
                  <Avatar alt="User settings" img={user?.imageUrl} rounded />
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
                  <NavLink to="/">Profile</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/">Dashboard</NavLink>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Button onClick={handleLogOut}>Sign out</Button>
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
          {/* <Navbar.Toggle /> */}
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <NavLink to="/">Home</NavLink>
          </Navbar.Link>

          <Navbar.Link>
            <NavLink to="/">Add Articles</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/">All Articles</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/">Subscription</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/">Dashboard</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/">My Articles</NavLink>
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
