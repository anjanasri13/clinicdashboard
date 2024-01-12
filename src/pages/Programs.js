import React from "react";
import Header from "../components/Header";
import Disorder from "../components/Disorder";

export default function Programs() {
  return (
    <div>
      <Header />
      <p className="text-[30px] text-[#000] font-normal text-center mt-[15px]">
        Programs
      </p>

      <div className="flex justify-evenly">
        <Disorder title={"Disorder 1"} />
        <Disorder title={"Disorder 2"} />
        <Disorder title={"Disorder 3"} />
      </div>
      <div className="flex justify-evenly mt-[20px]">
        <Disorder title={"Disorder 4"} />
        <Disorder title={"Disorder 5"} />
        <Disorder title={"Disorder 6"} />
      </div>
    </div>
  );
}
