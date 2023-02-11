import { Routes } from "@/config/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FacebookIcon } from "../icons/facebook";
import { InstagramIcon } from "../icons/instagram";
import { TwitterIcon } from "../icons/twitter";

export default function Footer() {
  const navLinks = [
    { href: Routes.home, label: "Home" },
    { href: Routes.about, label: "About" },

    { href: Routes.project, label: "Projects" },

    { href: Routes.contactUs, label: "Contact" },
  ];
  return (
    <footer className="font-isidorasans bg-footer py-12 border-t-2 mt-16 border-gray-300 md:px-12">
      <div className="flex  flex-col gap-8 lg:gap-8 md:flex-row  mx-auto max-w-site-full justify-between">
        <div className="flex justify-center lg:block">
          <Image
            className="max-w-lg"
            alt="logo"
            src={"/imgs/logo.png"}
            width={250}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center md:items-end lg:block justify-center">
          <div className="flex gap-8 text-black ">
            {navLinks.map((i, n) => (
              <div key={n}>
                <div className="hover:text-brand-blue text-xs sm:text-sm cursor-pointer">
                  <Link href={i.href.toLowerCase()}> {i.label}</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-8 my-2">
            <div>
              <a
                target={"_blank"}
                href="https://www.facebook.com/melb.painters"
              >
                <FacebookIcon className="w-6 h-6 text-brand-blue" />
              </a>
            </div>
            <div>
              <a
                target={"_blank"}
                href="https://www.instagram.com/melbourne.painters.group/"
              >
                <InstagramIcon className="w-6 h-6 text-brand-blue" />
              </a>
            </div>
            <div>
              <a
                target={"_blank"}
                href="https://www.youtube.com/@melbourne-painters"
              >
                <svg
                  className="w-7 h-7 text-brand-blue"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"
                    fill="#29CDA7"
                  />
                </svg>
              </a>
            </div>
            <div>
              <a
                target={"_blank"}
                href="https://www.tiktok.com/@melbourne.painters"
              >
                <svg
                  className="w-6 h-6 text-brand-blue"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6002 2.82C11.9166 2.03962 11.5399 1.03743 11.5402 0H8.45016V12.4C8.42632 13.071 8.14303 13.7066 7.65992 14.1729C7.17682 14.6393 6.5316 14.8999 5.86016 14.9C4.44016 14.9 3.26016 13.74 3.26016 12.3C3.26016 10.58 4.92016 9.29 6.63016 9.82V6.66C3.18016 6.2 0.160156 8.88 0.160156 12.3C0.160156 15.63 2.92016 18 5.85016 18C8.99016 18 11.5402 15.45 11.5402 12.3V6.01C12.7932 6.90985 14.2975 7.39265 15.8402 7.39V4.3C15.8402 4.3 13.9602 4.39 12.6002 2.82Z"
                    fill="#29CDA7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm font-roboto text-gray-500">
        Melbourne Painters (C) 2022 All Rights Reserved | SEO by Brandroll
      </p>
    </footer>
  );
}
