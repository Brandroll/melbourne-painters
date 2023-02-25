import { Project } from "@/types";
import React, { useEffect, useState } from "react";
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
  const [recentData, setRecentData] = useState<Project | any>([]);
  useEffect(() => {
    setRecentData(data);
  }, [data]);
  if (!data) {
    return null;
  }

  return (
    <div>
      <h4 className="md:text-3xl text-xl scale-100 font-isidorasans_semi_bold  font-semibold text-center text-brand-blue my-8 lg:my-16">
        Our Recent Projects
      </h4>

      <Swiper
        className="flex"
        spaceBetween={0}
        loop={data.length > 3 ? true : false}
        autoplay={{
          delay: 2000,

          pauseOnMouseEnter: true,
          disableOnInteraction: false,
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
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1080: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        // slidesPerView={4}
      >
        {recentData &&
          recentData.length > 0 &&
          recentData.map((project: Project) => (
            <SwiperSlide key={Math.random()}>
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
