import { Project } from "@/types";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import "swiper/css";
import Card from "./Card";

import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);
interface Props {
  data: Project[];
}
export default function Recent({ data }: Props) {
  if(!data){
    return null;
  }
 
  return (
    <div>
      <h4 className="lg:text-3xl text-xl scale-100 font-semibold text-center text-brand-blue my-8 lg:my-16">
        A FEW OF OUR RECENT PROJECTS
      </h4>

      <Swiper
        className="flex"
        spaceBetween={0}
        loop
        autoplay={{
          delay: 2000,

          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          // when window width is >= 640px
          800: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        // slidesPerView={4}
      >
        {data&&data.length>0&&data.map((project) => (
          <SwiperSlide>
            <Card {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <section className="flex">
        <div className="  flex flex-col justify-end  h-72  bg-cover bg-center bg-no-repeat bg-Atura-Dandenong-South-Night"></div>
      </section> */}
    </div>
  );
}
