import { useEffect, useState } from "react";

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const api = `https://newspaper-sever-site.vercel.app/allArticles?page=${currentPage}&size=${itemsPerPage}`;
    fetch("https://newspaper-sever-site.vercel.app/allArticles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      });
  }, []);

  return [articles, loading];
};

export default useArticles;
