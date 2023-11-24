import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
// import Navbar from "../shared/Navbar/Navbar";
import Navigation from "../shared/Navbar/Navigation";


const Main = () => {
    return (
        <div className="max-w-[1200px] mx-auto ">
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;