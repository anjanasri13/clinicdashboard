import React from 'react'
import abc from '../assests/abc.png'
import { useNavigate } from 'react-router-dom';


export default function Homeflex({title,src}) {
  const navigate=useNavigate();

  const Course2 = () =>{
   navigate("/course2")
  }
  return (
    <div>
        <div className="rounded-[20px] bg-[#F5F5F5] w-[355px] h-[253px] ">
            <div className="flex">
                <p className="text-[#000] text-[20px] font-medium px-[30px] pt-[50px] mt-[10px]" onClick={Course2}>{title}</p>
                <img src={src} style={{opacity: 0.6,height:'54px',width:'54px',marginLeft:'130px',marginTop:'50px'}}/>
            </div>
            <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[10px]">Traning</p>
            <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[10px]">Days</p>
            <p className="text-[#000] text-[12px] font-medium px-[30px] pt-[10px]">Rank</p>
            <button className="text-[#000] text-[20px] font-medium bg-[#DEDEDE] rounded-[20px] w-[140px] h-[31px] mt-[10px] ml-[100px]">Resume</button>
         </div>
    </div>
  )
}
