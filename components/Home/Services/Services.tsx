import { Service } from "@/types";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import "swiper/css";
import Card from "../Card";
interface Props {
  data: Service[];
}

export default function Services({ data }: Props) {
  return (
    <div>
      <Swiper className="flex" spaceBetween={0} slidesPerView={4}>
        {data.map((project) => (
          <SwiperSlide>
            <Card {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
