import React from 'react'
import abc from '../assests/abc.png'

export default function Alpha({bgcolor,ml}) {
  return (
    <div>
        <div className={`rounded-[20px] ${bgcolor} w-[355px] h-[230px] ${ml}`}>
            <div className="flex">
                <p className="text-[#000] text-[20px] font-medium px-[30px] pt-[50px] mt-[10px]" >Alphabets</p>
                <img src={abc} style={{opacity: 0.9,height:'54px',width:'54px',marginLeft:'130px',marginTop:'50px'}}/>
            </div>
            <p className="text-[#000] text-[16px] font-norma; px-[30px] pt-[10px]">NO of days:40</p>
            <button className="text-[#000] text-[20px] font-medium bg-[#F5F5F5] rounded-[20px] w-[140px] h-[31px] mt-[30px] ml-[100px]">Start</button>
         </div>
    </div>
  )
}
