import React from "react";
import Header from "../components/Header";
import Alpha from "../components/Alpha";
import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";
import Carousel2 from "./Carousel2";

export default function Activity() {
  return (
    <div>
      <Header />

      <p className="text-[#000] text-[20px] font-bold mt-[10px] ml-[60px]">
        My Activity{" "}
      </p>

      <div className=" w-[30%] h-[200px] bg-[#F5F5F5] mt-[10px] ml-[60px] justify-evenly rounded-[15px]">
        <div className="pt-[10px] text-[#000] font-medium text-[36px] flex justify-evenly">
          <p>40</p>
          <p>1200</p>
        </div>
        <div className="flex w-auto text-[#000] text-[16px] font-medium">
          <p className="ml-[70px]">Total Completed</p>
          <p className="ml-[80px]">Your Goal</p>
        </div>

        <Stack
          spacing={2}
          sx={{ flex: 1 }}
          className="mt-[40px] w-[80%] ml-[50px]"
        >
          <LinearProgress determinate value={20} variant="solid" size="lg" />
        </Stack>
        <p className="mt-[10px] ml-[50px] tetx-[16px] font-medium">
          10 % Training Completed
        </p>
      </div>

      <p className="text-[#000] text-[20px] font-bold mt-[10px] ml-[60px]">
        My Focus Area
      </p>
      <Carousel2 />

      <p className="text-[#000] text-[20px] font-bold mt-[10px] ml-[60px]">
        Downloaded Files
      </p>
      <div className="w-[10%] h-[130px] bg-[#F5F5F5] mt-[10px] ml-[60px] rounded-[15px] mb-[15px]">
        <p className="px-[35px] py-[50px] text-[#000] text-[18px] font-medium">
          Find Birds
        </p>
      </div>
    </div>
  );
}
