import Image from "next/image";

export default function BelowHero() {
  return (
    <section className="grid below-hero  mt-10 sm:mt-0   sm:py-0 lg:-mt-20 my-2 max-w-site-full mx-auto bg-white md:grid-cols-8 gap-8 items-center px-2 ">
      <div className="col-span-6 ">
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
      <div className="col-span-6 md:col-span-2 flex justify-center md:justify-start  w-full md:items-center gap-4">
        <Image
          src="/imgs/Painters-Melbourne-Accredited-Painter-512px-300x300.jpg"
          width={150}
          height={300}
          alt=""
        />
        <Image
          src="/imgs/warranty.png"
          width={100}
          style={{ objectFit: "cover" }}
          height={80}
          alt=""
        />
      </div>
    </section>
  );
}
