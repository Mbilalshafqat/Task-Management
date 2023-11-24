import { color1 } from "@/compoenets/Colors/Color";
import React from "react";
import "../app/globals.css";

const login = () => {
  return (
    <div
      style={{ backgroundColor: color1 }}
      className={`bg-${color1} w-full h-[100vh] text-white`}
    >
      login
    </div>
  );
};

export default login;
