"use client";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { BsListTask } from "react-icons/bs";
import { MdAddTask } from "react-icons/md";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";

const Sidebar = () => {
  const [togel, setTogel] = useState(false);
  return (
    <div
      className={`${
        togel ? "!w-[60px] duration-300" : "w-[350px] duration-300"
      } bg-[#212022] h-[100vh] sticky top-0`}
    >
      <IoIosArrowBack
        onClick={() => setTogel(!togel)}
        className={`${
          togel ? "rotate-180 duration-300" : "rotate-0 duration-300"
        } absolute top-[50%] right-[-18px] rounded-full p-2 bg-[black] text-white text-[40px] cursor-pointer z-10`}
      />
      <div className="border-b-[1px] border-b-[black] py-4 px-3 text-[28px] text-white font-serif font-bold">
        <span className="text-[#E92129]">Nixxe</span> System
      </div>
      {/* --- menus  */}
      <div className="menus py-4 px-3">
        <h2 className=" text-[21px] text-[gray]">Time Table</h2>
        <Link
          href="#"
          className="flex justify-start duration-300 place-items-center gap-[13px] my-2 py-1 text-white hover:text-[#E92129]"
        >
          {!togel ? (
            <>
              <IoMdTimer className="text-[20px]" />
              <li className="list-none text-[18px]">Attendence</li>
            </>
          ) : (
            <IoMdTimer className="text-[23px] duration-300" />
          )}
        </Link>
        {/* ========================== */}

        <Link
          href="#"
          className="flex justify-start duration-300 place-items-center gap-[13px] my-2 py-1 text-white hover:text-[#E92129]"
        >
          {!togel ? (
            <>
              <BsListTask className="text-[20px]" />
              <li className={`list-none text-[18px]`}>All Task</li>
            </>
          ) : (
            <BsListTask className="text-[23px] duration-300" />
          )}
        </Link>
        <Link
          href="#"
          className="flex justify-start duration-300 place-items-center gap-[13px] my-2 py-1 text-white hover:text-[#E92129]"
        >
          {!togel ? (
            <>
              <MdAddTask className="text-[20px]" />
              <li className="list-none text-[18px]">Completed Task</li>
            </>
          ) : (
            <MdAddTask className="text-[23px] duration-300" />
          )}
        </Link>
        <Link
          href="#"
          className="flex justify-start duration-300 place-items-center gap-[13px] my-2 py-1 text-white hover:text-[#E92129]"
        >
          {!togel ? (
            <>
              <MdOutlineNotificationImportant className="text-[20px]" />
              <li className="list-none text-[18px]">Importend Task</li>
            </>
          ) : (
            <MdOutlineNotificationImportant className="text-[23px] duration-300" />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
