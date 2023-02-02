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

    { href: Routes.project, label: "Portfolio" },

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
        <div className="flex flex-col items-center lg:block justify-center">
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
              <FacebookIcon className="w-6 h-6 text-brand-blue" />
            </div>
            <div>
              <InstagramIcon className="w-6 h-6 text-brand-blue" />
            </div>
            <div>
              <TwitterIcon className="w-6 h-6 text-brand-blue" />
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
