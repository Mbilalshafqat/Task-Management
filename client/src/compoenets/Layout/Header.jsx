import React from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { TbPlayerRecordFilled } from "react-icons/tb";
import { color1 } from "../Colors/Color";
import { useStopwatch } from "react-timer-hook";

const Header = () => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });
  return (
    <div
      style={{ backgroundColor: color1 }}
      className={`bg-${color1} text-white w-full flex justify-between place-items-center py-4 h-[75px] mb-1 px-3`}
    >
      <p className="text-[22px]">Dashboard</p>
      <div className="flex justify-start place-items-center gap-[11px]">
        <p className="text-[18px]">
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </p>
        <GiCoffeeCup className="text-[29px] bg-[#FFB733] cursor-pointer p-1 rounded-full text-[white]" />
        <TbPlayerRecordFilled
          onClick={start}
          className="text-[30px] cursor-pointer p-1 rounded-full bg-[red] text-white"
        />
      </div>
    </div>
  );
};

export default Header;
