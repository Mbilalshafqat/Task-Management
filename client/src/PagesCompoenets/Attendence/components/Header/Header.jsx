import React from "react";

const Header = ({ active, setactive }) => {
  return (
    <div className="relative px-[20px] border-b-[1px] border-[gray] flex justify-start place-items-center gap-[17px]">
      <span
        style={{
          left: `${
            active === 1 ? 20 : active === 2 ? 87 : active === 3 ? 154 : 0
          }px`,
        }}
        className={` border-b-[3px] border-[red] h-[3px] w-[50px] absolute bottom-0 duration-100 `}
      ></span>
      <p
        className={`cursor-pointer font-bold
         ${active === 0 ? "" : ""} 
         w-[50px] text-center  py-[12px]`}
        onClick={() => setactive(1)}
      >
        Day
      </p>
      <p
        className={`cursor-pointer font-bold ${
          active === 1 ? "" : ""
        }  w-[50px] text-center  py-[10px]`}
        onClick={() => setactive(2)}
      >
        Week
      </p>
      <p
        className={`cursor-pointer font-bold ${
          active === 2 ? "" : ""
        }  w-[50px] text-center  py-[10px]`}
        onClick={() => setactive(3)}
      >
        Month
      </p>
    </div>
  );
};

export default Header;
