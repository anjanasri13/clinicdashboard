import React from "react";
import { useNavigate } from "react-router-dom";

export default function Disorder({ title }) {
  const navigate = useNavigate();

  const fine = () => {
    navigate("/fine");
  };
  return (
    <div>
      <div
        className={`bg-[#F5F5F5] w-[359px] h-[107px] rounded-[20px] mt-[60px] pt-[20px]`}
        onClick={fine}
      >
        <a href="" className="text-[20px] text-[#000] font-bold px-[30px]">
          {title}
        </a>
        <p className="text-[16px] font-medium leading-8 pl-[30px]">
          Lorem Ipsum is simply dummy text.
        </p>
      </div>
    </div>
  );
}
