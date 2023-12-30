import React from 'react'
import Main from '../components/Main'
import { Button, Input } from 'antd'


export default function Changepassword() {
  return (
    
      <div className='flex'>
         <Main />
         <div className='flex flex-col gap-5'>
         <p className='text-[25px] font-normal text-[#000000] ml-[240px] mt-[220px]'>New password</p>
         <Input placeholder="*************" className='w-[60%] ml-[240px] rounded-[10px] border-solid border-2' id="input"/>
         <p className='text-[25px] font-normal text-[#000000] ml-[240px]'>Password</p>
         <Input placeholder="*************" placeholderTextColor="red"  className='w-[60%] ml-[240px]  rounded-[10px] border-solid border-2' id="input" />
         <Button
            shape="round" id='button'
            className="ml-[270px] mt-[20px] w-[50%] bg-[#1565C0] text-[#FFFFFF] text-[18px]"
          
          >
           Login
          </Button>
         </div>
      </div>
   
  )
}
