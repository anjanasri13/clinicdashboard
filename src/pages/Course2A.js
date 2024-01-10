import React from 'react'
import Header from '../components/Header'
import { HiOutlineSquare2Stack } from "react-icons/hi2";

import { useLocation } from 'react-router-dom';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';
import sound from '../assests/sound 2.png'

export default function Course2A() {
    const location = useLocation();
    const { title} = location.state || {};

  return (
    <div>
        <Header/>
        <h1 className='text-center text-[20px] mt-[10px] font-normal'>{title}</h1>

        <div className='flex'>
            <div className='flex'>
            <HiOutlineSquare2Stack className='ml-[500px] mt-[20px] w-[50px] h-[50px] '/>
                 <p className='text-[22px] font-normal mt-[35px]'>03</p>
            </div>
                 
            <div className='mt-[50px] w-[30%] ml-[10px]'>
                <Stack spacing={2} sx={{ flex: 1 }} >
                    <LinearProgress variant="outlined" determinate  color="neutral" value={20} size='lg' />
                </Stack>
            </div>
        </div>

        <div className='flex w-[32%] ml-[500px] justify-between '>
             <img src={sound} className='w-[78px] h-[79px] mt-[10px]'/>
             <p className='text-[25px] mt-[30px]'>Hint ?</p>
        </div>
        <p className='text-[30px] text-center mt-[10px]'>Which  one is big? </p>
        <p className='text-[30px] text-center mt-[20px]'>Which one is small ?</p>
    </div>
  )
}
