module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.melbourne-painters.com.au",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/protected-page", "/api/contact"],
};
