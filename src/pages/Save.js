import React from "react";
import Header from "../components/Header";
import sign from "../assests/sign.png";
import Label from "../components/Label";
import { Input } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

  const country = () => {
    navigate("/country");
  };

  return (
    <div>
      <Header />
      <button className="text-[22px] font-normal text-right w-[95%] mt-[10px]">
        Save
      </button>
      <div className="flex">
        <img src={sign} className="w-[25%] h-[25%] mt-[-20px] ml-[60px]" />

        <div className="leading-10">
          <Label title={"User Name"} />
          <Input
            placeholder="AJAY"
            className="w-[60%] ml-[250px] "
            id="inputID"
            type="text"
          />
          <Label title={"Age"} />
          <Input
            placeholder="08"
            className="w-[60%] ml-[250px]"
            id="inputID"
            type="Number"
          />
          <Label title={"Mobile Number"} />
          <Input
            placeholder="+966  Enter Mobile Number"
            className="w-[60%] ml-[250px]"
            id="inputID"
            type="Number"
          />
          <Label title={"Email"} />
          <Input
            placeholder="ajay.shekar888@gmail.com"
            className="w-[60%] ml-[250px]"
            id="inputID"
            type="Email"
          />
          <Label title={"Password"} />
          <Input
            placeholder="*************"
            className="w-[60%] ml-[250px]"
            id="inputID"
            type="Password"
          />
          <Label title={"Country"} />
          <Input
            placeholder="UAE"
            className="w-[60%] ml-[250px]"
            id="inputID"
            type="text"
            onClick={country}
          />
        </div>
      </div>
    </div>
  );
}
