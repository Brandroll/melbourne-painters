export default function Hero() {
  return (
    <section className="mt-24 bg-top-center  bg-no-repeat bg-cover  bg-desktop-banner pt-20 pb-16 flex flex-col items-center justify-items-center">
      <div className="my-32">
        <h3 className="text-6xl scale-125	 font-isidorasans font-semibold text-brand-blue mt-24">
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
        <div className="flex justify-center font-semibold mt-16 mb-24">
          <button className="p-6 px-28 font-thin rounded-l-3xl bg-brand-blue text-2xl text-white">
            FREE <span className="font-bold">QUOTE</span>{" "}
          </button>
          <button className="p-6 px-28  rounded-r-3xl  bg-brand-blue-dark  text-2xl text-white">
            VIEW <span className="font-bold">PROJECTS</span>
          </button>
        </div>
      </div>
    </section>
  );
}
