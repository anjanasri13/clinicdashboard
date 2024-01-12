import React from "react";
import Header from "../components/Header";
// import star from '../assests/star 1.png'
import ReactStars from "react-rating-stars-component";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Feedback() {
  // const ratingChanged = (newRating) => {
  //     console.log(newRating);
  //   };

  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Header />
      <p className="text-[#4A4A4A] text-[30px] font-normal text-center mt-[15px]">
        Feedback
      </p>
      <p className="text-[#4A4A4A] text-[30px] font-normal text-center mt-[20px]">
        Rate Us
      </p>
      {/* <div className='flex w-[30%] justify-evenly ml-[540px] mt-[30px]'>
            <img src={star} style={{width:'67px',height:'68px'}}/>
            <img src={star} style={{width:'67px',height:'68px'}}/>
            <img src={star} style={{width:'67px',height:'68px'}}/>
            <img src={star} style={{width:'67px',height:'68px'}}/>
            <img src={star} style={{width:'67px',height:'68px'}}/>
        </div> */}

      {/* <ReactStars
             count={5} 
             onChange={ratingChanged}
             size={70}
             activeColor="#ffd700"
             isHalf={true}
             classNames='ml-[620px] '
          />, */}

      <Box sx={{ "& > legend": { mt: 2 } }} />

      {/* <Typography component="legend">Controlled</Typography> */}
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="ml-[650px] text-[50px] mt-[10px]"
      />

      <textarea
        type="text"
        className="bg-[#F5F5F5] h-[330px] w-[543px] ml-[500px] rounded-[10px] resize-none outline-none"
        id="placeholder"
        placeholder="Send your feedback"
      />

      <button className="text-[#FFF] text-[20px] font-normal bg-[#999999] rounded-[20px] w-[206px] h-[30px] mt-[30px] ml-[670px]">
        Submit
      </button>
    </div>
  );
}
