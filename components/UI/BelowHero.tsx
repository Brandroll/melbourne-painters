import Image from "next/image";

export default function BelowHero() {
  return (
    <section className="grid below-hero  mt-10 sm:mt-0   sm:py-0 lg:-mt-20 my-2 max-w-site-full mx-auto bg-white md:grid-cols-8 lg:gap-8 items-center px-2 ">
      <div className="hidden md:block col-span-6 ">
        <h3
          className={` text-md  font-isidorasans font-medium my-2 md:mb-8 text-brand-blue `}
        >
          LONG-TERM ASSET PROTECTION
        </h3>
        <p className={` leading-6 font-isidorasans_regular    text-black  `}>
          Melbourne Painters has a scheduled and systematic approach in
          providing <br /> preventive and proactive maintenance.
        </p>
      </div>
      <div className=" pb-7 col-span-6 self-start  max-w-full md:col-span-2 flex justify-center md:justify-start   md:items-center gap-4">
        <Image
          src="/imgs/Painters-Melbourne-Accredited-Painter-512px-300x300.jpg"
          width={110}
          height={300}
          style={{ objectFit: "contain", maxHeight: "120px" }}
          alt=""
        />
        <Image
          src="/imgs/warranty.png"
          width={80}
          style={{ objectFit: "contain", maxHeight: "100px" }}
          height={80}
          alt=""
        />
      </div>
    </section>
  );
}
