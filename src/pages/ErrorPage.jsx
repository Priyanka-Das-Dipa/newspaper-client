import { Button } from "flowbite-react";
import error from "../../public/images/error.jpg"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
        <div className="flex justify-center items-center">
            <img className="w-1/2 " src={error} alt="" />
        </div>
        <div className="text-center justify-center flex">
        <Button className=" bg-red-600 "><Link to="/">Go Home</Link></Button>
        </div>
        
        </>
    );
};

export default ErrorPage;