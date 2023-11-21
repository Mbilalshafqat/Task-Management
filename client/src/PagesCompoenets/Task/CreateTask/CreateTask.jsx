import { color1 } from "@/compoenets/Colors/Color";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

const CreateTask = ({ show, setshow }) => {
  const users = [
    {
      id: 1,
      name: "Umar",
    },
    {
      id: 2,
      name: "Ali",
    },
    {
      id: 3,
      name: "Arsalan",
    },
    {
      id: 4,
      name: "Hamza",
    },
    {
      id: 6,
      name: "Ahmad",
    },
    {
      id: 6,
      name: "Mamon",
    },
    {
      id: 6,
      name: "Bilal",
    },
    {
      id: 6,
      name: "Talha",
    },
    {
      id: 6,
      name: "Kumail",
    },
  ];
  const [usersdata, setuserdata] = useState([]);
  const [showusersList, setShowUsersList] = useState(false);
  const [points, setPoints] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [username, setusername] = useState("");
  const [mainpoint, setmainpoint] = useState("");

  const slecttheuser = (e) => {
    setusername(e.target.value);
    setShowUsersList(true);
    const filteredUsers = usersdata?.filter((item) =>
      item.name.toLowerCase().includes(username.toLowerCase())
    );
    setuserdata(filteredUsers);
  };

  useEffect(() => {
    if (username === "") {
      setuserdata(users);
    }
  }, [username]);

  const addnewpoint = () => {
    const newpoint = [...points, mainpoint];
    setPoints(newpoint);
    setmainpoint("");
  };

  return (
    <div
      className={`fixed ${
        show ? "translate-y-[0]" : "translate-y-[-100%]"
      } duration-100 z-50 left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-70`}
    >
      <div
        style={{ backgroundColor: color1 }}
        className="h-full  relative w-full  overflow-y-auto -2xl bg-white"
      >
        <div className="w-full">
          <div className="  m-8 my-20 max-w-[650px] mx-auto">
            <RxCross1
              className="absolute top-[20px] right-[20px] text-[25px] cursor-pointer"
              onClick={() => setshow(false)}
            />
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-extrabold">Create Task</h1>
              <div>
                <label htmlFor="title" className="block my-1">
                  Title
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Your Title."
                  className="mb-1 w-full  bg-transparent border-[1px] px-2 py-2 rounded-sm outline-none"
                />
              </div>
              <div>
                <label htmlFor="title" className="block my-1">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  rows={5}
                  type="text"
                  placeholder="Enter Your Description."
                  className="mb-1 w-full bg-transparent border-[1px] px-2 py-1 rounded-sm outline-none"
                  style={{ whiteSpace: "pre-wrap" }}
                />
              </div>
              <div>
                <label htmlFor="title" className="block my-1">
                  Select User
                </label>
                <input
                  value={username}
                  onChange={slecttheuser}
                  type="text"
                  placeholder="Enter User Name."
                  className="mb-1 w-full bg-transparent border-[1px] px-2 py-2 rounded-sm outline-none"
                />
                {/* ---- show list of users  */}
                {showusersList && (
                  <div className="w-full max-h-[230px] p-1 mt-[-3px] z-10 overflow-auto bg-black rounded-sm">
                    {usersdata.length > 0 ? (
                      usersdata?.map((item, index) => {
                        return (
                          <>
                            <div
                              className="flex cursor-pointer hover:bg-[#212022] border-b-[1px] justify-start place-items-center gap-2 p-1 my-1"
                              onClick={() => {
                                setusername(item?.name);
                                setShowUsersList(false);
                              }}
                            >
                              <Image
                                src={
                                  "https://avatars.githubusercontent.com/u/106830172?s=400&u=0240064fb7c3cd1e4fd61b18a0d790c0e4490e55&v=4"
                                }
                                width={40}
                                height={40}
                                alt=""
                                className="rounded-full"
                              />
                              <p className="text-[20px]">{item.name}</p>
                            </div>
                          </>
                        );
                      })
                    ) : (
                      <p className="w-full bg-[#212022]  px-3 py-2 text-white ">
                        No User Found
                      </p>
                    )}
                  </div>
                )}
              </div>
              {/* ===== poinst  */}
              <div>
                <label htmlFor="poinst" className="block my-1">
                  Main Points
                </label>
                <div className="flex justify-between gap-1 place-items-center border-[1px] px-2 py-1">
                  <input
                    value={mainpoint}
                    onChange={(e) => setmainpoint(e.target.value)}
                    type="text"
                    placeholder="Enter Main Points Of Task"
                    className="mb-1 w-full bg-transparent  px-2 py-1 rounded-sm outline-none"
                  />
                  <FaPlus
                    className="text-[28px]  text-white cursor-pointer"
                    onClick={addnewpoint}
                  />
                </div>
              </div>
              <div className="max-h-[100px] w-full overflow-auto ">
                {points?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="py-1 border-b-[1px] border-[gray] my-2 px-2 w-full"
                    >
                      {item}
                    </li>
                  );
                })}
              </div>
              <button className="w-full bg-black my-3 rounded-sm hover:bg-transparent hover:text-[white] hover:border-[1px] border-[white] py-2 px-3 text-[19px]">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
