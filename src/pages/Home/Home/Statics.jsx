import { useEffect } from "react";
import { useState } from "react";
import Chart from "react-google-charts";

const Statics = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch("https://newspaper-sever-site.vercel.app/allArticles")
      .then((res) => res.json())
      .then((data) => {
        const chartDataArray = [["Category", "Count"]];

        const categoryCount = data.reduce((acc, item) => {
          acc[item.category] = (acc[item.category] || 0) + 1;
          return acc;
        }, {});

        Object.keys(categoryCount).forEach((category) => {
          chartDataArray.push([category, categoryCount[category]]);
        });

        setChartData(chartDataArray);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const chartOptions = {
    colors: ["#4285F4"], // Set custom colors for each category
  };
  return (
    <div className="my-20">
      <div>
        <label className="w-64 mb-3 text-lg font-medium text-gray-900 dark:text-white">
          All The Published Category Articles 
        </label>
      </div>
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default Statics;
