// pages/api/sitemap.js
import { getServerSideSitemap } from 'next-sitemap';

export default getServerSideSitemap;

export const getServerSideProps = async ({ res }) => {
  const url = process.env.NEXT_WP_API_URL + `/project`;
  //  const project_url = process.env.NEXT_WP_API_URL + `/custom-page/719`;
  const response = await fetch(url).then((r) => r.json());

  //const data = await response.json();

  const entries = [1,2,3].map((item) => ({
    loc: `https://yourdomain.com/${item}`, // adjust this based on your dynamic route structure
    lastmod: new Date(item.updatedAt).toISOString(),
  }));

  return getServerSideSitemap({ entries })(res);
};
