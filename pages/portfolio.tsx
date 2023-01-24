import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

export default function Portfolio() {
  return (
    <>
      <Header />
      <section className="mt-40 mx-16">
        <h1 className="mt-16 text-4xl text-center my-4 font-semibold text-brand-blue">
          PROJECTS
        </h1>
        <hr />
        <p className="my-4 text-xl">
          At Melbourne Painters Group our core value is delivering high-quality
          painting finishes that not only look great to the eye but will last
          many years to come. We believe that hard work, attention to detail and
          using ultra-premium painting products are what creates a long-lasting,
          breath taking painting finish. Below you will find the links to some
          of our recent projects we have explained what products and methods our
          painters have used to achieve great results for these projects. Should
          you have any further questions about these projects or want to get a
          free measure and quote feel free to contact us on our contact us page
          and one of our friendly staff will endeavor to assist you with your
          inquiry.
        </p>
        <div className="grid md:grid-cols-3 my-8">
          <div className="overflow-hidden">
            <div className="  bg-overlay  font-semibold bg-center hover:scale-110 transition-all duration-700 ease-in-out  bg-dicken-streen text-xl text-white  bg-no-repeat bg-cover border flex flex-col items-center gap-8 justify-center py-32">
              <p>DICKEN ST, GLEN IRIS</p>
              <button className="px-6 py-3 hover:bg-brand-blue-dark bg-brand-blue rounded-3xl">
                VIEW PROJECTS
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
