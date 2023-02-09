import Image from "next/image";
import Why from "@/components/Home/Why";
import { Service } from "@/types";
import Hero from "@/components/UI/Hero";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import YoastNextSeo from "@/components/UI/YoastNextSeo";
import Grid from "@/components/Home/Grid";
import AlternateGrid from "@/components/Home/AlternateGrid";
import BelowHero from "@/components/UI/BelowHero";
import Services from "@/components/Home/Services/Services";
import Recent from "@/components/Home/Recent";
interface Props {
  service: Service;
  isSuburbs:Boolean;
  services?:any
  projects?:any
}
export default function SinglePage(props: Props) {
  const { service,isSuburbs,services ,projects} = props;
  if (!service) {
    return null;
  }
  return (
    <>
      <YoastNextSeo {...service.yoast_head_json} />

      <Hero bgImg={service.x_featured_media_large} />
      <BelowHero />
      {isSuburbs&&services&&<Services data={services} />} 
      <Why cta={false} />
     {isSuburbs&&projects && <Recent data={projects} /> }

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
  
  if(t===null){
    
     const url = process.env.NEXT_WP_API_URL + `/suburbs?slug=${slug}`;
      const project_url = process.env.NEXT_WP_API_URL + `/project`;
  const services_url = process.env.NEXT_WP_API_URL + `/service`;
   const projects = await fetch(project_url).then((r) => r.json());
  const services = await fetch(services_url).then((r) => r.json());
  
  const suburbs = await fetch(url).then((r) => r.json());
     return {
    props: {
      service: suburbs.length>0 ?suburbs[0]:null,
       isSuburbs:true,
       projects,
       services
       
  
    },
  };
  }else{
     return {
    props: {
      service: t,
       isSuburbs:false
    },
  };
  }
 
};

export const getStaticPaths: GetStaticPaths = async () => {
  const suburbs_url= process.env.NEXT_WP_API_URL + "/suburbs"
  const projects = await fetch(process.env.NEXT_WP_API_URL + "/service").then(
    (r) => r.json()
  );
  
  const suburbs= await fetch(suburbs_url).then(
    (r) => r.json()
  );

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
