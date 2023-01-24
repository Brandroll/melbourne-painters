import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import WPHTMLContent from "@/components/UI/WPHTMLContent";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import { NextSeo } from "next-seo";
import { Project } from "@/types";
import YoastNextSeo from "@/components/UI/YoastNextSeo";
import ImageGallery from "@/components/UI/ImageGallery";

interface Props {
  project: Project;
}

export default function SingleProject({ project }: Props) {
  const { title, content, acf, yoast_head_json, x_featured_media_large } =
    project;

  return (
    <>
      <YoastNextSeo {...yoast_head_json} />
      <Header />
      <div>
        <Image
          src={x_featured_media_large}
          width={2040}
          height={600}
          alt={title.rendered}
        />
      </div>
      <section className="mt-40 mx-16">
        <h1 className="mt-16 text-4xl text-center my-4 font-semibold text-brand-blue">
          {title.rendered}
        </h1>
        <hr />

        <WPHTMLContent html={content.rendered} />
        <ImageGallery images={acf.images} />
      </section>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const { slug } = params!;
  const url = process.env.NEXT_WP_API_URL + `/projects?slug=${slug}`;
  const project = await fetch(url).then((r) => r.json());

  return {
    props: {
      project: project[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await fetch(process.env.NEXT_WP_API_URL + "/projects").then(
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
