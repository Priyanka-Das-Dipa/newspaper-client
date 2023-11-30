import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Home/Home/Plans";

const Subscription = () => {
  const data = useContext(MyContext);
  console.log(data);
  return (
    <div className="min-h-screen">
      <div>
        <img
          className="h-96 w-full"
          src="https://i.ibb.co/RS5GKJx/5205447.jpg"
          alt=""
        />

        <div className="text-center p-10 space-y-5">
          <p className="text-2xl font-serif">Total Amount: ${data} </p>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center text-center"
          >
            <Link to="/payment">Subscription</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
