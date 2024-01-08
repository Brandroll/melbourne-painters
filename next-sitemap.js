<<<<<<< HEAD
const fs = require('fs');

const FRONTEND_URI = 'https://www.melbourne-painters.com.au';
const url = 'https://cms.melbourne-painters.com.au/wp-json/wp/v2' + `/project`;
const url_suburbs =
  'https://cms.melbourne-painters.com.au/wp-json/wp/v2' + `/suburbs`;
const url_service =
  'https://cms.melbourne-painters.com.au/wp-json/wp/v2' + `/service`;

// generate current data and time to given formate that required in sitemap
=======
const fs = require("fs");

const FRONTEND_URI = "https://www.melbourne-painters.com.au"
const url = "https://cms.melbourne-painters.com.au/wp-json/wp/v2" + `/project`;

// generate current data and time to given formate that required in sitemap 
>>>>>>> 13bb86cde790c492e936646669a4b0cda6155793
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+00:00`;

<<<<<<< HEAD
// generating sitemap here
async function generateSitemap() {
  const projects = await fetch(url).then((r) => r.json());
  const suburbs = await fetch(url_suburbs).then((r) => r.json());
  const service = await fetch(url_service).then((r) => r.json());
=======
// generating sitemap here 
async function generateSitemap() {

  const projects = await fetch(url).then((r) => r.json());
>>>>>>> 13bb86cde790c492e936646669a4b0cda6155793

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>${FRONTEND_URI}</loc><lastmod>${formattedDateTime}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
      <url><loc>${FRONTEND_URI}/about</loc><lastmod>${formattedDateTime}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
      <url><loc>${FRONTEND_URI}/contact</loc><lastmod>${formattedDateTime}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
      <url><loc>${FRONTEND_URI}/free-quote</loc><lastmod>${formattedDateTime}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
      <url><loc>${FRONTEND_URI}/project</loc><lastmod>${formattedDateTime}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
      <url><loc>${FRONTEND_URI}/services</loc><lastmod>${formattedDateTime}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
<<<<<<< HEAD
      ${projects
        ?.map(
          (item) => `<url>
=======
      ${projects?.map((item) => `<url>
>>>>>>> 13bb86cde790c492e936646669a4b0cda6155793
      <loc>${FRONTEND_URI}/project/${item.slug}</loc>
        <lastmod>${item?.modified}+00:00</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.80</priority>
<<<<<<< HEAD
      </url> `
        )
        .join('')}
        ${suburbs
          ?.map(
            (item) => `<url>
        <loc>${FRONTEND_URI}/${item.slug}</loc>
          <lastmod>${item?.modified}+00:00</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.80</priority>
        </url> `
          )
          .join('')}
          ${service
            ?.map(
              (item) => `<url>
          <loc>${FRONTEND_URI}/${item.slug}</loc>
            <lastmod>${item?.modified}+00:00</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.80</priority>
          </url> `
            )
            .join('')}
    </urlset>
  `;
  fs.writeFileSync('public/sitemap-0.xml', sitemap);
}

generateSitemap();
=======
      </url> `).join("")}
    </urlset>
  `;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();











>>>>>>> 13bb86cde790c492e936646669a4b0cda6155793
