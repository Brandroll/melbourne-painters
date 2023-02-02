import WPHTMLContent from "@/components/UI/WPHTMLContent";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import { Project } from "@/types";
import YoastNextSeo from "@/components/UI/YoastNextSeo";
import ImageGallery from "@/components/UI/ImageGallery";
import Fade from "react-reveal/Fade";

interface Props {
  project: Project;
}

export default function SingleProject({ project }: Props) {
  const { title, content, acf, yoast_head_json, x_featured_media_large } =
    project;

  return (
    <>
      <YoastNextSeo {...yoast_head_json} />

      <div className="flex w-full mt-16  justify-center">
        <Image
          style={{ objectFit: "cover" }}
          src={x_featured_media_large}
          width={2040}
          height={1020}
          alt={title.rendered}
        />
      </div>
      <section className="lg:mt-16 max-w-site-full mx-auto  px-4">
        <h1 className="  text-2xl lg:text-4xl text-center my-4 font-semibold text-brand-blue">
          {title.rendered}
        </h1>
        <hr />
        <Fade bottom>
          <div className="project">
            <WPHTMLContent html={content.rendered} />
          </div>

          <ImageGallery images={acf.images} />
        </Fade>
      </section>
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
