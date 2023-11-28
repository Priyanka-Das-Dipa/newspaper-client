import { Button } from "flowbite-react";
import useArticles from "../../hooks/useArticles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const UserAllArticle = () => {
  const [articles, loading] = useArticles([]);
  const [searchTerm, setSearchTerm] = useState("");
  const {user} = useContext(AuthContext);

  if (loading) {
    return <p>Loading</p>;
  }
  const filteredArticles = articles.filter((item) => {
    const searchRegex = new RegExp(searchTerm, "i");
    return (
      searchRegex.test(item.article_title) ||
      item.tags.some((tag) => searchRegex.test(tag)) ||
      searchRegex.test(item.publisher_name)
    );
  });

  return (
    <>
      <div className="mt-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by publisher and tags...."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="min-h-screen my-5 space-y-5 grid grid-cols-2 ">
        {filteredArticles.map((item) => (
          <div key={item._id} className="space-y-1 ">
            <div
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={item.image}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.article_title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>

                <div className="flex items-center gap-4">
                  <img className="w-10 h-10 rounded-full" src={user.photoUrl} alt="" />
                  <div className="font-medium dark:text-white">
                    <div>{item.publisher_name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {item.published_date}
                    </div>
                  </div>
                </div>
                <div className="flex justify-evenly gap-2">
                <p className="text-blue-600">{item.tags}</p>
                <p className="text-black uppercase font-semibold">{item.category}</p>
                </div>

                <Link to={`/userAllArticle/${item._id}`}>
                  <div className="flex justify-end">
                    <Button className="w-1/3 ">View Details</Button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserAllArticle;
