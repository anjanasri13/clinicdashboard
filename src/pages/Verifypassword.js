import React from "react";
import Img from "../components/img";
import { useNavigate } from "react-router-dom";

export default function Verifypassword() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <p className="font-normal text-[#000] text-[30px] text-center mt-[100px]">
        Verify Number
      </p>
      <p className="font-normal text-[#9A9696] text-[30px]  text-center  mt-[20px]">
        Enter The Verfication Code We Just Sent <br/> You On Your Mobile Number
      </p>

      {/* <div className='w-[49px] h-[1px] text-[#7A7A7A] mt-[70px] '>
        <img src={line}  className='ml-[530px]'/>
        <img src={line} className='ml-[630px]'/> 
        <img src={line} className='ml-[730px]'/>
        <img src={line} className='ml-[830px]'/> 
        <img src={line} className='ml-[930px]'/>
        </div> */}

      <div className="mt-[70px]">
        <Img ml={"ml-[530px]"} />
        <Img ml={"ml-[630px]"} />
        <Img ml={"ml-[730px]"} />
        <Img ml={"ml-[830px]"} />
        <Img ml={"ml-[930px]"} />
      </div>

      <p className="font-normal text-[#BABABA] text-[20px]  text-center  mt-[100px]">
        If you didn’t receive a code.
        <button className="text-[#000]">Resend</button>
      </p>

      <button
        className="bg-[#C4C4C4] rounded-[15px] w-[10%] py-[5px] ml-[690px] mt-[40px]"
        type="submit"
        onClick={navigateHome}
      >
        Submit
      </button>
    </div>
  );
}
