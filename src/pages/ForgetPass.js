import { Input } from "antd";
import React from "react";
import Main from "../components/Main";
import { useNavigate } from "react-router-dom";

export default function ForgetPass() {
  const navigate = useNavigate();

  const forgetlogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="flex">
        <Main />

        <div className="h-[550px] w-[50%]">
          <p className="text-[25px] font-normal text-[#000000] ml-[270px] mt-[200px]">
            Forgot password?
          </p>
          <p className="text-[25px] font-[300px] text-[#000000] ml-[220px] mt-[40px]">
            Email
          </p>
          <Input
            placeholder="ajay.shekar888@gmail.com"
            className=" ml-[230px] mt-[10px] w-[40%] rounded-[19px] border-solid border-2"
            id="input"
          />
          <br />
          <button
            className="ml-[260px] mt-[40px] w-[33%] bg-[#1565C0] text-[#FFFFFF] text-[20px] rounded-[20px] pt-[3px]"
            onClick={forgetlogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
