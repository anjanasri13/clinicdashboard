import { TextField } from "@mui/material";
import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Main from "../components/Main";

export default function Login() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("home");
  };

  const forget = () => {
    navigate("forget");
  };
  const sign = () => {
    navigate("sign");
  };
  return (
    <div className="flex ">
      <Main />

      <div className="h-[550px] w-[50%]">
        <p className="text-[25px] font-normal text-[#000000]  mt-[200px] ml-[340px]">
          Login
        </p>
        <div style={{ marginLeft: "230px", marginTop: "20px" }}>
          <TextField
            id="standard-basic"
            label="User Name"
            variant="standard"
            className="w-[60%]"
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            variant="standard"
            className="w-[60%]"
          />
          <br />
          <br />
        </div>
        <button
          className="ml-[230px] w-[310px] h-[49px] text-[20px] bg-[#1565C0] rounded-[20px] text-white font-normal"
          onClick={navigateHome}
        >
          Login
        </button>
        <button
          className="text-[22px] font-normal text-[#000000] ml-[300px] mt-[25px]"
          onClick={forget}
        >
          Forgot password?
        </button>
        <Button
          shape="round"
          id="button"
          style={{
            backgroundColor: "#1565C0",
            marginLeft: "260px",
            width: "250px",
            height: "49px",
            borderRadius: "20px",
            color: "#FAFAFA",
            fontSize: "20px",
            marginTop: "15px",
            fontWeight: "normal",
          }}
          onClick={sign}
        >
          I’M NEW HERE
        </Button>
        <button className="text-[22px] font-normal text-[#000000] ml-[300px] mt-[20px]">
          Continue As Guest
        </button>
      </div>
    </div>
  );
}
