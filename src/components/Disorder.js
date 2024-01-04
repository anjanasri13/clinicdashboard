import React from "react";

export default function Disorder({ title }) {
  return (
    <div>
      <div
        className={`bg-[#F5F5F5] w-[359px] h-[107px] rounded-[20px] mt-[60px]`}
      >
        <p className="text-[20px] text-[#000] font-bold pt-[20px] px-[30px]">
          {title}
        </p>
        <p className="text-[16px] font-medium leading-8 pl-[30px]">
          Lorem Ipsum is simply dummy text.
        </p>
      </div>
    </div>
  );
}
