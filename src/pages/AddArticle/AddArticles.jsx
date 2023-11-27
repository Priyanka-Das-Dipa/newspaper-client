import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const image_hosting_key = import.meta.env.VITE_IMG_BB;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddArticles = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = {image : data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type' : 'multipart/form-data'
      }
    });
    if(res.data.success){
      const addItem = {
        article_title : data.article_title,
        category : data.category,
        description: data.description,
        publisher_name : data.publisher_name,
        tags : data.tags,
        image: res.data.data.display_url
      }
      const addRes = await axiosSecure.post('/allArticles', addItem);
      console.log(addRes.data)
      if(addRes.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log('with image url',res.data)
  };

  return (
    <div className="min-h-screen">
      <h2 className="text-5xl font-medium text-center my-5 text-red-500">
        Add Article
      </h2>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className=" p-10">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title
              </label>
              <input
                {...register("article_title", { required: true })}
                type="text"
                name="article_title"
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Publisher Name
              </label>
              <input
                {...register("publisher_name", { required: true })}
                type="text"
                id=""
                name="publisher_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Publisher Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tags
              </label>
              <input
                {...register("tags", { required: true })}
                type="text"
                name="tags"
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="#good news"
                required
              />
            </div>

            <div className="">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <span className="label-text">Category</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled value="default">
                  Select a news category
                </option>
                <option value="publicationA">Publication A</option>
                <option value="publicationB">Publication B</option>
                <option value="publicationC">Publication C</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Image File
              </label>
              <input
                {...register("image", { required: true })}
                className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="small_size"
                type="file"
              ></input>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
            {...register("description", { required: true })}
            name="description"
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write Description"
            ></textarea>
          </div>

          <div className="flex justify-center items-center my-3">
            <button
              type="submit"
              className="text-white   bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArticles;
