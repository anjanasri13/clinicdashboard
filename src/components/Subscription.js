import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  // boxShadow: 5,
  p: 4,
};

export default function Subscription() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //     const timer = setTimeout(() => {
  //         setOpen(true)
  //     }, 2000)
  //     return () => clearTimeout(timer)
  // }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const payment = () => {
    navigate("/payment");
  };

  const freetrial = () => {
    navigate("/freetrail");
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="mt-[40px]"
      >
        <Box sx={style} className="outline-none">
          {/* <Button onClick={handleClose} className='text-[#FFFFFF] ml-[550px]'>Close</Button> */}
          <p className="font-bold text-[50px] bg-[#FFFFFF] border-2 ml-[150px] w-[55%] text-center mt-[20px] rounded-[9px]">
            Subscription
          </p>
          <div className="flex gap-5">
            <div className="bg-[#C4C4C4] w-[176px] h-[315px] mt-[50px]">
              <p
                className="text-[19px] font-medium text-center pt-[50px] cursor-pointer"
                onClick={freetrial}
              >
                Free trial
              </p>
              <p className="border-2 border-black rounded-[30px] text-[19px] font-medium text-center w-[60%] ml-[35px] mt-[10px]">
                10 days
              </p>
              <p className="text-[16px] font-medium ml-[20px] mt-[50px]">
                Lorem Ipsum is simply dummy text of the printing and has been
                the{" "}
              </p>
            </div>
            <div className="bg-[#6D6D6D] w-[279px] h-[345px] mt-[20px]">
              <button
                className="text-[25px] font-normal rounded-[30px] border-2 border-black text-center
                mt-[20px] w-[90%] ml-[10px]"
                onClick={payment}
              >
                $<span className="text-[50px]">30</span>/per month
              </button>
              <p className="text-[16px] font-medium w-[55%] mt-[20px] ml-[70px]">
                Lorem Ipsum is simply dummy text of the printing and has been
                the{" "}
              </p>
            </div>
            <div className="bg-[#C4C4C4] w-[176px] h-[315px] mt-[50px]">
              <p
                className="text-[18px] font-normal rounded-[30px] border-2 border-black text-center
                mt-[40px] w-[80%] ml-[15px]"
              >
                $220/per year
              </p>
              <p className="text-[16px] font-medium mt-[25px] ml-[20px]">
                Lorem Ipsum is simply dummy text of the printing and has been
                the{" "}
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
