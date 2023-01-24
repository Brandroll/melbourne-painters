export const Routes = {
  home: "/",
  checkout: "/checkout",
  checkoutDigital: "/checkout/digital",
  checkoutGuest: "/checkout/guest",
  profile: "/profile",
  changePassword: "/change-password",
  orders: "/orders",
  order: (tracking_number: string) =>
    `/orders/${encodeURIComponent(tracking_number)}`,
  refunds: "/refunds",
  help: "/help",
  logout: "/logout",
  coupons: "/offers",
  orderReceived: "/order-received",
  products: "/products",
  projects: "/projects",

  product: (slug: string) => {
    // if (asPath) {
    //   return `/products/${encodeURIComponent(slug)}?type=${asPath}`;
    // }
    return `/products/${encodeURIComponent(slug)}`;
  },
  privacy: "/privacy",
  terms: "/terms",
  faq: "/faq",
  contactUs: "/contact",
  shops: "/shops",
  shop: (slug: string) => `/shops/${encodeURIComponent(slug)}`,
  downloads: "/downloads",
  authors: "/authors",
  author: (slug: string) => `/authors/${encodeURIComponent(slug)}`,
  manufacturers: "/manufacturers",
  manufacturer: (slug: string) => `/manufacturers/${encodeURIComponent(slug)}`,
  search: "/search",
  wishlists: "/wishlists",
  questions: "/questions",
  reports: "/reports",
  about: "/about",
  service: "/service",
  portfolio: "/portfolio",
  freeQuote: "/free-quote",
  commercialPaintersMelbourne: "/service/commercial-painters-melbourne",
  exteriorPaintersMelbourne: "/service/exterior-painters-melbourne",
  housePaintersMelbourne: "/service/house-painters-melbourne",
  interiorPaintersmelbourne: "/service/interior-painters-melbourne",
};
