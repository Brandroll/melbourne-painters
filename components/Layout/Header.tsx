import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Routes } from "../../config/routes";
export default function Header() {
  const router = useRouter();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const navLinks = [
    { href: Routes.home, label: "Home" },
    { href: Routes.about, label: "About" },
    {
      href: Routes.service,
      label: "Service",
      subItems: [
        {
          href: Routes.exteriorPaintersMelbourne,
          label: "Exterior Painters ",
        },
        {
          href: Routes.interiorPaintersmelbourne,
          label: "Interior Painters ",
        },
        {
          href: Routes.housePaintersMelbourne,
          label: "Residential Painters ",
        },
        {
          href: Routes.commercialPaintersMelbourne,
          label: "Commercial Painters ",
        },
      ],
    },
    { href: Routes.projects, label: "Portfolio" },
    { href: Routes.freeQuote, label: "Free Quote" },
    { href: Routes.contactUs, label: "Contact" },
  ];

  return (
    <div>
      <nav className="py-3  fixed top-0  w-full px-9 flex justify-between items-center text-white text-xl bg-navbar  ">
        <Link className="lg:block hidden" href={"/"}>
          <Image alt="logo" src={"/imgs/logo.png"} width={390} height={100} />
        </Link>
        <Link className="lg:hidden " href={"/"}>
          <Image alt="logo" src={"/imgs/logo.png"} width={150} height={100} />
        </Link>
        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-brand-blue-dark"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div className="lg:flex hidden top-12 md:top-0 md:py-0 py bg-navbar w-full left-0 absolute md:relative justify-end gap-8">
          {navLinks.map((i) => (
            <Link
              key={Math.random()}
              href={i.href}
              onMouseOver={() => {
                if (i.subItems) {
                  setIsSubMenuOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (i.subItems) {
                  setIsSubMenuOpen(false);
                }
              }}
            >
              <div>
                <p
                  className={`font-isidorasans ${
                    router.asPath === i.href ? "text-brand-blue-dark" : ""
                  }  hover:text-brand-blue cursor-pointer relative`}
                >
                  {i.label}
                </p>
                {i.subItems && isSubMenuOpen && (
                  <>
                    <div
                      onMouseOver={() => {
                        if (i.subItems) {
                          setIsSubMenuOpen(true);
                        }
                      }}
                      onMouseLeave={() => {
                        if (i.subItems) {
                          setIsSubMenuOpen(false);
                        }
                      }}
                      className="lg:absolute   top-7 bg-navbar"
                    >
                      <div className="flex flex-col gap-4 p-2">
                        {i.subItems.map((l) => (
                          <>
                            <Link
                              className="hover:text-brand-blue-dark"
                              href={l.href}
                            >
                              {l.label}
                            </Link>
                          </>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
