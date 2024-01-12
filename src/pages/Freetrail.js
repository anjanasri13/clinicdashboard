import React from "react";
import Header from "../components/Header";
import abc from "../assests/abc.png";
import bird from "../assests/bird.png";
import Alpha from "../components/Alpha";

export default function Freetrail() {
  return (
    <div>
      <Header />
      <div className="text-[30px] font-medium text-center mt-[10px] ">
        <p>10 Days Free trail </p>
        <p>Day 5</p>
        <button className="text-[25px] font-medium bg-[#C4C4C4] rounded-[9px] w-[228px] h-[45px]">
          Subscribe
        </button>
      </div>

      <p className="text-[#000] font-[18px]  font-medium ml-[100px] mt-[40px] mb-[2px]">
        My Courses
      </p>
      <div className="flex gap-10 ml-[50px]">
        <div className="rounded-[20px] bg-[#F5F5F5] w-[355px] h-[253px] ml-[50px]">
          <div className="flex">
            <p className="text-[#000] text-[20px] font-medium px-[30px] pt-[50px] mt-[10px]">
              Course:1
            </p>
            <img
              src={abc}
              style={{
                opacity: 0.6,
                height: "54px",
                width: "54px",
                marginLeft: "130px",
                marginTop: "50px",
              }}
            />
          </div>
          <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[10px]">
            Traning
          </p>
          <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[10px]">
            Days
          </p>
          <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[10px]">
            Rank
          </p>
          <button className="text-[#000] text-[20px] font-medium bg-[#DEDEDE] rounded-[20px] w-[140px] h-[31px] mt-[10px] ml-[100px]">
            Resume
          </button>
        </div>
        <div className="rounded-[20px] bg-[#F5F5F5] w-[375px] h-[253px]">
          <div className="flex">
            <p className="text-[#000] text-[20px] font-medium px-[30px] pt-[50px] mt-[10px]">
              Course:2
            </p>
            <img
              src={bird}
              style={{
                opacity: 0.6,
                height: "54px",
                width: "54px",
                marginLeft: "130px",
                marginTop: "50px",
              }}
            />
          </div>
          <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[10px]">
            Traning
          </p>
          <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[10px]">
            Days
          </p>
          <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[10px]">
            Rank
          </p>
          <button className="text-[#000] text-[20px] font-medium bg-[#DEDEDE] rounded-[20px] w-[140px] h-[31px] mt-[10px] ml-[100px]">
            Resume
          </button>
        </div>
      </div>

      <p className="text-[#000] font-[18px] font-medium ml-[100px] mt-[40px] mb-[2px]">
        New Courses
      </p>
      <div className="flex">
        <div className="flex ml-[50px]">
          <Alpha bgcolor={"bg-[#DEDEDE]"} ml={"ml-[70px]"} />
          <Alpha bgcolor={"bg-[#C4C4C4]"} ml={"ml-[160px]"} />
        </div>
      </div>
    </div>
  );
}
