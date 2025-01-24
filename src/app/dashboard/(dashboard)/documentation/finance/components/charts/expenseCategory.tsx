'use client'
import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  const series = [44, 55, 41, 17]; 
  const options = {
    chart: {
      type: "donut" as const, 
      width: 120, 
    },
    labels: ["series-1", "series-2", "series-3", "series-4"], 
    legend: {
      show: false, 
    },
    dataLabels: {
        enabled: false, 
      },
      plotOptions: {
        pie: {
          donut: {
            size: "50%",
            background: "transparent", 
          },
          expandOnClick: false, 
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
    <div className="max-w-[110px]  w-[100%]">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={200}
      />
    </div>
  );
};

export default DonutChart;