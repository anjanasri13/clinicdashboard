import React from "react";
import play from "../assests/play-circle (1).svg";

export default function Video({ title }) {
  return (
    <div>
      <p className="text-[30px] font-normal mt-[20px] ml-[80px]">{title}</p>
      <div className="bg-[#D6D6D6B5] rounded-[22px] w-[380px] h-[190px] ml-[80px] mb-[40px]">
        <a href="">
          <img src={play} className="py-[50px] px-[150px]" />
        </a>
      </div>
    </div>
  );
}
