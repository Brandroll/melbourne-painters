import { Service } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./Card";
interface Props {
  data: Service[];
}
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

export default function Services({ data }: Props) {
  return (
    <div>
      <Swiper
        className="flex"
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            autoplay: { delay: 50000 },
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
          1080: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
      >
        {data.map((project, i) => (
          <SwiperSlide>
            <Card href={`/${project.slug}`} {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
