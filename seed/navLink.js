const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    subItems: [
      { label: "Residential Painting", href: "/residential-painting" },
      { label: "Commercial Painting", href: "/commercial-painting" },
      {
        label: "Industrial Protective Coating",
        href: "/industrial-protective-coating",
      },
      { label: "Floor Coating", href: "/floor-coating" },
      { label: "Exterior Painting", href: "/exterior-painters-melbourne" },
      { label: "Interior Paintiing", href: "/interior-painters-melbourne" },
    ],
  },
  { label: "Projects", href: "/project" },
  { label: "Contact", href: "/contact" },
];

export default menuItems;
