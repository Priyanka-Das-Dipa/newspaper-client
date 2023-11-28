import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

const image_hosting_key = import.meta.env.VITE_IMG_BB;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPublishers = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const addItem = {
        article_title: data.article_title,
        category: data.category,
        description: data.description,
        publisher_name: data.publisher_name,
        tags: data.tags,
        image: res.data.data.display_url,
      };
      const addRes = await axiosSecure.post("/allArticles", addItem);
      console.log(addRes.data);
      if (addRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div className="">
      <h2 className="text-3xl font-semibold text-center text-red-400">
        Add Publisher here:
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex items-center  justify-center ">
          <div className="space-y-3 p-10">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Publisher Name
              </label>
              <input
                {...register("publisher_name", { required: true })}
                name="publisher_name"
                type="text"
                id="small-input"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Upload Publisher Image
            </label>
            <input
              {...register("image", { required: true })}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="multiple_files"
              type="file"
              multiple
            ></input>
          </div>
        </div>
        <div className="flex justify-center items-center my-3">
          <button
            type="submit"
            className="text-white   bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Publisher
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPublishers;
