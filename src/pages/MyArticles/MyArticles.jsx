import { Button } from "flowbite-react";
import useArticles from "../../hooks/useArticles";

const MyArticles = () => {
  const [articles, loading] = useArticles([]);
  console.log(articles);

  if (loading) {
    return <p>Loading</p>;
  }

  if (!Array.isArray(articles)) {
    // Handle the case where articles is not an array
    return <p>Error: Articles is not an array</p>;
  }

  return (
    <div className="min-h-screen">
      <h2 className="text-4xl my-10 font-semibold text-center text-red-400 mb-5">
        My Articles
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Serial No.
              </th>
              <th scope="col" className="px-6 py-3">
                Article Title
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {articles?.map((item, index) => (
              <tr
                key={item._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.article_title}
                </th>
                <td className="px-6 py-4">
                  <Button>Details</Button>
                </td>
                <td className="px-6 py-4">
                  <Button>Update</Button>
                </td>
                <td className="px-6 py-4">
                  <Button>Delete</Button>
                </td>
                <td className="px-6 py-4"></td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default MyArticles;
