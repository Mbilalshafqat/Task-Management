import { color1 } from "@/compoenets/Colors/Color";
import React, { useState } from "react";
import { LuFileEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const TaskCard = ({ data }) => {
  const itemperpage = 8;
  const [selectedPage, setSelectedPage] = useState(1);
  const startIndex = (selectedPage - 1) * itemperpage;
  const endIndex = startIndex + itemperpage;
  const slicedata = data?.slice(startIndex, endIndex);
  const totalpages = Math.ceil(data?.length / itemperpage);

  return (
    <>
      <div className="my-3 px-3 flex justify-center place-items-center gap-1 flex-wrap max-w-[1700px] mx-auto">
        {/* === task box  */}
        {slicedata?.map((item, index) => {
          return (
            <>
              <div
                className="w-[310px] rounded-md p-2 hover:translate-y-2 duration-300 m-2 h-[270px] flex flex-col justify-between"
                style={{ backgroundColor: color1 }}
                key={index}
              >
                <div>
                  <h2 className="text-[23px] mb-2">
                    {item.title?.slice(0, 50)}...
                  </h2>
                  <p className="text-[gray]">{item.des?.slice(0, 150)}...</p>
                </div>
                <div className="mt-3">
                  <p>{item.date}</p>
                  <div className="flex justify-between place-items-center mt-2">
                    <button
                      className={`${
                        item.status === "completed"
                          ? "bg-[#68AF66]"
                          : item.status === "in-progress"
                          ? "bg-[#CAC761]"
                          : "bg-[#DF6E5E]"
                      }  py-[2px] px-2 rounded-md`}
                    >
                      {item.status}
                    </button>
                    <div className="flex justify-center place-items-center gap-2">
                      <LuFileEdit className="text-[23px] text-[green] cursor-pointer" />
                      <MdDeleteOutline className="text-[23px] text-[red] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {data?.length > 8 && (
        <div className=" flex my-2 justify-end place-items-center gap-2 px-3">
          <button
            className="bg-[#4d4c4f] rounded-sm py-1 px-3 mx-1 disabled:cursor-no-drop"
            onClick={() => setSelectedPage(selectedPage - 1)}
            disabled={selectedPage <= 1}
          >
            Previous
          </button>
          <p>
            page {selectedPage} of {totalpages}
          </p>
          <button
            className="bg-[#4d4c4f] rounded-sm py-1 px-3 mx-1 disabled:cursor-no-drop"
            onClick={() => setSelectedPage(selectedPage + 1)}
            disabled={selectedPage === totalpages}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default TaskCard;
