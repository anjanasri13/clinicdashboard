import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { HiOutlineSquare2Stack } from "react-icons/hi2";

import { useLocation, useNavigate } from "react-router-dom";
import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";
import sound from "../assests/sound 2.png";
import Value from "../components/Value";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import verify from "../assests/verify 1.png";
import cancel from "../assests/cancel.png";
import Submitalpha1 from "./Submitalpha1";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  p: 4,
};

const Course2A = () => {
  const location = useLocation();
  const { title, subtitle, button } = location.state || {};

  const navigate = useNavigate();
  const submitalpha1 = () => {
    navigate("/submitaplpha1");
  };

  const correctIndex = 1;
  const values = [50, 110, 80];

  // State to track the selected value
  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueSelect = (item) => {
    setSelectedValue(item);

    if (item === values[correctIndex]) {
      handleOpen();
    } else {
      handleOpenwrg();
    }
    // Log the result to the console
    // console.log(`Selected value: ${item}`);
    // console.log(`Is correct: ${item === values[correctIndex]}`);
  };

  const [opencrt, setOpencrt] = useState(false);
  const handleOpen = () => setOpencrt(true);
  const handleClose = () => setOpencrt(false);

  const [openwrg, setOpenwrg] = useState(false);
  const handleOpenwrg = () => setOpenwrg(true);
  const handleClosewrg = () => setOpenwrg(false);

  return (
    <div>
      <Header />
      <h1 className="text-center text-[20px] mt-[10px] font-normal">{title}</h1>

      <div className="flex">
        <div className="flex">
          <HiOutlineSquare2Stack className="ml-[500px] mt-[20px] w-[50px] h-[50px] " />
          <p className="text-[22px] font-normal mt-[35px]">03</p>
        </div>

        <div className="mt-[50px] w-[30%] ml-[10px]">
          <Stack spacing={2} sx={{ flex: 1 }}>
            <LinearProgress
              variant="outlined"
              determinate
              color="neutral"
              value={20}
              size="lg"
            />
          </Stack>
        </div>
      </div>

      <div className="flex w-[32%] ml-[500px] justify-between ">
        <img src={sound} className="w-[78px] h-[79px] mt-[30px]" />
        <p className="text-[25px] mt-[50px]">Hint ?</p>
      </div>
      <p className="text-[30px] text-center mt-[30px]">{subtitle}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-end",
          marginTop: "40px",
        }}
      >
        {values.map((item, index) => (
          <Value
            value={item}
            key={index}
            onClick={() => handleValueSelect(item)}
            isSelected={item === selectedValue}
          />
        ))}
      </div>
      <button
        className="w-[190px] h-[40px] text-[#FFFFFF] text-[20px] bg-[#959393] rounded-[20px] ml-[670px] mt-[30px]"
        onClick={submitalpha1}
      >
        {button}
      </button>

      <Modal
        open={opencrt}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={verify} className="w-[230px] h-[230px] ml-[55px]" />
          <p className="text-[25px] rounded-[9px] bg-[#000000] w-[200px] h-[49px] text-[#FFFFFF] mt-[20px] ml-[70px] text-center pt-[5px]">
            Correct!
          </p>
        </Box>
      </Modal>

      <Modal
        open={openwrg}
        onClose={handleClosewrg}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={cancel}
            className="w-[230px] h-[230px] ml-[50px] text-[#000000]"
          />
          <p className="text-[25px] rounded-[9px] bg-[#000000] w-[200px] h-[49px] text-[#FFFFFF] mt-[20px] ml-[70px] text-center pt-[5px]">
            Wrong!
          </p>
        </Box>
      </Modal>
    </div>
  );
};

export default Course2A;
