import { Button } from "flowbite-react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AllArticle = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const { count } = useLoaderData();
  const {user} = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  console.log(articles);

  const numOfPage = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numOfPage).keys()];
  useEffect(() => {
    const api = `https://newspaper-sever-site.vercel.app/allArticles?page=${currentPage}&size=${itemsPerPage}`;
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      });
  }, [currentPage, itemsPerPage]);
  if (loading) {
    return <p>Loading</p>;
  }
  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
    console.log(val);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/allArticles/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
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
                <img
                  className="rounded-t-lg w-full h-64"
                  src={item.image}
                  alt=""
                />
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
                  <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                  <div className="font-medium dark:text-white">
                    <div>{item.publisher_name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Date of Publication: {item.publisher_date}
                    </div>
                  </div>
                </div>
                <div className="flex gap-16 mb-5">
                  <p className="text-blue-600">{item.tags}</p>
                  <p className="text-black uppercase font-semibold">
                    {item.category}
                  </p>
                  {/* <p className="text-black uppercase font-semibold">{item.date}</p> */}
                </div>
                <div className="flex gap-2">
                  <Button>Approve</Button>
                  <Button>Decline</Button>
                  <Button onClick={() => handleDelete(item._id)}>Delete</Button>
                  <Button>Premium</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mb-5 gap-2">
        <Button onClick={handlePrevPage}>Prev</Button>
        {pages.map((page, index) => (
          <Button
            className={currentPage === page && "bg-red-500"}
            onClick={() => setCurrentPage(page)}
            key={index}
          >
            {page}
          </Button>
        ))}
        <Button onClick={handleNextPage}>Next</Button>
        <select value={itemsPerPage} onChange={handleItemsPerPage}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default AllArticle;
