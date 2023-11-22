"use client";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { color1 } from "@/compoenets/Colors/Color";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const MonthlyBarChat = () => {
  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
  const generateRandomData = () => {
    return Array.from({ length: 30 }, () => Math.floor(Math.random() * 10) + 1);
  };

  // Generate labels with the current month's days along with the month name and date
  const generateLabels = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentMonth + 1,
      0
    ).getDate();

    const labels = [];

    for (let i = 0; i < daysInMonth; i++) {
      const formattedDate = new Date(
        currentDate.getFullYear(),
        currentMonth,
        i + 1
      );
      const formattedDateString = formattedDate
        .toLocaleString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
        })
        ?.slice(0, 1);
      labels.push(formattedDateString);
    }

    return labels;
  };

  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: "Worked Hours",
        data: generateRandomData(),
        backgroundColor: "#51DB2B",
      },
      {
        label: "Break Hours",
        data: generateRandomData(),
        backgroundColor: "#FFCA28",
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        // text: "Day TRACKED HOURS",
        color: "#FFFFFF",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "#FFFFFF", // Set the x-axis label color to white
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: "#FFFFFF", // Set the x-axis label color to white
        },
      },
    },

    tooltips: {
      bodyColor: "#FFFFFF", // Set the tooltip background color to white
      titleColor: "#FFFFFF", // Set the tooltip title color to white
      bodyFontColor: "#FFFFFF", // Set the tooltip body text color to white
    },
  };
  return (
    <div className="h-[400px]  w-[100%]   !text-white ">
      <div
        style={{ backgroundColor: color1 }}
        className=" w-full py-3 px-3 flex justify-between place-items-center "
      >
        <h2 className="text-[white]">TRACKED HOURS</h2>
        <div className="flex justify-start place-items-center gap-[20px]">
          <div className="flex justify-start place-items-center gap-[8px] border-[1px] border-[gray] px-2 py-[2px] rounded-sm">
            <span className="w-[18px] h-[18px] bg-[#51DB2B] flex rounded-md"></span>
            <p>15h 47m</p>
            <p className="text-[gray]">WORKED HOURS</p>
          </div>
          <div className="flex justify-start place-items-center gap-[8px] border-[1px] border-[gray] px-2 py-[2px] rounded-sm">
            <span className="w-[18px] h-[18px] bg-[#FFCA28] flex rounded-md"></span>
            <p>47m</p>
            <p className="text-[gray]">BREAKS</p>
          </div>
        </div>
      </div>
      <div className="!w-[100%]  h-[100%] !overflow-x-hidden">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default MonthlyBarChat;
