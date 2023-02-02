import ButtonGroup from "./ButtonGroup";
// className="  relative lg:mt-0  hero-section  w-full  lg:py-0  bg-no-repeat bg-contain md:bg-cover    flex flex-col lg:items-center  justify-items-center"
//
export default function Hero(props: { bgImg?: string }) {
  return (
    <>
      <section
        style={{
          backgroundImage: props.bgImg
            ? `url("${props.bgImg}")`
            : "url('/imgs/desktop-banner.jpg')",
        }}
        className="   hero-section  "
      >
        <div className="hidden md:block  ">
          <div className="mx-auto  my-32 max-w-site-full">
            <h3 className="font-isidorasans_semi_bold hero-heading text-6xl   text-center	  font-semibold text-brand-blue ">
              We bring your
              <span className="_change italic">C</span>
              <span className="change italic">o</span>
              <span className="change2 italic">l</span>
              <span className="change3 italic">o</span>
              <span className="change4 italic">u</span>
              <span className="change5 italic">r</span>
              <span className="change6 italic">s </span>
              to life
            </h3>
            <div className="mt-8">
              <ButtonGroup />
            </div>
          </div>
        </div>
        <div className="relative  hero-btn  ">
          <div className="md:hidden   w-full mx-auto">
            <div className="grid grid-cols-2 px-3">
              <button className="p-4  md:px-16 font-semibold rounded-l-3xl text-xs sm:text-sm bg-brand-blue lg:text-2xl text-white">
                FREE <span className="font-bold">QUOTE</span>{" "}
              </button>
              <button className="p-4   md:px-12 hover:bg-brand-blue  font-semibold rounded-r-3xl text-xs sm:text-sm bg-brand-blue-dark  lg:text-2xl text-white">
                VIEW <span className="font-bold">PROJECTS</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
