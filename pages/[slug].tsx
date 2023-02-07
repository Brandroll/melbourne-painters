import Image from "next/image";
import Why from "@/components/Home/Why";
import { Service } from "@/types";
import Hero from "@/components/UI/Hero";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import YoastNextSeo from "@/components/UI/YoastNextSeo";
import Grid from "@/components/Home/Grid";
import AlternateGrid from "@/components/Home/AlternateGrid";
import BelowHero from "@/components/UI/BelowHero";
interface Props {
  service: Service;
}
export default function SinglePage(props: Props) {
  const { service } = props;
  if (!service) {
    return null;
  }
  return (
    <>
      <YoastNextSeo {...service.yoast_head_json} />

      <Hero bgImg={service.x_featured_media_large} />
      <BelowHero />
      <Why cta={false} />

      <Grid grid={service.acf.grid} />
      <AlternateGrid content={service.acf.content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const { slug } = params!;
  const url = process.env.NEXT_WP_API_URL + `/service?slug=${slug}`;
  const services = await fetch(url).then((r) => r.json());
  const t = services.length > 0 ? services[0] : null;
  return {
    props: {
      service: t,
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
