import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
// import Navbar from "../shared/Navbar/Navbar";
import Navigation from "../shared/Navbar/Navigation";

const Main = () => {
    const location = useLocation()
    const noHaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    
  return (
    <>
      <div className="max-w-[1200px] mx-auto ">
        {noHaderFooter || <Navigation></Navigation>}
        <div >
          <Outlet></Outlet>
        </div>
      </div>
      {noHaderFooter || <Footer></Footer>}
    </>
  );
};

export default Main;
