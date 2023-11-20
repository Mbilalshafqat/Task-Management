import React from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { TbPlayerRecordFilled } from "react-icons/tb";
import { color1 } from "../Colors/Color";

const Header = () => {
  return (
    <div
      style={{ backgroundColor: color1 }}
      className={`bg-${color1} text-white w-full flex justify-between place-items-center py-4 h-[75px] mb-1 px-3`}
    >
      <p className="text-[22px]">Dashboard</p>
      <div className="flex justify-start place-items-center gap-[11px]">
        <p className="text-[18px]">1:25:44</p>
        <GiCoffeeCup className="text-[29px] bg-[#FFB733] cursor-pointer p-1 rounded-full text-[white]" />
        <TbPlayerRecordFilled className="text-[30px] cursor-pointer p-1 rounded-full bg-[red] text-white" />
      </div>
    </div>
  );
};

export default Header;
