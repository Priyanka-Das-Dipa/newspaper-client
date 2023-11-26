const AddPublishers = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-semibold text-center text-red-400">
        Add Publisher here:
      </h2>
      <div className=" flex items-center  justify-center ">
        <div className="space-y-3 p-10">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Publisher Name
            </label>
            <input
              type="text"
              id="small-input"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Upload Publisher Image
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="multiple_files"
            type="file"
            multiple
          ></input>
        </div>
      </div>
    </div>
  );
};

export default AddPublishers;
