import Head from "next/head";
import Header from "@/components/Layout/Header";
import Image from "next/image";
import Why from "@/components/Home/Why";
import Recent from "@/components/Home/Recent";
import Testinominal from "@/components/Home/Testinominal";
import Footer from "@/components/Layout/Footer";
import { HomePage, Project, Service } from "@/types";
import Hero from "@/components/UI/Hero";
import Services from "@/components/Home/Services/Services";
import YoastNextSeo from "@/components/UI/YoastNextSeo";
import Grid from "@/components/Home/Grid";
import AlternateGrid from "@/components/Home/AlternateGrid";
import BelowHero from "@/components/UI/BelowHero";

interface Props {
  projects: Project[];
  services: Service[];
  homePageData: HomePage;
}
export default function ServicePage(props: Props) {
  const { projects, services, homePageData } = props;

  return (
    <>
      <YoastNextSeo {...homePageData.yoast_head_json} />
      {/* <div className="pb-3"></div> */}
      <Hero />
      <BelowHero />

      <Services data={services} />

      <Why cta={false} />
      <Recent data={projects} />
      <Testinominal images={homePageData.acf.clients} />

      <Grid grid={homePageData.acf.grid} />
      <AlternateGrid content={homePageData.acf.content} />
    </>
  );
}
export const getStaticProps = async () => {
  const url = process.env.NEXT_WP_API_URL + `/projects`;
  const services_url = process.env.NEXT_WP_API_URL + `/service`;
  const homepage_url = process.env.NEXT_WP_API_URL + `/pages/107`;
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
