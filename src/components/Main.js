import React from "react";

export default function Main() {
  return (
    <>
      <div className="bg-[#C4C4C4] w-[50%] h-[730px] flex flex-col items-center justify-center gap-5">
        <p className="text-[30px] font-normal text-[#000] text-center">
          Welcome to Idea Box
        </p>
        <div className="bg-black h-[150px] w-[150px] rounded-full text-center align-center justify-center flex flex-col">
          <p className="text-white text-[25px] font-normal">IDEA BOX</p>
        </div>
        <p className="text-[16px] font-medium text-[#000] pl-[10px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy text
          <br />
          ever since the 1500s, when an unknown printer took a galley of type
          <br />
          and scrambled it to make a type specimen book.
        </p>
      </div>
    </>
  );
}
