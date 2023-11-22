import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Content/Hero";
import DayChart from "@/compoenets/Charts/DayBarChart/DayChart";
import WeekBarChat from "@/compoenets/Charts/WeekBarChart/WeekBarChat";
import MonthlyBarChat from "@/compoenets/Charts/MonthBarChart/MonthlyBarChat";

const Index = () => {
  const [active, setActive] = useState(1);
  const [activeChart, setActiveChart] = useState(0);
  return (
    <div className="">
      <Header
        active={active}
        setactive={setActive}
        setActivechart={setActiveChart}
      />
      <Hero />
      <div className="w-full h-auto my-[20px] px-3 py-2">
        {active === 1 && <DayChart />}
        {active === 2 && <WeekBarChat />}
        {active === 3 && <MonthlyBarChat />}
      </div>
    </div>
  );
};

export default Index;
