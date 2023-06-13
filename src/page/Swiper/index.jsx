import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination, Mousewheel } from "swiper";
import About from "../About";
import Contact from "../contact";

function Nested() {
  return (
    <>
      <Swiper
        className="mySwiper swiper-v"
        spaceBetween={100}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        <SwiperSlide className="bg-blue-200"><h1>happy man</h1></SwiperSlide>
        <SwiperSlide>Horizontal Slide 2</SwiperSlide>
        <SwiperSlide>Horizontal Slide 3</SwiperSlide>
        <SwiperSlide>Horizontal Slide 4</SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            spaceBetween={100}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            Navigation={true}
          >
            <SwiperSlide>
              <Contact />
            </SwiperSlide>
            <SwiperSlide>Vertical Slide 2</SwiperSlide>
            <SwiperSlide>Vertical Slide 3</SwiperSlide>
            <SwiperSlide>Vertical Slide 4</SwiperSlide>
            <SwiperSlide>Vertical Slide 5</SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Nested;



