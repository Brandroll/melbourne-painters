import React from "react";

export default function SimpleHero(props: { bgImg?: string }) {
  return (
    <>
      <section
        style={{
          backgroundImage: props.bgImg
            ? `url("${props.bgImg}")`
            : "url('/imgs/banner2.jpg')",
        }}
        className={`simple-hero  w-full   md:h-890  bg-top-center     bg-cover   bg-no-repeat      `}
      ></section>
    </>
  );
}
