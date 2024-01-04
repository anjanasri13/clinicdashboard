import React from 'react'
import Header from '../components/Header'
import DateDaySlider from './DateDaySlider';

export default function Dairy() {

    

  return (
    <div>
        <Header/>
        <p className='text-[25px] font-normal text-center mt-[15px]'>My Diary</p>

      
     


        <p className='text-[20px] font-bold ml-[600px] mt-[200px]'>Disorder 1</p>
        <div className='bg-[#F5F5F5] w-[350px] h-[100px] rounded-[20px] ml-[600px] mt-[20px]'>
            <p className='text-[20px] font-bold px-[15px] py-[15px]'>Lectures </p>
            <p className='text-[16px] font-medium pl-[15px]'>Lorem Ipsum is simply dummy text.</p>
        </div>
        <button className="text-[#000000] text-[20px] font-normal bg-[#C4C4C4] rounded-[20px] w-[250px] h-[40px] mt-[70px] ml-[650px]">
        Add More Materials</button>


    </div>
  )
}
