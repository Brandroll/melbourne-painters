import WPHTMLContent from "@/components/UI/WPHTMLContent";
import { GetServerSideProps, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import { Project } from "@/types";
import YoastNextSeo from "@/components/UI/YoastNextSeo";
import ImageGallery from "@/components/UI/ImageGallery";
// import Fade from "react-reveal/Fade";
import Link from "next/link";
import SimpleHero from "@/components/UI/SimpleHero";

interface Props {
  project: Project;
}

export default function SingleProject({ project }: Props) {
  const { title, content, acf, yoast_head_json, x_featured_media_large } =
    project;

  return (
    <>
      <YoastNextSeo slug={`projects/${project.slug}`} {...yoast_head_json} />
      <SimpleHero bgImg={x_featured_media_large} />

      <section className="grid max-w-site-full   px-4  md:grid-cols-8 md:mx-auto">
        <div
          style={{ backgroundColor: "#EBEBEB" }}
          // style={{ backgroundColor: "#FAFAFA" }}
          className="col-span-6 xl:col-span-2 -mt-10 mb-8  "
        >
          <div className="  px-8 xl:px-12 py-8  pb-3.67  bg-brand-blue ">
            <h1 className="text-white    mt-4  font-semibold text-3xl xl:text-5xl lg:text-4xl">
              {title.rendered}
            </h1>
          </div>
        </div>
        <div className="col-span-8 xl:col-span-6">
          {/* <div className="flex justify-center gap-2 lg:justify-end">
            <Image
              src="/imgs/Painters-Melbourne-Accredited-Painter-512px-300x300.jpg"
              width={120}
              height={300}
              alt=""
            />
            <Image
              src="/imgs/warranty.png"
              width={80}
              style={{ objectFit: "contain" }}
              height={80}
              alt=""
            />
          </div> */}
          <div
            style={{ backgroundColor: "#FAFAFA" }}
            className="  px-8 xl:px-16 py-12 font-thin post-content"
          >
            <div className="project">
              <WPHTMLContent html={content.rendered} />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-site-full mx-auto px-4">
        <ImageGallery images={acf.images} />
      </div>

      {/* <div className="flex w-full mt-16  justify-center">
        <Image
          style={{ objectFit: "cover" }}
          src={x_featured_media_large}
          width={2040}
          height={1020}
          alt={title.rendered}
        />
      </div> */}
      {/* <section className="lg:mt-16 max-w-site-full mx-auto  px-4">
        <h1 className="  text-2xl lg:text-4xl text-center my-4 font-semibold text-brand-blue">
          {title.rendered}
        </h1>
        <hr />
      </section> */}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GetStaticPropsContext) => {
  const { slug } = params!;
  const url = process.env.NEXT_WP_API_URL + `/project?slug=${slug}`;
  const project = await fetch(url).then((r) => r.json());

  return {
    props: {
      project: project[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await fetch(process.env.NEXT_WP_API_URL + "/project").then(
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
