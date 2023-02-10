import Why from "@/components/Home/Why";
import SimpleHero from "@/components/UI/SimpleHero";
import WPHTMLContent from "@/components/UI/WPHTMLContent";
import YoastNextSeo from "@/components/UI/YoastNextSeo";
import { useModalAction } from "@/components/UI/Modal/Modal.context";
import Fade from "react-reveal/Fade";

import Image from "next/image";
import React from "react";

export default function About(props: { data: any }) {
  const { openModal } = useModalAction();
  const onFreeQuote = () => {
    openModal("FREE_QUOTE_HOME");
  };
  return (
    <>
      <YoastNextSeo {...props.data.yoast_head_json} />
      <SimpleHero />

      <section className="grid max-w-site-full  px-4  md:grid-cols-8 md:mx-auto">
        <div
          style={{ backgroundColor: "#EBEBEB" }}
          className="col-span-2 -mt-10 mb-8  "
        >
          <Fade bottom>
            <div className="p-8 pb-12 bg-brand-blue ">
              <h1 className="text-white mt-4 font-semibold text-5xl">
                ABOUT <br /> US
              </h1>
            </div>
          </Fade>
        </div>
        <div className="col-span-6">
          <div className="flex justify-center gap-2 lg:justify-end">
            <Image
              src="/imgs/Painters-Melbourne-Accredited-Painter-512px-300x300.jpg"
              width={150}
              height={300}
              alt=""
            />
            <Image
              src="/imgs/warranty.png"
              width={100}
              style={{ objectFit: "contain" }}
              height={80}
              alt=""
            />
          </div>
          <div
            style={{ backgroundColor: "#FAFAFA" }}
            className="  px-4 lg:px-16 py-12 font-thin post-content"
          >
            <WPHTMLContent html={props.data.content.rendered} />

            {props.data.acf.steps.map((step: any, i: number) => (
              <>
                <div className="lg:flex   gap-2 md:gap-8 my-8">
                  <div className="lg:px-8 mb-4 md:mb-0 md:mt-16 lg:my-auto  max-h-5 px-1 py-5 text-xs font-semibold lg:h-16  flex justify-center items-center lg:oval   rounded-full    bg-brand-blue   text-white  ">
                    {step.step_no}
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: step.info }}></p>
                </div>
                <div
                  className={`flex my-8 justify-center ${
                    i === props.data.acf.steps.length - 1 ? "hidden" : `${i}`
                  } `}
                >
                  <Image
                    src="/imgs/down.png"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      <div className="my-16">
        <Why cta={false} />
      </div>
      <div className="max-w-site-full mx-auto">
        <div className="flex px-4 flex-col  items-center justify-center   lg:justify-start">
          <p className="text-3xl text-center font-semibold text-brand-blue my-2">
            ASK FOR A NEXT DAY FREE QUOTE!
          </p>
          <p className="my-4 text-center">
            To get started on your quick quote please click button below.
          </p>
          <button
            onClick={onFreeQuote}
            className="text-xl  text-center bg-brand-blue hover:bg-brand-blue-dark rounded-full text-white px-16 py-4 font-thin"
          >
            NEXT DAY FREE QUOTE
          </button>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const url = process.env.NEXT_WP_API_URL + "/pages?slug=about-us";
  const data = await fetch(url).then((r) => r.json());

  return {
    props: {
      data: data[0],
    },
  };
};
