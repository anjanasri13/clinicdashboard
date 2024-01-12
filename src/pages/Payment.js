import React from "react";
import { Input } from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <p className="text-[30px] font-medium text-center">Payment Details</p>
      <div className="w-[950px] h-[287px] rounded-[9px] bg-[#6D6D6D] ml-[250px] mt-[20px] pt-[30px] flex mb-[20px]">
        <div className="w-[378px] h-[221px] rounded-[20px] bg-[#C4C4C4] ml-[150px] ">
          <p className="text-[25px] font-light pt-[90px] flex justify-evenly">
            1453&emsp;7656&emsp;8786&emsp;8786
          </p>
          <div className="flex text-[20px] font-light  w-[80%] ml-[40px] mt-[40px] justify-between">
            <p>AJAY</p>
            <p>10/22</p>
          </div>
        </div>
        <div className="w-[150px] h-[150px] rounded-[50%] mt-[40px] ml-[70px] bg-[#C4C4C4]">
          <p className="text-[25px] font-light text-center mt-[50px]">
            Add card
          </p>
        </div>
      </div>

      <div className="flex">
        <div>
          <label className="ml-[250px] text-[#B3B3B3] text-[22px] font-light">
            Card Holder
          </label>
          <br />
          <Input
            placeholder="AJAY"
            className="w-[20%] ml-[250px] text-[20px] mb-[20px]"
            id="input"
            type="text"
          />
          <br />
          <label className="ml-[250px] text-[#B3B3B3] text-[22px] font-light">
            Card Number
          </label>
          <br />
          <Input
            placeholder="1453   -  7656   -  8786   -  8786"
            className="w-[20%] ml-[250px] text-[20px] mb-[20px]"
            id="input"
            type="text"
          />
          <br />
          <label className="ml-[250px] text-[#B3B3B3] text-[22px] font-light">
            Expiraton Date
          </label>
          <label className="ml-[130px] text-[#B3B3B3] text-[22px] font-light">
            CVV
          </label>
          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={"10"}
              views={["day"]}
              className="ml-[250px] w-[8%] mt-[10px] outline-none"
            />
            <DatePicker
              label={"2022"}
              views={["year"]}
              className="ml-[10px] w-[10%] mt-[10px] outline-none"
            />
          </LocalizationProvider>
          <Input
            placeholder="323"
            className="w-[5%] ml-[75px] mt-[20px] text-[20px] mb-[20px]"
            id="input"
            type="text"
          />
          <br />
          <button
            className="text-[#FFF] text-[20px] font-normal bg-[#999999] rounded-[20px] w-[150px] h-[30px] mt-[20px] ml-[280px] "
            onClick={navigateHome}
          >
            Confirm
          </button>
        </div>
        <div className="bg-[#6D6D6D] w-[270px] h-[300px] mt-[20px]">
          <button
            className="text-[25px] font-normal rounded-[30px] border-2 border-black text-center
                mt-[20px] w-[90%] ml-[10px]"
          >
            $<span className="text-[50px]">30</span>/per month
          </button>
          <p className="text-[16px] font-medium w-[55%] mt-[20px] ml-[70px]">
            Lorem Ipsum is simply dummy text of the printing and has been the{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
