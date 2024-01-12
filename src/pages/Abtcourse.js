import React from "react";
import Header from "../components/Header";
import cloud from "../assests/cloud.png";

import Video from "../components/Video";

const data = [
  {
    title: "Day 1",
  },
  {
    title: "Day 2",
  },
  {
    title: "Day 3",
  },
  {
    title: "Day 4",
  },
  {
    title: "Day 5",
  },
  {
    title: "Day 6",
  },
];
export default function Abtcourse() {
  return (
    <div>
      <Header />
      <a href="">
        <img src={cloud} className="w-[48px] h-[48px] ml-[1400px] mt-[20px]" />
      </a>
      <p className="text-[30px] font-bold ml-[80px] mt-[-40px]">
        About The Course
      </p>
      <p className="text-[20px] font-bold ml-[80px] mt-[20px]">
        10 Days Training Program.
      </p>
      <p className="text-[16px] font-medium ml-[80px] mt-[20px] w-[85%]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div className="flex flex-wrap gap-[16px]">
        {data.map((item, index) => (
          <div key={index}>
            <Video title={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
