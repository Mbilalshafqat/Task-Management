import Sidebar from "@/compoenets/Layout/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-start place-items-start">
      <Sidebar />
      <div className="w-full bg-black h-[100vh] overflow-auto">
        <p className="text-white">Hello World</p>
      </div>
    </div>
  );
};

export default page;
