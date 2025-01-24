'use client'
import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  const series = [44, 55, 41, 17]; 
  const options = {
    chart: {
      type: "donut" as const, 
      width: 100, 
    },
    labels: ["series-1", "series-2", "series-3", "series-4"], // Labels for each segment
    legend: {
      show: false, // Remove legends
    },
    dataLabels: {
        enabled: false, // Disable numbers on the chart
      },
      plotOptions: {
        pie: {
          donut: {
            size: "50%", // Adjust the size of the hole for inner padding
            background: "transparent", // Optional: Set the background of the hole
          },
          expandOnClick: false, // Prevent the donut from expanding when clicked
        },
      },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 120,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <div className="max-w-[110px] block mx-auto w-[100%]">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={350}
      />
    </div>
  );
};

export default DonutChart;
