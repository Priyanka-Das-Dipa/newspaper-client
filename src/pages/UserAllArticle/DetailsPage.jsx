import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    fetch(`https://newspaper-sever-site.vercel.app/allArticles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetailData(data);
        console.log(data);
      });
  }, [id]);
  return (
    <>
      <div className="flex justify-center items-center h-[70vh]">
        <div className="max-w-sm bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={detailData.image} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {detailData.article_title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {detailData.description}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {detailData.published_date}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {detailData.tags}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
