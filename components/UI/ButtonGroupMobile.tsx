import React from "react";
import { useModalAction } from "@/components/UI/Modal/Modal.context";
import { useRouter } from "next/router";

export default function ButtonGroupMobile() {
  const { openModal } = useModalAction();
  const router = useRouter();
  const onFreeQuote = () => {
    openModal("FREE_QUOTE_HOME");
  };
  return (
    <div className="relative  hero-btn  ">
      <div className="md:hidden   w-full mx-auto">
        <div className="grid font-isidorasans_regular grid-cols-2 px-3">
          <button
            onClick={onFreeQuote}
            className="p-4  md:px-16 font-semibold rounded-l-3xl text-xs sm:text-sm bg-brand-blue lg:text-2xl text-white"
          >
            FREE <span className="font-bold">QUOTE</span>{" "}
          </button>

          <button
            onClick={() => {
              router.push("/project");
            }}
            className="p-4   md:px-12 hover:bg-brand-blue  font-semibold rounded-r-3xl text-xs sm:text-sm bg-brand-blue-dark  lg:text-2xl text-white"
          >
            VIEW <span className="font-bold">PROJECTS</span>
          </button>
        </div>
      </div>
    </div>
  );
}
