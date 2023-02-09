import { useClients } from "@/framework/rest/clients";
import { AcfImage } from "@/types";
import Image from "next/image";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

import { Swiper, SwiperSlide } from "swiper/react";

export default function Testinominal({ images }: { images: AcfImage[] }) {
  return (
    <div className="md:px-9 px-2 max-w-site-full mx-auto my-2 lg:py-4">
      <h3 className="text-center md:my-8 text-brand-blue text-xl font-medium leading-9">
        JOIN THE THOUSANDS WHO MAKE MELBOURNE PAINTERS THEIR CHOICE
      </h3>
      <Swiper
        className="h-40 max-h-44"
        spaceBetween={50}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          // when window width is >= 480px
          400: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          // when window width is >= 640px
          800: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        slidesPerView={4}
        loop
      >
        {images.map((i) => (
          <SwiperSlide>
            <Image
              alt={i.title}
              src={i.full_image_url}
              width={300}
              height={150}
            />{" "}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <section className="grid gap-8">
        <section className="grid md:grid-cols-2  ">
          <div>
            <Image
              src={
                "https://www.melbourne-painters.com.au/wp-content/uploads/2022/11/Goodwood-St-Front-Facade.jpg"
              }
              alt=""
              width={1200}
              height={700}
            />
          </div>
          <div className="ml-16">
            <h4 className="text-3xl text-brand-blue font-semibold">
              Providing the highest standard of painting to our Melbourne
              client's
            </h4>
            <div>
              <p className="md:my-8 leading-6  font-thin">
                Being Melbourne’s leading name in painting isn’t something we
                take for granted. Every job we undertake is subject to our
                complete dedication to exceptional work and our team works to
                exacting standards, both industry and our own professional ones.
              </p>
              <p className="md:my-8 leading-6  font-thin">
                Regardless of whether you have a small residential project for
                us, or a much larger commercial one, we won’t cut corners or
                treat a smaller scale job with anything less than our full
                attention.
              </p>
              <p className="md:my-8 leading-6  font-thin">
                We have spent many years meticulously building our reputation
                and we view every new painting project as a chance to improve
                it. This means that we take the time to get the little things
                right. We turn up when we say we will, act in a professional
                manner at all times, and clean up after ourselves once
                completed. These aren’t special extras, these are the basics,
                and we take pride in getting them right every single time.
              </p>
            </div>
          </div>
        </section>
        <section className="grid md:grid-cols-2 ">
          <div className="mr-16">
            <h4 className="text-3xl text-brand-blue font-semibold">
              A Painting Company with years of experience behind each painter
            </h4>
            <div>
              <p className="md:my-8 leading-6 font-thin">
                Melbourne Painters only work with the best. Each of our team is
                chosen for their ability, their professionalism, and their
                reliability. They come from a range of backgrounds, which
                enables us to offer a complete range of painting services.
              </p>
              <p className="md:my-8 leading-6 font-thin">
                Our team is comprised of experienced commercial painters and
                residential painters, each of whom have worked on projects of
                every size. From small house paintings, to the biggest
                commercial premises, they have seen and done it all. This mean
                that regardless of how complicated or unique your project is, we
                have the team to take on and complete the challenge to the
                highest possible standard.
              </p>
              <p className="md:my-8 leading-6 font-thin">
                Our painters take pride in their work and are dedicated to
                exceptional workmanship each and every time.
              </p>
            </div>
          </div>
          <div>
            <Image
              alt=""
              src={
                "https://www.melbourne-painters.com.au/wp-content/uploads/2022/11/Pressure-Washing.jpg"
              }
              width={1200}
              height={700}
            />
          </div>
        </section>
      </section> */}
    </div>
  );
}
