import { useAtom } from "jotai";
import { drawerAtom } from "@/store/drawer-atom";
import { CloseIcon } from "@/components/icons/close-icon";
import { useTranslation } from "next-i18next";
import React from "react";
import Image from "next/image";

const DrawerWrapper: React.FC = ({ children }: any) => {
  const { t } = useTranslation("common");
  const [_, closeSidebar] = useAtom(drawerAtom);

  return (
    <div className="flex h-full flex-col">
      <div className="fixed top-0 bg-navbar-drawer z-20 mb-4 flex w-full max-w-md items-center justify-between  p-5 md:mb-6">
        {/* <Logo className="w-24 md:w-auto" /> */}
        <Image alt="logo" src={"/imgs/logo.png"} width={250} height={80} />

        <button
          onClick={() => closeSidebar({ display: false, view: "" })}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200 text-body transition-all duration-200 hover:bg-accent hover:text-light focus:bg-accent focus:text-light focus:outline-none"
        >
          <span className="sr-only">{"text-close"}</span>
          <CloseIcon className="h-2.5 text-black w-2.5" />
        </button>
      </div>
      <div className="pt-16">{children}</div>
    </div>
  );
};

export default DrawerWrapper;
