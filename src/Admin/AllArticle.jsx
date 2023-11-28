import { Button } from "flowbite-react";
import useArticles from "../hooks/useArticles";

const AllArticle = () => {
  const [articles, loading] = useArticles([]);
  console.log(articles);

  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center text-red-400 mb-5">
        All The Articles
      </h2>
      <div className="grid grid-cols-2 gap-5">
        {articles.map((item) => (
          <div key={item._id}>
            <div className="max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg w-full h-64" src={item.image} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.article_title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
                <div className="flex items-center gap-4">
                  <img className="w-10 h-10 rounded-full" src="" alt="" />
                  <div className="font-medium dark:text-white">
                    <div>{item.publisher_name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                     Date of Publication: {item.publisher_date}
                    </div>
                  </div>
                </div>
                <div className="flex gap-16 mb-5">
                <p className="text-blue-600">{item.tags}</p>
                <p className="text-black uppercase font-semibold">{item.category}</p>
                {/* <p className="text-black uppercase font-semibold">{item.date}</p> */}
                </div>
                <div className="flex gap-2">
                  <Button className="btn btn-sm">Approve</Button>
                  <Button>Decline</Button>
                  <Button>Delete</Button>
                  <Button>Premium</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArticle;
