import Image from "next/image";
import React from "react";
import { FacebookIcon } from "../icons/facebook";
import { InstagramIcon } from "../icons/instagram";
import { TwitterIcon } from "../icons/twitter";

export default function Footer() {
  return (
    <footer className="font-isidorasans bg-gray-100 py-16 border-t-2 mt-16 border-gray-300 md:px-16">
      <div className="flex justify-between">
        <div>
          <Image alt="logo" src={"/imgs/logo.png"} width={390} height={100} />
        </div>
        <div>
          <div className="flex gap-8 text-black ">
            {["Home", "About", "Portfolio", "Contact"].map((i) => (
              <>
                <div className="hover:text-brand-blue cursor-pointer">{i}</div>
              </>
            ))}
          </div>
          <div className="flex justify-end gap-8 my-2">
            <div>
              <FacebookIcon className="w-9 h-9 text-brand-blue" />{" "}
            </div>
            <div>
              <InstagramIcon className="w-9 h-9 text-brand-blue" />{" "}
            </div>
            <div>
              <TwitterIcon className="w-9 h-9 text-brand-blue" />{" "}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500">
        Melbourne Painters (C) 2022 All Rights Reserved | SEO by Brandroll
      </p>
    </footer>
  );
}
