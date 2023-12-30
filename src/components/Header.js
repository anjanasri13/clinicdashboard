import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="flex">
      <div className="flex">
        <div className="bg-black h-[101px] w-[101px] rounded-full text-center align-center justify-center flex flex-col ml-[10px]">
          <p className="text-white text-[19px] font-normal ">IDEA BOX</p>
        </div>

        <Input
          placeholder="Search any course"
          prefix={<SearchOutlined className="site-form-item-icon" />}
          className="w-[300px] h-[40px] mt-[25px] rounded-[20px] ml-[15px]"
        ></Input>
      </div>

      <div className="flex  w-full justify-evenly items-center ml-[550px]">
        {/* <Menu title={"Title"} color={"text-[red]"} /> */}
        <Menu title={"Title"} color={"text-[red]"} />
        <Menu title={"My Diary"} />
        <Menu title={"Programs"} />
        <Menu title={"Profile"} />
      </div>
    </div>
  );
}
