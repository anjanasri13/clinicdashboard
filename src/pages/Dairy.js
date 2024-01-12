import React from "react";
import Header from "../components/Header";
import "react-multi-carousel/lib/styles.css";
import DatePicker from "react-horizontal-datepicker";

export default function Dairy() {
  return (
    <div>
      <Header />
      <p className="text-[25px] font-normal text-center mt-[15px]">My Diary</p>

      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <div
          style={{
            width: "45%",
            alignItems: "center",
            display: "flex",
            paddingLeft: "-10px",
          }}
        >
          <DatePicker color={"#4E4949B8"} endDate={365} />
          {/* https://github.com/kush-agra/react-horizontal-datepicker/tree/master */}
        </div>
      </div>

      <p className="text-[20px] font-bold ml-[620px] mt-[130px]">Disorder 1</p>
      <div className="bg-[#F5F5F5] w-[350px] h-[100px] rounded-[20px] ml-[620px] mt-[20px]">
        <p className="text-[20px] font-bold px-[15px] py-[15px]">Lectures </p>
        <p className="text-[16px] font-medium pl-[15px]">
          Lorem Ipsum is simply dummy text.
        </p>
      </div>
      <button className="text-[#000000] text-[20px] font-normal bg-[#C4C4C4] rounded-[20px] w-[260px] h-[40px] mt-[70px] ml-[670px]">
        Add More Materials
      </button>
    </div>
  );
}
