import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { FaFilePdf } from "react-icons/fa6";
import cloud from "../assests/cloud.png";

export default function Course2() {
  const location = useLocation();
  const { title, src, src1, training, subtitle, desc, nxttitle } =
    location.state || {};

  return (
    <div>
      {/* <h1>{training}</h1> */}
      <Header />
      <h1 className="text-center text-[20px] mt-[10px] font-normal">{title}</h1>
      <a href="">
        {src && (
          <img
            src={cloud}
            alt="Course Image"
            className="w-[48px] h-[48px] ml-[1400px]"
          />
        )}
      </a>
      <div className=" w-[81%] h-[640px] bg-[#D6D6D6B5] mt-[20px] ml-[130px] rounded-[22px] overflow-y-auto	pb-[30px] ">
        <p className="text-[16px] font-bold mt-[20px] ml-[40px]">{subtitle}</p>
        <p className="text-[16px] font-medium mt-[20px] ml-[40px] mr-[0px]">
          {desc}
        </p>

        <div className="w-[12%] h-[150px]  bg-[#C4C4C4] mt-[20px] ml-[40px]  rounded-[19px]">
          {src && (
            <img
              src={src}
              alt="Course Image"
              className="w-[95px] h-[120px] pt-[25px] ml-[20px]"
            />
          )}
        </div>
        <p className="text-[16px] font-medium mt-[20px] ml-[40px] mr-[0px]">
          {desc}
        </p>
      </div>
      <h1 className="text-[30px] font-normal ml-[130px] mt-[20px]">
        {nxttitle}
      </h1>

      <div className="flex text-[#DB544A] ">
        <div className=" bg-[#D6D6D6B5] w-[20%] h-[150px] ml-[130px] rounded-[22px] mb-[20px]">
          <a href="">
            <FaFilePdf className="w-[50%] h-[50px] ml-[75px] mt-[50px]" />
          </a>
        </div>
        <div className=" bg-[#D6D6D6B5] w-[20%] h-[150px] ml-[130px] rounded-[22px] mb-[20px]">
          <a href="">
            <FaFilePdf className="w-[50%] h-[50px] ml-[75px] mt-[50px]" />
          </a>
        </div>
        <div className=" bg-[#D6D6D6B5] w-[20%] h-[150px] ml-[130px] rounded-[22px] mb-[20px]">
          <a href="">
            <FaFilePdf className="w-[50%] h-[50px] ml-[75px] mt-[50px] " />
          </a>
        </div>
      </div>

      {/* {src && <img src={src} alt="Course Image" />}
      {pdf && <img src={pdf} alt="Course Image" />} */}
    </div>
  );
}
