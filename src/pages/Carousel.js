import React from 'react'
import Homeflex from "../components/Course";
import { useNavigate } from "react-router-dom";
import { CourseData } from "../services/data";
import Carousel from 'better-react-carousel'
import { HideImage } from '@mui/icons-material';

export default function Carousel1() {

    const navigate=useNavigate();

   const Course2 = () =>{
    navigate("/course2")
   }

  return (
    <div>
        <Carousel cols={3} rows={1} loop >
      <Carousel.Item >
           <Homeflex title={CourseData[0].title} src={CourseData[0].img}/>
      </Carousel.Item>
      <Carousel.Item>
      <div className="rounded-[20px] bg-[#F5F5F5] w-[503px] h-[300px] ">
            <div className="flex">
                <p className="text-[#000] text-[20px] font-medium px-[30px] pt-[50px] mt-[10px]" onClick={Course2}>{CourseData[1].title}</p>
                <img src={CourseData[1].img} style={{opacity: 0.6,height:'89px',width:'95px',marginLeft:'200px',marginTop:'20px'}}/>
            </div>
            <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[20px]">Traning</p>
            <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[20px]">Days</p>
            <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[20px]">Rank</p>
            <button className="text-[#000] text-[20px] font-medium bg-[#DEDEDE] rounded-[20px] w-[140px] h-[31px] mt-[30px] ml-[170px]">Resume</button>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <Homeflex title={CourseData[2].title} src={CourseData[2].img}/>
      </Carousel.Item>
      <Carousel.Item>
           <Homeflex title={CourseData[2].title} src={CourseData[2].img}/>
      </Carousel.Item>
      <Carousel.Item>
      <div className="rounded-[20px] bg-[#F5F5F5] w-[503px] h-[300px] ">
            <div className="flex">
                <p className="text-[#000] text-[20px] font-medium px-[30px] pt-[50px] mt-[10px]" onClick={Course2}>{CourseData[1].title}</p>
                <img src={CourseData[1].img} style={{opacity: 0.6,height:'89px',width:'95px',marginLeft:'200px',marginTop:'20px'}}/>
            </div>
            <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[20px]">Traning</p>
            <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[20px]">Days</p>
            <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[20px]">Rank</p>
            <button className="text-[#000] text-[20px] font-medium bg-[#DEDEDE] rounded-[20px] w-[140px] h-[31px] mt-[30px] ml-[170px]">Resume</button>
         </div>
      </Carousel.Item>
      <Carousel.Item>
      <Homeflex title={CourseData[0].title} src={CourseData[0].img}/>
      </Carousel.Item>
      </Carousel>
    </div>
  )
}

