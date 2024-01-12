import React from "react";
import Header from "../components/Header";
import login from "../assests/login.png";
import Carousel from "better-react-carousel";
import Course3 from "../components/Course3";

const style = {
  color: "#FFFFFF",
  fontSize: "25px",
  backgroundColor: "#959393",
  borderRadius: "20px",
  width: "65%",
  marginLeft: "60px",
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
export default function Submitalpha() {
  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <div className="w-[428px] h-[800px] bg-[#C4C4C4] rounded-[9px] ml-[20px] mt-[20px] text-center flex flex-col gap-[15px]">
          <p className="text-[25px] font-bold pt-[5px]">Cource :2</p>
          <img
            src={login}
            className="w-[107px] h-[105px] bg-[#C4C4C4] ml-[160px]"
          />
          <p className="text-[25px] font-bold ">Congratulation</p>
          <p className="text-[36px] font-medium">29 / 30 </p>
          <p className="text-[30px] font-medium">Retry 04</p>
          <p className="text-[30px] font-medium">Hints 04</p>
          <p className="text-[30px] font-medium">Correct of Day 1 Course</p>
          <a
            href=""
            className="text-[#7C7C7C] text-[25px] font-normal underline underline-offset-1"
          >
            Email results
          </a>
          <br />
          <button style={style}>Try Again</button>
          <br />
          <button style={style}>Back Home</button>
          <br />
          <button style={style}>Subscribe for full version</button>
        </div>

        <div className="w-[900px] h-[352px] bg-[#C4C4C4] mt-[200px] rounded-[9px] ">
          <p className="text-[24px] font-medium ml-[30px] mt-[30px]">
            Next test
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
    </div>
  );
}
