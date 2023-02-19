import "../styles/globals.css";
import "../styles/blog.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import type { AppProps } from "next/app";
import { Open_Sans, Montserrat, Roboto } from "@next/font/google";
import localFont from "@next/font/local";
import { ModalProvider } from "@/components/UI/Modal/Modal.context";
import React from "react";
import ManagedModal from "@/components/UI/Modal/Managed-modal";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ManagedDrawer from "@/components/UI/Drawer/Managed-drawer";
import config from "react-reveal/globals";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo";
import { DefaultSeo } from "next-seo";

config({ ssrFadeout: true });
const queryClient = new QueryClient();

const isidorasansRegular = localFont({
  src: "../public/fonts/Isidora-sans/IsidoraSans-Regular.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-isidorasans-regular",
});
const isidorasansmedium = localFont({
  src: "../public/fonts/Isidora-sans/IsidoraSans-Medium.ttf",
  weight: "400",

  display: "swap",
  variable: "--font-isidorasans-medium",
});
const isidorasanssemibold = localFont({
  src: "../public/fonts/Isidora-sans/IsidoraSans-SemiBold.ttf",
  weight: "400",

  display: "swap",
  variable: "--font-isidorasans-semibold",
});
const isidorasans = localFont({
  src: "../public/fonts/Isidora-sans/IsidoraSans-SemiBold.ttf",
  weight: "400",

  display: "swap",
  variable: "--font-isidorasans",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-open-montserrat",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-open-roboto",
  weight: ["100", "300", "400", "900", "700"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo description="Painters Melbourne provides Interior &amp; Exterior Painting services to Residential and Commercial clients requiring a Painter in Melbourne" />
      <style jsx global>{`
        :root {
          --roboto-font: ${roboto.style.fontFamily};
          --montserrat-font: ${montserrat.style.fontFamily};
          --open_sans-font: ${open_sans.style.fontFamily};
          --isidorasans-font: ${isidorasans.style.fontFamily};
          --isidorasans-regular-font: ${isidorasansRegular.style.fontFamily};
          --isidorasans-medium-font: ${isidorasansmedium.style.fontFamily};
          --isidorasans-semi-bold-font: ${isidorasanssemibold.style.fontFamily};
        }
      `}</style>
      <ApolloProvider client={client}>
        <ModalProvider>
          <>
            <Header />

            <Component {...pageProps} />

            <Footer />
            <ManagedModal />
            <ManagedDrawer />
            <ToastContainer autoClose={2000} theme="colored" />
          </>
        </ModalProvider>
      </ApolloProvider>
    </QueryClientProvider>
  );
}
