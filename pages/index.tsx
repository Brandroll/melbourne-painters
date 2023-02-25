import { HomePage, Project, Service } from "@/types";
import { GetStaticProps } from "next";

import dynamic from "next/dynamic";
interface Props {
  projects: Project[];
  services: Service[];
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

export default function Home(props: Props) {
  const { projects, services, homePageData } = props;

  return (
    <>
      <YoastNextSeo {...homePageData.yoast_head_json} />

      <Hero />
      <BelowHero />

      <Services data={services} />

      <Why cta />
      <Recent data={projects} />
      <Testinominal images={homePageData.acf.clients} />

      <Grid grid={homePageData.acf.grid} />
      <AlternateGrid content={homePageData.acf.content} />
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const url = process.env.NEXT_WP_API_URL + `/project`;
  const services_url = process.env.NEXT_WP_API_URL + `/service`;
  const homepage_url = process.env.NEXT_WP_API_URL + `/custom-page/671`;
  const projects = await fetch(url).then((r) => r.json());
  const services = await fetch(services_url).then((r) => r.json());
  const homePageData = await fetch(homepage_url).then((r) => r.json());

  return {
    props: {
      projects,
      services,
      homePageData,
    },
  };
};
