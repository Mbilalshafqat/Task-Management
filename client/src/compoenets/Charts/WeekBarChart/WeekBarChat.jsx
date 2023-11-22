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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const WeekBarChat = () => {
  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
  const generateRandomData = () => {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 10) + 1);
  };

  // Generate labels with the current week's days along with the month name and date
  const generateLabels = () => {
    const currentDate = new Date("2023-11-20");
    const currentDayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)

    // Calculate the start date of the current week (Sunday is the first day of the week)
    const weekStartDate = new Date("2023-11-20");
    weekStartDate.setDate(currentDate.getDate() - currentDayOfWeek);

    const labels = [];

    for (let i = 0; i < 7; i++) {
      const dayOfWeek = daysOfWeek[i];
      const formattedDate = new Date(weekStartDate);
      formattedDate.setDate(weekStartDate.getDate() + i);
      const formattedDateString = formattedDate.toLocaleString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      });
      labels.push(`${dayOfWeek} - ${formattedDateString}`);
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
      <div className=" bg-[#212022] w-full py-3 px-3 flex justify-between place-items-center ">
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

export default WeekBarChat;