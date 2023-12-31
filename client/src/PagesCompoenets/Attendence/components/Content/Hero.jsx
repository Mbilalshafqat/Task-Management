import { color1 } from "@/compoenets/Colors/Color";
import React from "react";
import heroimg from "../../../../Assests/logo.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="my-[30px] px-[30px]  w-full flex justify-center place-items-center gap-[20px]">
      <div
        className="border-[1px] border-[gray] rounded-[4px] p-3 w-[500px] h-[200px] relative"
        style={{ backgroundColor: color1 }}
      >
        <h2 className="text-[27px] mb-2">Hello Muhammad</h2>
        <p className="text-[18px] text-[gray]">
          {" "}
          Here your dashboard for today.
        </p>
        <Image
          src={heroimg}
          width={400}
          height={200}
          alt=""
          className="absolute bottom-[-15px]  right-0"
        />
      </div>
      <div
        className="border-[1px] border-[gray] rounded-[4px] p-3 w-[500px] h-[200px]"
        style={{ backgroundColor: color1 }}
      >
        <h2 className="text-[27px] mb-2">UPCOMING HOLIDAYS</h2>
        <p className="text-[18px] text-[gray]"> No upcoming holidays.</p>
      </div>
    </div>
  );
};

export default Hero;
