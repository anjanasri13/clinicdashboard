import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function Fine() {
  const navigate = useNavigate();

  const abtcourse = () => {
    navigate("/abtcourse");
  };
  return (
    <div>
      <Header />
      <p className="text-[30px] font-normal text-center mt-[20px]">
        Fine Alphabet
      </p>
      <p className="text-[30px] font-bold ml-[120px] mt-[20px]">
        About The Course
      </p>
      <p className="text-[20px] font-bold ml-[120px] mt-[10px]">
        10 Days Training Program.
      </p>
      <p className="text-[16px] font-medium ml-[120px] mt-[10px] w-[85%]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div className="flex justify-evenly">
        <div
          className={`bg-[#F5F5F5] w-[359px] h-[107px] rounded-[20px] mt-[60px]`}
        >
          <p
            className="text-[20px] text-[#000] font-bold pt-[20px] px-[30px] cursor-pointer"
            onClick={abtcourse}
          >
            Activities
          </p>
          <p className="text-[16px] font-medium leading-8 pl-[30px]">
            Lorem Ipsum is simply dummy text.
          </p>
        </div>

        <div
          className={`bg-[#F5F5F5] w-[359px] h-[107px] rounded-[20px] mt-[60px]`}
        >
          <p className="text-[20px] text-[#000] font-bold pt-[20px] px-[30px]">
            Lectures{" "}
          </p>
          <p className="text-[16px] font-medium leading-8 pl-[30px]">
            Lorem Ipsum is simply dummy text.
          </p>
        </div>

        <div
          className={`bg-[#F5F5F5] w-[359px] h-[107px] rounded-[20px] mt-[60px]`}
        >
          <p className="text-[20px] text-[#000] font-bold pt-[20px] px-[30px]">
            Assisment
          </p>
          <p className="text-[16px] font-medium leading-8 pl-[30px]">
            Lorem Ipsum is simply dummy text.
          </p>
        </div>
      </div>
    </div>
  );
}
