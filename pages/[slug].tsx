import { HomePage, Service } from "@/types";
import dynamic from "next/dynamic";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

interface Props {
  service: Service;
  isSuburbs: Boolean;
  services?: any;
  projects?: any;
  homePageData: HomePage;
}

const YoastNextSeo = dynamic(() => import("@/components/UI/YoastNextSeo"));
const Hero = dynamic(() => import("@/components/UI/Hero"));
const BelowHero = dynamic(() => import("@/components/UI/BelowHero"));
const Services = dynamic(() => import("@/components/Home/Services/Services"));
const Why = dynamic(() => import("@/components/Home/Why"));
const Testinominal = dynamic(() => import("@/components/Home/Testinominal"));
const Grid = dynamic(() => import("@/components/Home/Grid"));
const AlternateGrid = dynamic(() => import("@/components/Home/AlternateGrid"));
const Recent = dynamic(() => import("@/components/Home/Recent"));
export default function SinglePage(props: Props) {
  const { service, isSuburbs, services, projects, homePageData } = props;
  if (!service) {
    return null;
  }
  return (
    <>
      <YoastNextSeo {...service.yoast_head_json} />

      <Hero bgImg={service.x_featured_media_large} />
      <BelowHero />
      {isSuburbs && services && <Services data={services} />}
      <Why cta={false} />
      {projects && <Recent data={projects} />}
      <Testinominal images={homePageData.acf.clients} />

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
  const homepage_url = process.env.NEXT_WP_API_URL + `/custom-page/671`;
  const homePageData = await fetch(homepage_url).then((r) => r.json());

  const t = services.length > 0 ? services[0] : null;
  const project_url = process.env.NEXT_WP_API_URL + `/project`;

  const projects = await fetch(project_url).then((r) => r.json());

  if (t === null) {
    const url = process.env.NEXT_WP_API_URL + `/suburbs?slug=${slug}`;
    const services_url = process.env.NEXT_WP_API_URL + `/service`;
    const services = await fetch(services_url).then((r) => r.json());

    const suburbs = await fetch(url).then((r) => r.json());
    return {
      props: {
        service: suburbs.length > 0 ? suburbs[0] : null,
        isSuburbs: true,
        projects,
        services,
        homePageData,
      },
    };
  } else {
    return {
      props: {
        service: t,
        isSuburbs: false,
        projects,
        homePageData,
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const suburbs_url = process.env.NEXT_WP_API_URL + "/suburbs";
  const projects = await fetch(process.env.NEXT_WP_API_URL + "/service").then(
    (r) => r.json()
  );

  const suburbs = await fetch(suburbs_url).then((r) => r.json());

  const projects_path = projects.map((project: any) => {
    return {
      params: { slug: project.slug.toString() },
    };
  });
  const suburbs_path = suburbs.map((project: any) => {
    return {
      params: { slug: project.slug.toString() },
    };
  });
  const paths = projects_path.concat(suburbs_path);

  return {
    paths,
    fallback: "blocking",
  };
};
