import React from 'react'
import Carousel from 'better-react-carousel'
import Alpha from "../components/Alpha";

const data = [
    {
        bgcolor: "bg-[#DEDEDE]",
    },
    {
        bgcolor: "bg-[#C4C4C4]",
    },
    {
        bgcolor: "bg-[#4E4949B8]",
    },
    {
        bgcolor: "bg-[#4E4949B8]",
    },
    {
        bgcolor: "bg-[#C4C4C4]",
    },
    {
        bgcolor: "bg-[#DEDEDE]",
    },
]

export default function Carousel2 (){
  return (
    <div>
      <Carousel cols={3} rows={1}  loop >
        {data.map((item, index) => (

         <Carousel.Item key={index}>
             <Alpha  bgcolor={item.bgcolor}/>
         </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
