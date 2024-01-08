const fs = require("fs");

const FRONTEND_URI = "https://www.melbourne-painters.com.au"
const url = "https://cms.melbourne-painters.com.au/wp-json/wp/v2" + `/project`;

// generate current data and time to given formate that required in sitemap 
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+00:00`;

// generating sitemap here 
async function generateSitemap() {

  const projects = await fetch(url).then((r) => r.json());

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>${FRONTEND_URI}</loc><lastmod>${formattedDateTime}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
      <url><loc>${FRONTEND_URI}/about</loc><lastmod>${formattedDateTime}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
      <url><loc>${FRONTEND_URI}/contact</loc><lastmod>${formattedDateTime}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
      <url><loc>${FRONTEND_URI}/free-quote</loc><lastmod>${formattedDateTime}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
      <url><loc>${FRONTEND_URI}/project</loc><lastmod>${formattedDateTime}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
      <url><loc>${FRONTEND_URI}/services</loc><lastmod>${formattedDateTime}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
      ${projects?.map((item) => `<url>
      <loc>${FRONTEND_URI}/project/${item.slug}</loc>
        <lastmod>${item?.modified}+00:00</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.80</priority>
      </url> `).join("")}
    </urlset>
  `;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();











