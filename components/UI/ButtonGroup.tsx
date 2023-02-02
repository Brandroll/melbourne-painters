import Link from "next/link";
import React from "react";
import { useModalAction } from "@/components/UI/Modal/Modal.context";

export default function ButtonGroup() {
  const { openModal } = useModalAction();
  const onFreeQuote = () => {
    openModal("FREE_QUOTE_HOME");
  };
  return (
    <div className="grid grid-cols-2 justify-center font-semibold">
      <div className="flex justify-end">
        <button
          onClick={() => onFreeQuote()}
          className="p-4 w-full md:w-auto lg:p-3 lg:text-xl font-semibold md:px-24 lg:px-20  rounded-l-full  md:rounded-l-3xl text-xs md:text-md sm:text-sm bg-brand-blue lg:text-2xl text-white"
        >
          FREE <span className="font-bold">QUOTE</span>{" "}
        </button>
      </div>
      <div className="flex justify-start">
        <button className="p-3 w-full md:w-auto lg:p-2 font-semibold lg:text-xl  md:px-20 rounded-r-full lg:px-12 hover:bg-brand-blue   md:text-md md:rounded-r-3xl text-xs sm:text-sm bg-brand-blue-dark  lg:text-2xl text-white">
          <Link href={"/project"}>
            VIEW <span className="font-bold">PROJECTS</span>
          </Link>
        </button>
      </div>
    </div>
  );
}
