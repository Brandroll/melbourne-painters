import ButtonGroup from "./ButtonGroup";
import ButtonGroupMobile from "./ButtonGroupMobile";
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
            <div className="mt-4 lg:mt-8">
              <ButtonGroup />
            </div>
          </div>
        </div>
        <ButtonGroupMobile />
      </section>
    </>
  );
}
