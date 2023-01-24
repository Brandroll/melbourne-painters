import Why from "@/components/Home/Why";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <Header />
      <section className="grid mt-32 md:grid-cols-8 md:mx-16">
        <div className="col-span-2 bg-gray-300">
          <div className="p-8 bg-brand-blue ">
            <h1 className="text-white font-semibold text-7xl">ABOUT US</h1>
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex justify-end">
            <Image
              src="/imgs/Painters-Melbourne-Accredited-Painter-512px-300x300.jpg"
              width={200}
              height={100}
              alt=""
            />
            <Image
              src="/imgs/warranty.png"
              width={100}
              style={{ objectFit: "contain" }}
              height={50}
              alt=""
            />
          </div>
          <div className="bg-gray-50 px-16 py-12 font-thin text-xl">
            <p>
              Melbourne Painters Group is a top quality painting firm, Located
              in the South East of Melbourne and servicing all over Victoria,
              it’s our absolute commitment to safety and quality that has made
              us one of Victorias leading Painting and Decorating companies. We
              know that a satisfied customer is our best form of advertisement,
              and as such we are always striving to give you the best possible
              results. Our trademarks are reliability, preparation, top quality
              finishes and absolute regard for our customers.
            </p>
            <p>
              Here are some of the steps we take to ensure 100% satisfaction and
              peace of mind for our clients.
            </p>

            <div className="flex md:gap-8 mt-32">
              <div className="px-8 font-semibold h-16 flex justify-center items-center oval   rounded-full  text-md bg-brand-blue   text-white  ">
                STEP01.
              </div>
              <p>
                A Melbourne Painters supervisor will go through all the work
                that is to be carried out and answer your entire questions at
                any time. Safety comes first at Melbourne Painters we value
                safety and as such all our employees are trained in OHS and are
                fully insured. Melbourne Painters can also supply all types of
                access equipment upon request. All our staff are fully qualified
                Painters and Decorators and highly trained in all sectors of the
                painting and decorating industry to ensure 100% satisfaction and
                peace of mind for our clients.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/imgs/down.png" width={50} height={50} alt="icon" />
            </div>

            <div className="flex md:gap-8 mt-32">
              <div className="px-8 font-semibold h-16 flex justify-center items-center oval   rounded-full  text-md bg-brand-blue   text-white  ">
                STEP02.
              </div>
              <p>
                From the initial quote to the completion of your project,
                Melbourne Painters will work with you in a highly professional
                manner and take care of all your painting and decorating
                requirements. These will include but not limited to colour
                consulting, permits, access equipment and problem solving.
              </p>
            </div>
            <div className="flex justify-center items-center my-8">
              <Image src="/imgs/down.png" width={50} height={50} alt="icon" />
            </div>

            <div className="flex md:gap-8 mt-32">
              <div className="px-8 font-semibold h-16 flex justify-center items-center oval   rounded-full  text-md bg-brand-blue   text-white  ">
                STEP02.
              </div>
              <p>
                Melbourne Painters understands all requirements as either
                domestic, commercial or industrial client. Please contact us for
                all your enquiries and quotes. Our friendly and highly trained
                staffs are looking forward to assisting you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="my-16">
        <Why />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-semibold text-brand-blue my-2">
          ASK FOR A NEXT DAY FREE QUOTE!
        </p>
        <p className="my-4">
          To get started on your quick quote please click button below.
        </p>
        <button className="text-xl bg-brand-blue hover:bg-brand-blue-dark rounded-full text-white px-16 py-4 font-thin">
          NEXT DAY FREE QUOTE
        </button>
      </div>
      <Footer />
    </>
  );
}
