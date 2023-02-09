import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import React from "react";
import WPHTMLContent from "../UI/WPHTMLContent";
import Fade from "react-reveal/Fade";

export default function AlternateGrid({
  content,
}: {
  content: {
    information: {
      heading: string;
      info: string;
    };
    image: string;
  }[];
}) {
  function oddOrEven(num: number) {
    if (num % 2 == 0) return "even";
    return "odd";
  }
  const calc = (i: number) => {
    return oddOrEven(i + 1);
  };
  if (!content) {
    return null;
  }

  return (
    <section className="grid alternate-grid lg:gap-16 px-4 max-w-site-full mx-auto ">
      {content.map((content, i) => (
        <>
          <section className="grid lg:grid-cols-2 gap-4   ">
            <div
              className={`${
                calc(i) === "even" ? "md:order-2 mt-4  lg:mt-0" : ""
              } flex justify-center items-center `}
            >
              {calc(i) === "even" ? (
                <Fade right>
                  <Image src={content.image} alt="" width={900} height={900} />
                </Fade>
              ) : (
                <Fade left>
                  <Image src={content.image} alt="" width={900} height={900} />
                </Fade>
              )}
            </div>
            <div
              className={`${
                calc(i) === "even" ? "md:order-1 lg:mr-12 " : "lg:ml-16"
              }  mt-8 lg:mt-0  flex`}
            >
              <div className="flex flex-col justify-center  ">
                <h4
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content.information.heading),
                  }}
                  className="text-brand-blue text-3xl lg:text-2xl  font-medium md:mb-2"
                />
                <WPHTMLContent html={content.information.info} />
              </div>
            </div>
          </section>
        </>
      ))}
    </section>
  );
}
