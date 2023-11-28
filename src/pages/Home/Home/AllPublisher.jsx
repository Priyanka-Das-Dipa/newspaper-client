import { useEffect } from "react";
import { useState } from "react";

const AllPublisher = () => {
    const [publisher, setPublisher] = useState();
    useEffect(() =>{
        fetch('http://localhost:5000/publisher')
        .then(res => {
            console.log(res)
        })
    },[])


  return (
    <div>
        <h2 className="text-4xl font-semibold text-center text-balck mb-5">All Our Publisher</h2>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={}
            alt="Publisher image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default AllPublisher;
