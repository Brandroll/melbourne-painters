import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testinominal() {
  const t = [
    "https://www.melbourne-painters.com.au/wp-content/uploads/2022/06/Think_Phcy_Logo.jpg",
    "https://www.melbourne-painters.com.au/wp-content/uploads/2022/06/think-national-logo.png",
    "   https://www.melbourne-painters.com.au/wp-content/uploads/2022/06/bmw-logo-1.jpg",
    "https://www.melbourne-painters.com.au/wp-content/uploads/2022/06/bargain-depot-grocery-clearance-store-epping-general-retailers-aa54-300x0-2.jpg",
    "https://www.melbourne-painters.com.au/wp-content/uploads/2022/06/CDK-logo-2-1.png",
  ];

  const b = [
    {
      title:
        "Get the most reliable interior & exterior Painters in Melbourne  ",
      content:
        "At Melbourne Painters our main mission is to make sure that we bring your colours to life. Whether you are painting a new warehouse, a hospital or renovating your dream home, our painters and decorators are here to bring your vision to life. We only use the best coatings for your needs, making sure to find the best solutions to your problems and ensuring to stay within your cost estimates. Each and every painter in our team has passion for providing excellent painting services to our clients and ensuring you are satisfied with painting finish provided.",
    },
    {
      title:
        "Get the most reliable interior & exterior Painters in Melbourne  ",
      content:
        "At Melbourne Painters our main mission is to make sure that we bring your colours to life. Whether you are painting a new warehouse, a hospital or renovating your dream home, our painters and decorators are here to bring your vision to life. We only use the best coatings for your needs, making sure to find the best solutions to your problems and ensuring to stay within your cost estimates. Each and every painter in our team has passion for providing excellent painting services to our clients and ensuring you are satisfied with painting finish provided.",
    },
    {
      title:
        "Get the most reliable interior & exterior Painters in Melbourne  ",
      content:
        "At Melbourne Painters our main mission is to make sure that we bring your colours to life. Whether you are painting a new warehouse, a hospital or renovating your dream home, our painters and decorators are here to bring your vision to life. We only use the best coatings for your needs, making sure to find the best solutions to your problems and ensuring to stay within your cost estimates. Each and every painter in our team has passion for providing excellent painting services to our clients and ensuring you are satisfied with painting finish provided.",
    },
    {
      title:
        "Get the most reliable interior & exterior Painters in Melbourne  ",
      content:
        "At Melbourne Painters our main mission is to make sure that we bring your colours to life. Whether you are painting a new warehouse, a hospital or renovating your dream home, our painters and decorators are here to bring your vision to life. We only use the best coatings for your needs, making sure to find the best solutions to your problems and ensuring to stay within your cost estimates. Each and every painter in our team has passion for providing excellent painting services to our clients and ensuring you are satisfied with painting finish provided.",
    },
  ];
  return (
    <div className="md:px-16">
      <h3 className="text-center md:my-8 text-brand-blue text-2xl font-medium">
        JOIN THE THOUSANDS WHO MAKE MELBOURNE PAINTERS THEIR CHOICE
      </h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {t.map((i) => (
          <SwiperSlide>
            <Image alt="" src={i} width={300} height={150} />{" "}
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="grid my-16 md:grid-cols-2 gap-8">
        {b.map((blog) => (
          <div>
            <h4 className="text-brand-blue text-2xl font-medium md:mb-8">
              {blog.title}
            </h4>
            <p className="text-xl font-light text-gray-600">{blog.content}</p>
          </div>
        ))}
      </section>
      <section className="grid gap-16">
        <section className="grid md:grid-cols-2 gap-16">
          <div>
            <Image
              src={
                "https://www.melbourne-painters.com.au/wp-content/uploads/2022/11/Goodwood-St-Front-Facade.jpg"
              }
              alt=""
              width={900}
              height={700}
            />
          </div>
          <div>
            <h4 className="text-4xl text-brand-blue font-semibold">
              Providing the highest standard of painting to our Melbourne
              client's
            </h4>
            <div>
              <p className="md:my-8 text-2xl font-thin">
                Being Melbourne’s leading name in painting isn’t something we
                take for granted. Every job we undertake is subject to our
                complete dedication to exceptional work and our team works to
                exacting standards, both industry and our own professional ones.
              </p>
              <p className="md:my-8 text-2xl font-thin">
                Regardless of whether you have a small residential project for
                us, or a much larger commercial one, we won’t cut corners or
                treat a smaller scale job with anything less than our full
                attention.
              </p>
              <p className="md:my-8 text-2xl font-thin">
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
        <section className="grid md:grid-cols-2 gap-16">
          <div>
            <h4 className="text-4xl text-brand-blue font-semibold">
              A Painting Company with years of experience behind each painter
            </h4>
            <div>
              <p className="md:my-8 text-2xl font-thin">
                Melbourne Painters only work with the best. Each of our team is
                chosen for their ability, their professionalism, and their
                reliability. They come from a range of backgrounds, which
                enables us to offer a complete range of painting services.
              </p>
              <p className="md:my-8 text-2xl font-thin">
                Our team is comprised of experienced commercial painters and
                residential painters, each of whom have worked on projects of
                every size. From small house paintings, to the biggest
                commercial premises, they have seen and done it all. This mean
                that regardless of how complicated or unique your project is, we
                have the team to take on and complete the challenge to the
                highest possible standard.
              </p>
              <p className="md:my-8 text-2xl font-thin">
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
              width={900}
              height={700}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
