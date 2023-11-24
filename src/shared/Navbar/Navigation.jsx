import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../../../public/images/logo.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
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
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm font-bold">Bonnie Green</span>
              <span className="block truncate text-sm font-normal">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <NavLink to="/">Profile</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/">Dashboard</NavLink>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
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
          <Navbar.Link>
            <NavLink to="/login">Login</NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
