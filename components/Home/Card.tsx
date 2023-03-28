import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Card(props: any) {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const href = props.slug ? `/project/${props.slug}` : "#";
  //linear-gradient(172deg, rgba(0,0,0,1) 0%, rgba(27,27,27,0) 0%, rgba(40,40,55,0.1966911764705882) 0%, rgba(62,65,68,1) 97%) ,
  const _linear = `linear-gradient(172deg, rgba(0,0,0,1) 0%, rgba(27,27,27,0) 0%, rgba(40,40,55,0.1966911764705882) 0%, rgba(62,65,68,0.13506652661064422) 97%)`;
  return (
    <Link href={href}>
      <motion.div
        onMouseEnter={() => {
          setIsAnimationPlaying(true);
        }}
        onMouseLeave={() => {
          setIsAnimationPlaying(false);
        }}
        style={{
          backgroundImage: `linear-gradient(172deg, rgba(0,0,0,1) 0%, rgba(27,27,27,0) 0%, rgba(40,40,55,0.1966911764705882) 0%, rgba(62,65,68,0.13506652661064422) 97%), url(${props.x_featured_media_large})  `,
        }}
        className="    flex flex-col justify-end h-204 lg:h-350 bg-fixed bg-cover bg-center bg-no-repeat bg-Atura-Dandenong-South-Night"
      >
        <motion.div
          className={`bg-dark-overlay flex flex-col items-center justify-center   transition-all ease-in-out duration-500 delay-150  ${
            isAnimationPlaying ? " h-full  py-0 opacity-100 " : "h-12    "
          }`}
        >
          {isAnimationPlaying && <br />}

          <p className="text-center font-isidorasans uppercase text-sm  my-8 lg:px-16 text-white font-medium">
            {props.title.rendered}
          </p>
          {isAnimationPlaying && (
            <Link href={href}>
              <button
                className={`  font-isidorasans text-xs -mt-8  uppercase md:font-semibold text-white py-2 px-8    rounded-full   transition-all ease-in-out duration-500 delay-150   bg-brand-blue hover:bg-brand-blue-dark active:outline-none`}
              >
                View Project
              </button>
            </Link>
          )}
        </motion.div>
      </motion.div>
    </Link>
  );
}
