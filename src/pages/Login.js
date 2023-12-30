import { Button, TextField } from "@mui/material";
import React from "react";
import { navigate, useNavigate } from "react-router-dom";
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
        <p className="text-[25px] font-normal text-[#000000]  mt-[200px] ml-[330px]">
          Login
        </p>
        <div style={{ marginLeft: "230px", marginTop: "20px" }}>
          <TextField
            id="standard-basic"
            label="User Name"
            variant="standard"
            className="w-[50%]"
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            variant="standard"
            className="w-[50%]"
           
          />
          <br />
          <br />
        </div>
          <button className="ml-[230px] w-[260px] h-[49px] font-[16px] bg-[#1565C0] rounded-[20px] text-white"  onClick={navigateHome}>Login</button>
        <p
          className="text-[22px] font-normal text-[#000000] ml-[280px] mt-[25px]"
          onClick={forget}
        >
          Forgot password?
        </p>
        <Button
          variant="contained"
          style={{
            marginLeft: "230px",
            width: "260px",
            height: "49px",
            borderRadius: "20px",
            color: "#FAFAFA",
            fontSize: "16px",
            marginTop: "15px",
          }}
          onClick={sign}
        >
          I’M NEW HERE
        </Button>
        <button
          className="text-[22px] font-normal text-[#000000] ml-[280px] mt-[20px]"
         
        >
          Continue As Guest
        </button>
      </div>
    </div>
  );
}
