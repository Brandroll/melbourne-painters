import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { drawerAtom } from "@/store/drawer-atom";
import { useQuery } from "@apollo/client";

import { Routes } from "../../config/routes";
import { GET_HEADER_MENU } from "@/apollo/queries/headerMenu";
interface NavLink {
  href: string;
  label: string;
  subItems?: { href: string; label: string }[];
}
export default function Header() {
  const router = useRouter();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [navLinks, setNavLinks] = useState<NavLink[]>([]);
  const [_, setDrawerView] = useAtom(drawerAtom);

  const { data } = useQuery(GET_HEADER_MENU);

  useEffect(() => {
    if (data && data.menuItems) {
      const formattedNavs = data.menuItems.edges.map((r: any) => {
        return {
          href: r.node.path,
          label: r.node.label,
          subItems: r.node?.childItems?.edges.map((subItem: any) => ({
            href: subItem.node.path,
            label: subItem.node.label,
          })),
        };
      });

      setNavLinks(formattedNavs);
    }
  }, [data]);

  function handleSidebar(view: string) {
    setDrawerView({ display: true, view });
  }
  function handleClick(path: string) {
    const hasSubItems = navLinks.find((hed) => hed.href === path)?.subItems;
    if (hasSubItems) {
      return;
    }
    router.push(path);
  }

  return (
    <div className="  ">
      <nav className=" w-full  z-40  fixed top-0 lg:py-2 p-3   lg:px-8  text-white  bg-navbar  ">
        <div className="max-w-site-full mx-auto flex justify-between items-center">
          <Link className="lg:block hidden" href={"/"}>
            <Image alt="logo" src={"/imgs/logo.png"} width={290} height={100} />
          </Link>
          <div className="lg:hidden ">
            <Link href={"/"}>
              <Image
                alt="logo"
                src={"/imgs/logo.png"}
                width={200}
                height={100}
              />
            </Link>
          </div>

          <motion.div
            whileTap={{ scale: 0.88 }}
            onClick={() => handleSidebar("MAIN_MENU_VIEW")}
            className=" flex justify-end lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-8 h-8 text-brand-blue-dark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </motion.div>
          <div className="lg:flex flex-col hidden items-end  justify-end">
            <a
              href="tel:1300%20662%20344"
              className="hidden lg:flex text-brand-blue  text-xl font-isidorasans items-center font-bold  gap-1"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              1300 662 344
            </a>
            <div className="lg:flex hidden top-12 md:top-0 md:py-0 py bg-navbar w-full left-0 absolute md:relative justify-end gap-6">
              {navLinks &&
                navLinks.map((i) => (
                  <Link
                    key={Math.random()}
                    href={i.href}
                    onMouseOver={() => {
                      if (i.subItems && i.subItems.length > 0) {
                        setIsSubMenuOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (i.subItems && i.subItems.length > 0) {
                        setIsSubMenuOpen(false);
                      }
                    }}
                  >
                    <div>
                      <p
                        className={`  font-isidorasans text-white ${
                          router.asPath === i.href ? "text-brand-blue-dark" : ""
                        }  hover:text-brand-blue cursor-pointer relative`}
                      >
                        {i.label}
                      </p>
                      {i.subItems &&
                        i.subItems?.length > 0 &&
                        isSubMenuOpen && (
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
                              className="lg:absolute   top-6 bg-navbar"
                            >
                              <div className="flex flex-col gap-4 p-6">
                                {i.subItems.map((l) => (
                                  <>
                                    <Link
                                      className="font-isidorasans hover:text-brand-blue-dark"
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
          </div>
        </div>
      </nav>
    </div>
  );
}
