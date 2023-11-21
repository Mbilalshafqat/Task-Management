"use client";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { BsListTask } from "react-icons/bs";
import { MdAddTask } from "react-icons/md";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { color1, color2, color3 } from "../Colors/Color";
import { MdIncompleteCircle } from "react-icons/md";

const Sidebar = ({ active, setactive }) => {
  const [togel, setTogel] = useState(false);
  return (
    <div
      className={`${
        togel ? "!w-[60px] duration-200" : "w-[350px] duration-200"
      } h-[100vh] sticky top-0`}
      style={{ backgroundColor: color1 }}
    >
      <IoIosArrowBack
        onClick={() => setTogel(!togel)}
        style={{ color: color3 }}
        className={`${
          togel ? "rotate-180 duration-300" : "rotate-0 duration-300"
        } absolute top-[50%] right-[-22px] rounded-full p-2 bg-[black]  text-[40px] cursor-pointer z-10`}
      />
      <div className="border-b-[1px] border-b-[black] py-4 pl-3 text-[28px] text-white font-serif font-bold">
        {togel ? (
          <p className="bg-black w-[30px] text-[#E92129] !p-2 h-[30px] flex justify-center place-items-center rounded-full">
            N
          </p>
        ) : (
          <>
            <span className="text-[#E92129]">Nixxe</span> System
          </>
        )}
      </div>
      {/* --- menus  */}
      <div className="menus py-4 pl-3">
        {!togel && (
          <h2 className=" text-[22px] font-bold text-[gray] font-serif">
            Time Table
          </h2>
        )}
        <Link
          href="#"
          className={`flex justify-start  place-items-center gap-[13px] my-2 py-1 ${
            togel ? "px-1 my-3" : "px-3"
          } text-white hover:text-[#E92129] ${
            active === 0 ? "!text-[#E92129]" : ""
          }`}
          onClick={() => setactive(0)}
        >
          {!togel ? (
            <>
              <IoMdTimer className="text-[20px]" />
              <li className="list-none text-[18px]">Attendence</li>
            </>
          ) : (
            <IoMdTimer className="text-[23px]" />
          )}
        </Link>
        {/* ========================== */}
        {!togel && (
          <h2 className=" text-[22px] font-bold text-[gray] font-serif">
            Task Management
          </h2>
        )}
        <Link
          href="#"
          className={`flex justify-start  place-items-center gap-[13px] my-2 py-1 ${
            togel ? "px-1 my-3" : "px-3"
          } text-white hover:text-[#E92129] ${
            active === 1 ? "!text-[#E92129]" : ""
          }`}
          onClick={() => setactive(1)}
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
          className={`flex justify-start  place-items-center gap-[13px] my-2 py-1 ${
            togel ? "px-1 my-3" : "px-3"
          } text-white hover:text-[#E92129] ${
            active === 2 ? "!text-[#E92129]" : ""
          }`}
          onClick={() => setactive(2)}
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
          className={`flex justify-start  place-items-center gap-[13px] my-2 py-1 ${
            togel ? "px-1 my-3" : "px-3"
          } text-white hover:text-[#E92129] ${
            active === 3 ? "!text-[#E92129]" : ""
          }`}
          onClick={() => setactive(3)}
        >
          {!togel ? (
            <>
              <MdOutlineNotificationImportant className="text-[20px]" />
              <li className="list-none text-[18px]">Important Task</li>
            </>
          ) : (
            <MdOutlineNotificationImportant className="text-[23px]" />
          )}
        </Link>
        <Link
          href="#"
          className={`flex justify-start  place-items-center gap-[13px] my-2 py-1 ${
            togel ? "px-1 my-3" : "px-3"
          } text-white hover:text-[#E92129] ${
            active === 4 ? "!text-[#E92129]" : ""
          }`}
          onClick={() => setactive(4)}
        >
          {!togel ? (
            <>
              <MdIncompleteCircle className="text-[20px]" />
              <li className="list-none text-[18px]">Incomplete Task</li>
            </>
          ) : (
            <MdIncompleteCircle className="text-[23px]" />
          )}
        </Link>
        {/* ===================  */}
        <div className="h-[300px] overflow-auto">
          {!togel && (
            <h2 className=" text-[22px] font-bold text-[gray] font-serif">
              Team
            </h2>
          )}
          <Link
            href="#"
            className={`flex justify-start  place-items-center gap-[13px] my-2 py-1 ${
              togel ? "px-1 my-3" : "px-3"
            } text-white hover:text-[#E92129]`}
          >
            {!togel ? (
              <>
                <p className="bg-black w-[30px] h-[30px] flex justify-center place-items-center p-1 rounded-full">
                  U
                </p>
                <li className="list-none text-[18px]">Name of Team Member</li>
              </>
            ) : (
              <p className="bg-black w-[30px] h-[30px] flex justify-center place-items-center p-1 rounded-full">
                U
              </p>
            )}
          </Link>
        </div>
        {/* ======= login user  */}
        <div className="border-t-[1px] border-[gray] flex justify-start place-items-center absolute left-0 bottom-0 w-full">
          <Link
            href="#"
            className={`flex justify-start  place-items-center gap-[13px] my-2 py-1 ${
              togel ? "px-1 my-3" : "px-3"
            } text-white hover:text-[#E92129]`}
          >
            {!togel ? (
              <>
                <p className="bg-black w-[30px] h-[30px] flex justify-center place-items-center p-1 rounded-full">
                  U
                </p>
                <li className="list-none text-[18px]">Login User Name</li>
              </>
            ) : (
              <p className="bg-black w-[30px] h-[30px] flex justify-center place-items-center p-1 rounded-full">
                U
              </p>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
