import { YoastSeoData } from "@/types";
import { NextSeo } from "next-seo";

export default function YoastNextSeo(props: YoastSeoData) {
  const openGrap = {
    locale: props.og_locale,
    type: props.og_type,
    title: props.og_title,
    description: props.og_description,
    url: props.og_url,
    siteName: props.og_site_name,
    // images: [props.og_image ? [...props.og_image] : null],
  };
  return (
    <NextSeo
      title={props.title}
      openGraph={openGrap}
      canonical={props.canonical}
    />
  );
}
