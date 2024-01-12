import React from "react";
import Header from "../components/Header";
import call from "../assests/call.png";
import mail from "../assests/email.png";

export default function Support() {
  return (
    <div>
      <Header />
      <p className="text-[#4A4A4A] text-[30px] font-normal text-center mt-[15px]">
        Help & Support
      </p>
      <div className="flex ml-[550px] mt-[100px]">
        <img src={call} style={{ width: "89px", height: "89px" }} />
        <div className="font-normal text-[20px] text-[#000] ml-[60px] mt-[10px]">
          <p>Call Us</p>
          <p className="mt-[5px]">+966 0000000000</p>
        </div>
      </div>

      <div className="flex ml-[550px] mt-[100px]">
        <img src={mail} style={{ width: "89px", height: "89px" }} />
        <div className="font-normal text-[20px] text-[#000] ml-[60px] mt-[10px]">
          <p>Mail Us</p>
          <p className="mt-[5px]">Help@ideabox.com</p>
        </div>
      </div>
    </div>
  );
}
