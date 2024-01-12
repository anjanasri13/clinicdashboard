import React from "react";
import Header from "../components/Header";
import sign from "../assests/sign.png";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  const save = () => {
    navigate("/save");
  };

  return (
    <div>
      <Header />
      <button
        className="text-[22px] font-normal text-right w-[95%] mt-[10px]"
        onClick={save}
      >
        Edit
      </button>
      <div className="flex">
        <img src={sign} className="w-[25%] h-[25%] mt-[-20px] ml-[60px]" />
        <div className="mt-[20px] ml-[100px] text-[25px] font-normal leading-loose">
          <p>User Name</p>
          <p>Age</p>
          <p>Mobile No</p>
          <p>Email Id</p>
          <p>Subscription</p>
          <p>Country</p>
        </div>
        <div className="mt-[20px] ml-[100px] text-[25px] font-normal leading-loose">
          <p>Ajay</p>
          <p>09</p>
          <p>+966111111111</p>
          <p>ajay@gmail.com</p>
          <p>Yearly</p>
          <p>UAE</p>
        </div>
      </div>

      <p className="text-[20px] font-bold ml-[540px] mt-[10px]">
        My Subscription
      </p>
      <div className="bg-[#F5F5F5] rounded-[20px] w-[35%] leading-10 text-[18px] font-medium ml-[540px] mt-[20px] text-center py-[10px]">
        <p>Yearly</p>
        <p>120 Days Left</p>
        <p className="text-[14px] leading-[25px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>
      <button className="text-[20px] font-medium ml-[750px] mt-[20px]">
        Unsubscribe
      </button>
    </div>
  );
}
