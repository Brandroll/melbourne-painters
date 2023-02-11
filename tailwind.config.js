/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else {
      return `rgb(var(${variableName}))`;
    }
  };
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        "top-center": "top center",
        hero: "-205px",
      },
      maxWidth: {
        "site-full": "1200px",
      },
      padding: {
        3.67: "3.67em",
      },
      minHeight: {
        "113-rem": "113rem",
      },
      width: {
        80: "20rem",
        160: "40rem",
        240: "60rem",
      },
      height: {
        4.5: "1.125rem",
        13: "3.125rem",
        22: "5.25rem",
        350: "350px",
        204: "204px",
        140: "140px",
        double: "200%",
        80: "20rem",
        128: "32rem",
        150: "37.5rem",
        192: "40rem",
        890: "890px",
      },

      fontSize: {
        hero: "5.2rem",
        md: "17px",
        12: "12px",
        xl: "20px",
        why: "28px",
      },
      fontFamily: {
        montserrat: ["var(--montserrat-font)"],
        roboto: ["var(--roboto-font)"],
        isidorasans: ["var(--isidorasans-font)"],
        isidorasans_regular: ["var(--isidorasans-regular-font)"],
        isidorasans_medium: ["var(--isidorasans-medium-font)"],
        isidorasans_semi_bold: ["var(--isidorasans-semi-bold-font)"],
        open_sans: ["var(--open_sans-font)"],
      },
      colors: {
        "brand-blue": "#29cda7",
        form: "#EBEBEB",
        "brand-blue-dark": "#06B68D",
        "dark-overlay": "#0000009E",
        "popup-button": "#646464",
        "why-section": "#E3E7E7",
        "navbar-drawer": "#424242",
        footer: "#F5F5F5",
        "drawer-overlay": "#4242427d",
        accent: withOpacity("--color-accent"),
        light: withOpacity("--color-light"),
        dark: withOpacity("--color-dark"),
        "accent-hover": withOpacity("--color-accent-hover"),
        "accent-200": withOpacity("--color-accent-200"),
        "accent-300": withOpacity("--color-accent-300"),
        "accent-400": withOpacity("--color-accent-400"),
        "accent-500": withOpacity("--color-accent-500"),
        "accent-600": withOpacity("--color-accent-600"),
        "accent-700": withOpacity("--color-accent-700"),
        "border-50": withOpacity("--color-border-50"),
        "border-100": withOpacity("--color-border-100"),
        "border-200": withOpacity("--color-border-200"),
        "border-base": withOpacity("--color-border-base"),
        "border-400": withOpacity("--color-border-400"),
        // "gray-50": withOpacity("--color-gray-50"),
        // "gray-100": withOpacity("--color-gray-100"),
        // "gray-200": withOpacity("--color-gray-200"),
        // "gray-300": withOpacity("--color-gray-300"),
        // "gray-400": withOpacity("--color-gray-400"),
        // "gray-500": withOpacity("--color-gray-500"),
        // "gray-600": withOpacity("--color-gray-600"),
        // "gray-700": withOpacity("--color-gray-700"),
        // "gray-800": withOpacity("--color-gray-800"),
        // "gray-900": withOpacity("--color-gray-900"),
        "orange-50": withOpacity("--color-orange-50"),
        "orange-100": withOpacity("--color-orange-100"),
        "orange-200": withOpacity("--color-orange-200"),
        "orange-300": withOpacity("--color-orange-300"),
        "orange-400": withOpacity("--color-orange-400"),
        "orange-500": withOpacity("--color-orange-500"),
        "orange-600": withOpacity("--color-orange-600"),
        "orange-700": withOpacity("--color-orange-700"),
        "orange-800": withOpacity("--color-orange-800"),
        "orange-900": withOpacity("--color-orange-900"),
        social: {
          facebook: "#3b5998",
          "facebook-hover": "#35508a",
          twitter: "#1da1f2",
          instagram: "#e1306c",
          youtube: "#ff0000",
          google: "#4285f4",
          "google-hover": "#3574de",
        },
      },
      backgroundColor: {
        navbar: "#333333",
        overlay: "#0d1414ba",
      },

      backgroundImage: {
        "desktop-banner": "url('/imgs/desktop-banner.jpg')",
        "desktop-banner2": "url('/imgs/banner2.jpg')",
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
