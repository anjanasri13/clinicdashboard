import React from "react";
import Header from "../components/Header";
import login from "../assests/login.png";
import cracker from "../assests/cracker.png";
import Carousel from "better-react-carousel";
import Course3 from "../components/Course3";

const style = {
  color: "#FFFFFF",
  fontSize: "25px",
  backgroundColor: "#959393",
  borderRadius: "20px",
  width: "296px",
  height: "49px",
};

const data = [
  {
    title: "Cource :3",
  },
  {
    title: "Cource :4",
  },
  {
    title: "Cource :5",
  },
  {
    title: "Cource :6",
  },
];

export default function Submitalpha1() {
  return (
    <div>
      <Header />

      <p className="text-[25px] font-bold pt-[5px] text-center">Cource :2</p>

      <div className=" ml-[90px] mt-[50px] border-2 w-[1346px] h-[430px] bg-[#C4C4C4] rounded-[19px]">
        <img
          src={login}
          className="w-[107px] h-[105px] mt-[-60px] pt-[-20px] ml-[610px]"
        />

        <div className="flex ">
          <div className="text-[36px] font-medium ml-[570px] mt-[20px]">
            <p>Total :29 / 30 </p>
            <p>Retry :04</p>
            <p>Hints :04</p>
            <p>Correct of Day 1 Course</p>
          </div>
          <div>
            <img
              src={cracker}
              className="w-[114px] h-[114px] ml-[190px] mt-[60px]"
            />
            <p className="text-[25px] font-bold mt-[15px] ml-[150px]">
              Congratulation
            </p>
          </div>
        </div>
        <div className="flex justify-evenly ">
          <div className=" mt-[60px] flex gap-[30px]">
            <button style={style}>Try Again</button>
            <button style={style}>Back Home</button>
            <button style={style}>Subscribe for full version</button>
          </div>
          <div className="text-[25px] font-normal underline underline-offset-1 mt-[60px]">
            <a href="">Email results</a>
          </div>
        </div>
      </div>

      <div className="w-[1009px] h-[302px] bg-[#C4C4C4]  rounded-[20px] mb-[20px] ml-[300px]">
        <p className="text-[24px] font-medium ml-[30px] mt-[30px] pt-[20px]">
          Continue
        </p>

        <Carousel cols={2} rows={1} loop>
          {data.map((item, index) => (
            <Carousel.Item key={index}>
              <Course3 title={item.title} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
