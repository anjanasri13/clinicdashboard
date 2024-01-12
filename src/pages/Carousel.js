import React from "react";
import Homeflex from "../components/Course";
import { CourseData } from "../services/data";
import Carousel from "better-react-carousel";

export default function Carousel1() {
  return (
    <div>
      {/* <div className="rounded-[20px] bg-[#F5F5F5] w-[503px] h-[300px] ">
            <div className="flex">
                <p className="text-[#000] text-[20px] font-medium px-[30px] pt-[50px] mt-[10px]" onClick={Course2}>{CourseData[1].title}</p>
                <img src={CourseData[1].img} style={{opacity: 0.6,height:'89px',width:'95px',marginLeft:'200px',marginTop:'20px'}}/>
            </div>
            <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[20px]">Traning</p>
            <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[20px]">Days</p>
            <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[20px]">Rank</p>
            <button className="text-[#000] text-[20px] font-medium bg-[#DEDEDE] rounded-[20px] w-[140px] h-[31px] mt-[30px] ml-[170px]">Resume</button>
      </div> */}

      <Carousel cols={3} rows={1} loop>
        {CourseData.map((item, index) => (
          <Carousel.Item key={index}>
            <Homeflex
              title={item.title}
              src={item.img}
              subtitle={item.subtitle}
              desc={item.desc}
              nxttitle={item.nxttitle}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
