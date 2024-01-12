import React from "react";
import Main from "../components/Main";
import { useNavigate } from "react-router-dom";

export default function MailBox() {
  const navigate = useNavigate();

  const changepass = () => {
    navigate("/changepass");
  };

  return (
    <div className="flex">
      <Main />

      <div className="flex flex-col">
        <p className="text-[25px] font-normal text-[#000000] ml-[300px] mt-[220px]">
          Mail In Box
        </p>
        <button
          className="text-[25px] font-normal text-[#000000] ml-[160px] mt-[100px]"
          onClick={changepass}
        >
          Click on the link to change password
        </button>
      </div>
    </div>
  );
}
