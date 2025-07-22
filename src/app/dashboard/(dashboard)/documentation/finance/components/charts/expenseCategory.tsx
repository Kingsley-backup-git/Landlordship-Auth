"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  const series = [44, 55, 15, 17];
  const options = {
    chart: {
      type: "donut" as const,
      width: 120,
    },
    labels: ["Direct", "Affiliate", "Sponsored", "Overdue"],
    colors: ["#5856D6", "#000000", "#34C759", "#FFCC00"],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
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
    <div className="max-w-[110px]  w-[100%] z-[9999]">
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
