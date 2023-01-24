import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import React from "react";

export default function Contact() {
  return (
    <>
      <Header />
      <h1 className={`text-3xl font-bold underline  `}>Hello world!</h1>

      <section className="grid my-24 px-16  md:grid-cols-8 gap-1">
        <div className="col-span-6 bg-gray-100">
          <form className="grid grid-cols-2 p-20 gap-8 font-normal">
            <div className="grid ">
              <label className="text-center text-brand-blue mb-3 text-xl">
                First Name
              </label>
              <input
                className="p-4 border-b-4 border-brand-blue rounded-md outline-none"
                placeholder="First Name"
                type={"text"}
                required
              />
            </div>
            <div className="grid ">
              <label className="text-center text-brand-blue mb-3 text-xl">
                Last Name
              </label>
              <input
                className="p-4 border-b-4 border-brand-blue rounded-md outline-none"
                placeholder="Last Name"
                type={"text"}
                required
              />
            </div>
            <div className="grid ">
              <label className="text-center text-brand-blue mb-3 text-xl">
                Your Email Address
              </label>
              <input
                className="p-4 border-b-4 border-brand-blue rounded-md outline-none"
                placeholder="Your Email Address"
                type={"email"}
                required
              />
            </div>
            <div className="grid ">
              <label className="text-center text-brand-blue mb-3 text-xl">
                Your Phone Number
              </label>
              <input
                className="p-4 border-b-4 border-brand-blue rounded-md outline-none"
                placeholder="Your Phone Number"
                type={"text"}
                required
              />
            </div>

            <div className="grid ">
              <label className="text-center text-brand-blue mb-3 text-xl">
                Enquire About
              </label>
              <select
                className="p-4 border-b-4 border-brand-blue rounded-md outline-none"
                placeholder="Your Phone Number"
                required
              >
                <option value="Please select">Please select</option>
                <option value="Power Washing">Power Washing</option>
                <option value="Brick, Concrete, Drywall &amp; Plaster Painting">
                  Brick, Concrete, Drywall &amp; Plaster Painting
                </option>
                <option value="Drywall &amp; Plaster Repair">
                  Drywall &amp; Plaster Repair
                </option>
                <option value="Structural Steel Painting">
                  Structural Steel Painting
                </option>
                <option value="Concrete Finishing">Concrete Finishing</option>
                <option value="Wood Finishing">Wood Finishing</option>
                <option value="Elastomer Coatings">Elastomer Coatings</option>
                <option value="Stripping &amp; Refinishing">
                  Stripping &amp; Refinishing
                </option>
                <option value="Low Voc &amp; No Voc Paints">
                  Low Voc &amp; No Voc Paints
                </option>
                <option value="Urethane &amp; Epoxy Coatings">
                  Urethane &amp; Epoxy Coatings
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="grid ">
              <label className="text-center text-brand-blue mb-3 text-xl">
                When can we contact you
              </label>
              <select
                className="p-4 border-b-4 border-brand-blue rounded-md outline-none"
                placeholder="Your Phone Number"
                required
              >
                <option value="Please select">Please select</option>
                <option value="Morning 9am - 12pm">Morning 9am - 12pm</option>
                <option value="Afternoon 12pm - 5pm">
                  Afternoon 12pm - 5pm
                </option>
                <option value="Evening 5pm - 7PM">Evening 5pm - 7PM</option>
                <option value="Late evening 7PM - 9PM">
                  Late evening 7PM - 9PM
                </option>
              </select>
            </div>
            <div className="grid col-span-2">
              <label className="text-center text-brand-blue mb-3 text-xl">
                Message
              </label>
              <textarea
                className="p-4 border-b-4 border-brand-blue rounded-md outline-none"
                placeholder="Postcode / Suburb"
                required
              />
            </div>
            <button className="py-2 px-8 bg-brand-blue rounded-3xl text-white max-w-fit">
              Submit
            </button>
          </form>
        </div>
        <div className="col-span-2 px-2">
          <div>
            <h3 className="text-3xl font-semibold text-brand-blue">
              Get A Free Quote
            </h3>
            <p className="my-4 text-xl text-gray-700 font-thin">
              Want to discuss a project over the phone or book your free on-site
              inspection give us a call and one of our friendly staff will
              endeavour to assist you with your enquiry.
            </p>
          </div>
          <div className=" flex flex-col gap-8 text-xl">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-brand-blue"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <a href="tel:1300662344">
                <span className="elementor-icon-list-icon">
                  <i aria-hidden="true" className="fas fa-phone-alt"></i>{" "}
                </span>
                <span className="elementor-icon-list-text">1300 662 344</span>
              </a>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-brand-blue"
              >
                <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
              </svg>
              <a href="mailto:sales@melbourne-painters.com.au">
                <span className="elementor-icon-list-icon">
                  <i aria-hidden="true" className="icon icon-email"></i>{" "}
                </span>
                <span className="elementor-icon-list-text">
                  sales@melbourne-painters.com.au
                </span>
              </a>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-brand-blue"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <p>16 Boston Court Narre Warren VIC 3805</p>
            </div>
            <iframe
              loading="lazy"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBYNrbU8OCzRjyyGyjxOWqVWSSWsTFpb2Q&amp;q=Melbourne&amp;zoom=9"
              title="Melbourne"
              height={400}
              aria-label="Melbourne"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
