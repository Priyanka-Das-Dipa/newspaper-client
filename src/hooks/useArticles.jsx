import { useEffect, useState } from "react";

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const api = `http://localhost:5000/allArticles?page=${currentPage}&size=${itemsPerPage}`;
    fetch("http://localhost:5000/allArticles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      });
  }, []);

  return [articles, loading];
};

export default useArticles;
