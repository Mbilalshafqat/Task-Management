"use client";
import Index from "@/PagesCompoenets/Attendence/Index";
import AllTask from "@/PagesCompoenets/Task/AllTask/AllTask";
import CompletedTasks from "@/PagesCompoenets/Task/CompletedTask/CompletedTasks";
import IncompletedTask from "@/PagesCompoenets/Task/Incompleted/IncompletedTask";
import ImportantTask from "@/PagesCompoenets/Task/importentTask/ImportantTask";
import Header from "@/compoenets/Layout/Header";
import Sidebar from "@/compoenets/Layout/Sidebar";
import React, { useState } from "react";

const Page = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex justify-start place-items-start">
      <Sidebar active={active} setactive={setActive} />
      <div className="w-full bg-black h-[100vh] overflow-auto text-white">
        <Header />
        {active === 0 && <Index />}
        {active === 1 && <AllTask />}
        {active === 2 && <CompletedTasks />}
        {active === 3 && <ImportantTask />}
        {active === 4 && <IncompletedTask />}
      </div>
    </div>
  );
};

export default Page;
