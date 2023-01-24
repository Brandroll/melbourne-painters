import Head from "next/head";
import Header from "@/components/Layout/Header";
import Image from "next/image";
import Why from "@/components/Home/Why";
import Recent from "@/components/Home/Recent";
import Testinominal from "@/components/Home/Testinominal";
import Footer from "@/components/Layout/Footer";
import { Project, Service } from "@/types";
import Hero from "@/components/UI/Hero";
import Services from "@/components/Home/Services/Services";

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import DOMPurify from "isomorphic-dompurify";
import YoastNextSeo from "@/components/UI/YoastNextSeo";
interface Props {
  service: Service;
}
export default function SinglePage(props: Props) {
  const { service } = props;

  return (
    <>
      <YoastNextSeo {...service.yoast_head_json} />
      <Header />

      <div className="pb-3"></div>
      <Hero />

      <section className="grid bg-white md:grid-cols-8 items-center px-4   md:px-16  ">
        <div className="col-span-6 ">
          <h3
            className={` md:text-2xl  font-isidorasans font-medium my-4 md:mb-8 text-brand-blue `}
          >
            LONG-TERM ASSET PROTECTION
          </h3>
          <p
            className={`md:text-xl font-isidorasans_regular    text-black md:text-gray-400 `}
          >
            Melbourne Painters has a scheduled and systematic approach in
            providing <br /> preventive and proactive maintenance.
          </p>
        </div>
        <div className="col-span-2 flex items-center">
          <Image
            src="/imgs/Painters-Melbourne-Accredited-Painter-512px-300x300.jpg"
            width={400}
            height={300}
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
      </section>

      <Why />

      <section className="grid my-16 md:grid-cols-2 gap-8 mx-16">
        {service.acf.grid.map((blog) => (
          <div>
            <h4
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.heading),
              }}
              className="text-brand-blue text-2xl font-medium md:mb-8"
            />
            <div className="post-content">
              <p
                className="text-xl font-light text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(blog.content),
                }}
              />
            </div>
          </div>
        ))}
      </section>
      <section className="grid gap-16 mx-16">
        {service.acf.content.map((content) => (
          <>
            <section className="grid md:grid-cols-2 gap-16">
              <div className=" ">
                <Image src={content.image} alt="" width={900} height={700} />
              </div>
              <div>
                <h4
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content.information.heading),
                  }}
                  className="text-brand-blue text-2xl font-medium md:mb-8"
                />
                <div className="post-content">
                  <p
                    className="text-xl font-light text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(content.information.info),
                    }}
                  />
                </div>
              </div>
            </section>
          </>
        ))}
      </section>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const { slug } = params!;
  const url = process.env.NEXT_WP_API_URL + `/service?slug=${slug}`;
  const services = await fetch(url).then((r) => r.json());

  return {
    props: {
      service: services[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await fetch(process.env.NEXT_WP_API_URL + "/service").then(
    (r) => r.json()
  );

  const paths = projects.map((project: any) => {
    return {
      params: { slug: project.slug.toString() },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
