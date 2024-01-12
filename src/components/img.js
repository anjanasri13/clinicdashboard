import React from "react";
import line from "../assests/Line 4.png";

export default function Img({ ml }) {
  return (
    <div>
      <img
        src={line}
        className={`w-[49px] h-[1px] text-[#7A7A7A] flex items-center justify-evenly text-center ${ml}`}
      />
    </div>
  );
}
