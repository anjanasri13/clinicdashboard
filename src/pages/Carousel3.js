import React from 'react'
import Carousel from 'better-react-carousel'
import Birds from "../components/Birds";
import abc from '../assests/abc.png'
import bird from '../assests/bird.png'

export default function Carousel3() {
  return (
    <div>
    <Carousel cols={3} rows={1}  loop >
      <Carousel.Item>
           <Birds title={"Birds"} src={bird} bgcolor={"bg-[#DEDEDE]"} ml={"ml-[50px]"}/>
      </Carousel.Item>
      <Carousel.Item>
            <Birds title={"Alphabets"} src={abc} bgcolor={"bg-[#C4C4C4]"} ml={"ml-[80px]"}/>
      </Carousel.Item>
      <Carousel.Item>
           <Birds title={"Alphabets"}  src={abc} bgcolor={"bg-[#4E4949B8]"} ml={"ml-[70px]"}/>
      </Carousel.Item>
      <Carousel.Item>
           <Birds title={"Alphabets"}  src={abc} bgcolor={"bg-[#4E4949B8]"} ml={"ml-[50px]"}/>
      </Carousel.Item>
      <Carousel.Item>
           <Birds title={"Alphabets"} src={abc} bgcolor={"bg-[#C4C4C4]"} ml={"ml-[80px]"}/>
      </Carousel.Item>
      <Carousel.Item>
           <Birds title={"Birds"} src={bird} bgcolor={"bg-[#DEDEDE]"} ml={"ml-[70px]"}/>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
