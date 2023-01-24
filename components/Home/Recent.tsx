import { Project } from "@/types";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import "swiper/css";
import Card from "./Card";
interface Props {
  data: Project[];
}
export default function Recent({ data }: Props) {
  return (
    <div>
      <h4 className="text-4xl font-semibold text-center text-brand-blue my-16">
        A FEW OF OUR RECENT PROJECTS
      </h4>
      <Swiper className="flex" spaceBetween={0} slidesPerView={4}>
        {data.map((project) => (
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
