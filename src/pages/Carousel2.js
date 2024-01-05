import React from 'react'
import Carousel from 'better-react-carousel'
import Alpha from "../components/Alpha";

export default function Carousel2 (){
  return (
    <div>
      <Carousel cols={3} rows={1}  loop >
         <Carousel.Item>
             <Alpha  bgcolor={"bg-[#DEDEDE]"} ml={"ml-[50px]"}/>
         </Carousel.Item>
         <Carousel.Item>
             <Alpha  bgcolor={"bg-[#C4C4C4]"} ml={"ml-[80px]"} />
         </Carousel.Item>
         <Carousel.Item>
             <Alpha  bgcolor={"bg-[#4E4949B8]"} ml={"ml-[70px]"}/>
         </Carousel.Item>
         <Carousel.Item>
            <Alpha  bgcolor={"bg-[#4E4949B8]"} ml={"ml-[50px]"}/>
         </Carousel.Item>
         <Carousel.Item>
             <Alpha  bgcolor={"bg-[#C4C4C4]"} ml={"ml-[80px]"} />
          </Carousel.Item>
          <Carousel.Item>
          <Alpha  bgcolor={"bg-[#DEDEDE]"} ml={"ml-[70px]"}/>
          </Carousel.Item>
      </Carousel>
    </div>
  )
}
