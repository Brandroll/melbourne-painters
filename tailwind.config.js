/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        "top-center": "top center",
      },
      height: {
        350: "460px",
      },

      fontSize: {
        hero: "5.2rem",
      },
      fontFamily: {
        montserrat: ["var(--montserrat-font)"],
        roboto: ["var(--roboto-font)"],
        isidorasans: ["var(--isidorasans-font)"],
        isidorasans_regular: ["var(--isidorasans-regular-font)"],
        isidorasans_medium: ["var(--isidorasans-medium-font)"],
        open_sans: ["var(--open_sans-font)"],
      },
      colors: {
        "brand-blue": "#29cda7",
        "brand-blue-dark": "#06B68D",
        "dark-overlay": "#0000009E",
      },
      backgroundColor: {
        navbar: "#333333",
        overlay: "#0d1414ba",
      },
      backgroundImage: {
        "desktop-banner": "url('/imgs/desktop-banner.jpg')",
        "Atura-Dandenong-South-Night":
          "url('/imgs/Atura-Dandenong-South-Night.jpeg')",
        "dicken-streen": "url('/imgs/dk.jpg')",
        "Exterior-Painting-Brighton-Banner":
          "url('/imgs/Exterior-Painting-Brighton-Banner.jpg')",
        "A-AND-L-WINDOWS-BANNER-e1668132206548":
          "url('/imgs/A-AND-L-WINDOWS-BANNER-e1668132206548.jpg')",
      },
    },
  },
  plugins: [],
};
