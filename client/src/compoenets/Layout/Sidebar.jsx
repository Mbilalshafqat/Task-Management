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
import { MdOutlineAccountCircle } from "react-icons/md";
import Imgae from "next/image";
import NixxeLogo from "../../Assests/NixxeSolutionPNG.png";

const Sidebar = ({ active, setactive }) => {
  const [togel, setTogel] = useState(false);
  return (
    <div
      className={`${
        togel
          ? "!w-[60px] duration-300"
          : "w-[350px] duration-300 overflow-hidden"
      } h-[100vh] sticky top-0`}
      style={{ backgroundColor: color1 }}
    >
      <p
        style={{
          backgroundColor: color2,
        }}
        className="cursor-pointer absolute top-[47%] right-[-20px] rounded-full z-20 p-3"
        onClick={() => setTogel(!togel)}
      >
        <IoIosArrowBack
          onClick={() => setTogel(!togel)}
          style={{ color: color3, backgroundColor: color2 }}
          className={`rounded-full  cursor-pointer ${
            togel
              ? "rotate-180 duration-300  text-[26px]"
              : "rotate-0 duration-300  text-[26px]"
          }   `}
        />
      </p>
      <div className="border-b-[1px]  border-b-[black] py-4 pl-3 text-[28px] text-white font-serif font-bold">
        {togel ? (
          <p
            onClick={() => setactive(0)}
            style={{
              padding: "1px",
            }}
            className=" bg-black w-[45px] cursor-pointer text-[#E92129] ml-[-6px]   flex justify-center place-items-center rounded-full"
          >
            N
          </p>
        ) : (
          // <p className="cursor-pointer" onClick={() => setactive(0)}>
          //   <span className="text-[#E92129]">Nixxe</span> System
          // </p>
          <Imgae
            onClick={() => setactive(0)}
            className="ml-2 cursor-pointer"
            src={NixxeLogo}
            width={130}
            height={100}
            alt=""
          />
        )}
      </div>
      {/* --- menus  */}
      <div className="menus py-4 pl-3">
        {!togel && (
          <h2
            className={`${
              togel ? "text-[0px]" : "text-[22px]"
            } duration-300  font-bold text-[gray] font-serif`}
          >
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
              <li
                className={`list-none ${
                  togel ? "text-[0px]" : "text-[18px]"
                } duration-300 w-[100%]`}
              >
                Attendence
              </li>
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
              <li
                className={`list-none ${
                  togel ? "text-[0px]" : "text-[18px]"
                } duration-300 w-[100%]`}
              >
                All Task
              </li>
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
              <li
                className={`list-none ${
                  togel ? "text-[0px]" : "text-[18px]"
                } duration-300 w-[100%]`}
              >
                Completed Task
              </li>
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
              <li
                className={`list-none ${
                  togel ? "text-[0px]" : "text-[18px]"
                } duration-300 w-[100%]`}
              >
                Important Task
              </li>
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
              <li
                className={`list-none ${
                  togel ? "text-[0px]" : "text-[18px]"
                } duration-300 w-[100%]`}
              >
                Incomplete Task
              </li>
            </>
          ) : (
            <MdIncompleteCircle className="text-[23px] cursor-pointer" />
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
                <li
                  className={`list-none ${
                    togel ? "text-[0px]" : "text-[18px]"
                  } duration-300 w-[100%]`}
                >
                  Name of Team Member
                </li>
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
          {/* <Link
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
          </Link> */}
          <Link
            href="/login"
            className={`flex justify-start  place-items-center gap-[13px] my-2 py-1 ${
              togel ? "px-1 my-3" : "px-3"
            } text-white hover:text-[#E92129]`}
          >
            {!togel ? (
              <>
                <MdOutlineAccountCircle className="text-[23px] cursor-pointer" />

                <li className="list-none text-[18px]">Login / Signup</li>
              </>
            ) : (
              <MdOutlineAccountCircle className="ml-2 text-[23px] cursor-pointer" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
