import React from "react";
import Search from "antd/es/input/Search";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Header from "../components/Header";
import abc from "../assests/abc.png";
import bird from "../assests/bird.png";
import Homeflex from "../components/Course";
import number from "../assests/numbers.png";
import Alpha from "../components/Alpha";
import Birds from "../components/Birds";
import { useNavigate } from "react-router-dom";
import { CourseData } from "../services/data";
import Subscription from "../components/Subscription";
import Carousel1 from "./Carousel";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";

export default function Home() {
  return (
    <div>
      <Header />
      <Subscription />
      {/* <p className="text-[#000] font-[18px]  font-medium ml-[60px] mt-[10px] mb-[2px]">My Courses</p>

          {/* https://www.npmjs.com/package/react-multi-carousel */}
      {/* <div className="flex justify-evenly">
         <Homeflex title={CourseData[0].title} src={CourseData[0].img} />

         <div className="rounded-[20px] bg-[#F5F5F5] w-[503px] h-[310px] mt-[-10px]">
            <div className="flex">
                <p className="text-[#000] text-[20px] font-medium px-[30px] pt-[50px] mt-[10px]" onClick={Course2} >{CourseData[1].title}</p>
                <img src={CourseData[1].img} style={{opacity: 0.6,height:'89px',width:'95px',marginLeft:'200px',marginTop:'20px'}}/>
            </div>
            <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[20px]">Traning</p>
            <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[20px]">Days</p>
            <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[20px]">Rank</p>
            <button className="text-[#000] text-[20px] font-medium bg-[#DEDEDE] rounded-[20px] w-[140px] h-[31px] mt-[30px] ml-[170px]">Resume</button>
         </div>

         <Homeflex title={CourseData[2].title} src={CourseData[2].img}/>
      </div>

         <p className="text-[#000] font-[18px]  font-medium ml-[60px] mt-[2px] mb-[2px]">New Courses</p>

      <div className="flex">
         <Alpha  bgcolor={"bg-[#DEDEDE]"} ml={"ml-[70px]"}/>
         <Alpha  bgcolor={"bg-[#C4C4C4]"} ml={"ml-[160px]"} />
         <Alpha  bgcolor={"bg-[#4E4949B8]"} ml={"ml-[150px]"}/>
      </div>

      <p className="text-[#000] font-[18px]  font-medium ml-[60px] mt-[10px] mb-[2px]">Related cources</p>
      <div className="flex">
        <Birds title={"Birds"} src={bird} bgcolor={"bg-[#DEDEDE]"} ml={"ml-[70px]"}/>
        <Birds title={"Alphabets"} src={abc} bgcolor={"bg-[#C4C4C4]"} ml={"ml-[160px]"}/>
        <Birds title={"Alphabets"}  src={abc} bgcolor={"bg-[#4E4949B8]"} ml={"ml-[150px]"}/>
      </div>  */}
      {/* https://www.primefaces.org/primereact-v8/carousel/ */}
      <p className="text-[#000] font-[18px]  font-medium ml-[60px] mt-[10px] mb-[2px]">
        My Courses
      </p>
      <Carousel1 />{" "}
      {/* https://reactjsexample.com/react-responsive-carousel-component-with-grid-layout-to-easily-create-a-carousel-like-photo-gallery/ */}
      <p className="text-[#000] font-[18px]  font-medium ml-[60px] mt-[2px] mb-[2px]">
        New Courses
      </p>
      <Carousel2 />
      <p className="text-[#000] font-[18px]  font-medium ml-[60px] mt-[20px] mb-[2px]">
        Related courses
      </p>
      <Carousel3 />
    </div>
  );
}
// https://mdbootstrap.com/docs/react/components/modal/
