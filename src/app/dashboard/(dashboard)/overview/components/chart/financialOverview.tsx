"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
const LineChart = () => {
  const series = [
    {
      name: "This Year",
      data: [100, 150, 106, 100, 200, 250, 300],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "line" as const,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    markers: {
      size: 6,
      colors: ["#000"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 8,
      },
    },
    grid: {
      borderColor: "#e7e7e7",
      strokeDashArray: 5,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Months
      labels: {
        style: {
          colors: "#555",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value: number) => `${value / 1000}K`, // Format to 'K'
        style: {
          colors: "#555",
        },
      },
    },
    tooltip: {
      enabled: true,
      x: {
        format: "MMM",
      },
    },
    legend: {
      show: false,
    },
    colors: ["#00AEEF"], // Color for the single line
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={200}
      />
    </div>
  );
};

export default LineChart;
