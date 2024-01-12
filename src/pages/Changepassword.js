import React from "react";
import Main from "../components/Main";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

export default function Changepassword() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home");
  };

  return (
    <div className="flex">
      <Main />
      <div className="flex flex-col gap-5">
        <p className="text-[25px] font-normal text-[#000000] ml-[240px] mt-[220px]">
          New password
        </p>
        <Input
          placeholder="*************"
          className="w-[60%] ml-[240px] rounded-[10px] border-solid border-2"
          id="input"
        />
        <p className="text-[25px] font-normal text-[#000000] ml-[240px]">
          Password
        </p>
        <Input
          placeholder="*************"
          placeholderTextColor="red"
          className="w-[60%] ml-[240px]  rounded-[10px] border-solid border-2"
          id="input"
        />
        <button
          className="ml-[270px] mt-[20px] w-[50%] bg-[#1565c0] text-[#FFFFFF] text-[18px] rounded-[20px] pt-[3px]"
          onClick={navigateHome}
        >
          Login
        </button>
      </div>
    </div>
  );
}
