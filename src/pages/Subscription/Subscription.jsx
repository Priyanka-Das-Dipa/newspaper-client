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
          <div className="">
            <label className="w-64 mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Select Subscription option
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a Package</option>
              <option value="US">1 min $64 USD</option>
              <option value="CA">5 Days $120 USD</option>
              <option value="FR">10 Days $150 USD</option>
            </select>
          </div>
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
