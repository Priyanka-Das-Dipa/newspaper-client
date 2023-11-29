import { useEffect } from "react";
import { useState } from "react";
import { Chart } from "react-google-charts";

const PieChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allArticles")
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
    colors: ["#4285F4", "#34A853", "#FBBC05"], // Set custom colors for each category
  };
  return (
    <div className="flex">
      <div className="w-1/2">
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={chartOptions}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
      <div className="w-1/2">
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={chartOptions}
        />
      </div>
    </div>
  );
};

export default PieChart;
