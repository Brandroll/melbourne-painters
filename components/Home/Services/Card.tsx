import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Card(props: any) {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => {
        setIsAnimationPlaying(true);
      }}
      onMouseLeave={() => {
        setIsAnimationPlaying(false);
      }}
      style={{
        backgroundImage: `linear-gradient(172deg, rgba(0,0,0,1) 0%, rgba(27,27,27,0) 0%, rgba(40,40,55,0.1966911764705882) 0%, rgba(62,65,68,1) 97%) , url(${props.x_featured_media_large})  `,
      }}
      className="    flex flex-col justify-end  h-350  bg-cover bg-center bg-no-repeat bg-Atura-Dandenong-South-Night"
    >
      <motion.div
        className={`bg-dark-overlay flex flex-col items-center justify-center transition-all ease-in-out duration-500 delay-150  ${
          isAnimationPlaying ? " h-full  py-4 opacity-100 " : "h-0  opacity-0"
        }`}
      >
        <h4 className="text-center  lg:px-16 text-white text-md font-medium">
          {props.title.rendered}
        </h4>

        <Link href={"/projects/" + props.slug}>
          <button className="font-roboto uppercase font-semibold text-white py-2 px-8 mt-2 rounded-full   bg-brand-blue hover:bg-brand-blue-dark active:outline-none">
            View Projects
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
