import React, { useState } from "react";
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

  const [timer, setTimer] = useState(false);

  const timerstartfunction = () => {
    setTimer(!timer);
    if (timer === false) {
      start();
    } else {
      pause();
    }
  };

  return (
    <div
      style={{ backgroundColor: color1 }}
      className={`bg-${color1} z-50 text-white w-full flex justify-between place-items-center sticky top-0 py-4 h-[87px] mb-1 px-3`}
    >
      <p className="text-[22px]">Dashboard</p>
      <div className="flex justify-start place-items-center gap-[11px]">
        <p className="text-[18px]">
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </p>
        <GiCoffeeCup className="text-[29px] bg-[#FFB733] cursor-pointer p-1 rounded-full text-[white]" />
        <TbPlayerRecordFilled
          onClick={timerstartfunction}
          className="text-[30px] cursor-pointer p-1 rounded-full bg-[red] text-white"
        />
      </div>
    </div>
  );
};

export default Header;
