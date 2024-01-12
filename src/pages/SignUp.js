import React from "react";
import Main from "../components/Main";
import sign from "../assests/sign.png";
import { Input } from "@mui/material";
import { Button } from "antd";
import Label from "../components/Label";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const verify = () => {
    navigate("/verify");
  };

  const country = () => {
    navigate("/country");
  };

  return (
    <div className="flex">
      <Main />

      <div className="flex flex-col gap-1">
        <p className="text-[#000] text-[25px] font-medium mt-[10px] ml-[300px]">
          Sign Up
        </p>
        <img src={sign} className="w-[107px] h-[105px] ml-[290px]" />

        <Label title={"User Name"} />
        <Input
          placeholder="AJAY"
          className="w-[50%] ml-[250px] "
          id="inputID"
          type="text"
        />
        <Label title={"Age"} />
        <Input
          placeholder="08"
          className="w-[50%] ml-[250px]"
          id="inputID"
          type="Number"
        />
        <Label title={"Mobile Number"} />
        <Input
          placeholder="+966  Enter Mobile Number"
          className="w-[50%] ml-[250px]"
          id="inputID"
          type="Number"
        />
        <Label title={"Email"} />
        <Input
          placeholder="ajay.shekar888@gmail.com"
          className="w-[50%] ml-[250px]"
          id="inputID"
          type="Email"
        />
        <Label title={"Password"} />
        <Input
          placeholder="*************"
          className="w-[50%] ml-[250px]"
          id="inputID"
          type="Password"
        />
        <Label title={"Country"} />
        <Input
          placeholder="UAE"
          className="w-[50%] ml-[250px]"
          id="inputID"
          type="text"
          onClick={country}
        />
        <Button
          shape="round"
          id="button"
          onClick={verify}
          className="ml-[290px] mt-[20px] w-[34%] bg-[#1565C0] text-[#FFFFFF] text-[18px] pb-[30px]"
        >
          Signup
        </Button>
      </div>
    </div>
  );
}
