import ProgressBox from "@/components/UI/Progress-box/Progress-box";
import Image from "next/image";

import { useState } from "react";
import MobileForm from "./MobileForm";
import ProjectDetail from "./ProjectDetail";
import YourInfo from "./YourInfo";
import YourProject from "./YourProject";

type FormValues = {
  title: string;
  type: any;
  address: {
    country: string;
    city: string;
    state: string;
    zip: string;
    street_address: string;
  };
};

type ProjectInfo = {
  time_to_start:
    | "ASAP"
    | "next few days"
    | "next few weeks"
    | "next few months"
    | "flexible";
  type: "residential" | "commercial" | "Industrial";
  service: string[];
};

export default function CreateOrUpdateAddressForm() {
  const [currentForm, setCurrentForm] = useState(1);
  const [projectInfo, setProjectInfo] = useState({
    time_to_start: "",
    type: "",
    service: [],
  });
  const [projectDetail, setProjectDetail] = useState("");
  const [info, setInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    contact_time: "",
    post_code: "",
  });
  function onSubmit(values: FormValues) {}
  function onProjectInfo(values: ProjectInfo) {}
  function onProjectDetails(values: FormValues) {}
  function onInfo(values: FormValues) {}
  return (
    <div className="min-h-screen w-full bg-form lg:px-16  p-5 sm:p-8 md:min-h-0 md:rounded-xl">
      <div className="hidden md:block">
        <h5 className="font-roboto  font-semibold text-xl">Free Quote</h5>
        <div className="flex gap-8 justify-center">
          {[
            { src: "1-done.png", label: "1 YOUR PROJECT" },
            { src: "2-done.png", label: "2 PROJECT DETAILS" },
            { src: "3-done.png", label: "3 YOUR INFO" },
          ].map((i, n) => (
            <div
              className={`${
                currentForm - 1 === n ? "opacity-100" : "opacity-50"
              }`}
            >
              <Image
                className="hidden md:block"
                src={`/imgs/${i.src}`}
                alt={i.label}
                width={100}
                height={50}
              />
              <p className="my-2 text-brand-blue-dark font-roboto text-sm font-medium  ">
                {i.label}
              </p>
            </div>
          ))}
        </div>
        <hr />
        {currentForm === 1 ? (
          <YourProject
            setCurrentForm={setCurrentForm}
            onSubmit={onProjectInfo}
          />
        ) : null}
        {currentForm === 2 ? (
          <ProjectDetail
            setCurrentForm={setCurrentForm}
            onSubmit={onProjectDetails}
          />
        ) : null}
        {currentForm === 3 ? <YourInfo onSubmit={onInfo} /> : null}

        <hr />
        <div className="flex my-4 justify-end">
          <div className="flex gap-4">
            {currentForm != 1 && (
              <button
                onClick={() => {
                  if (currentForm > 0) {
                    const crt = currentForm - 1;
                    setCurrentForm(crt !== 0 ? crt : 1);
                  } else {
                  }
                }}
                className="rounded-xl outline-none text-white py-2 px-16 w-16 flex justify-center bg-brand-blue border "
              >
                Previous
              </button>
            )}

            {currentForm != 3 && (
              <button
                onClick={() => {
                  if (currentForm < 3) {
                    setCurrentForm(currentForm + 1);
                  } else {
                  }
                }}
                className="rounded-xl outline-none text-white py-2 px-16 w-16 flex justify-center bg-brand-blue border "
              >
                NEXT
              </button>
            )}
            {currentForm == 3 && (
              <button className="rounded-xl outline-none text-white py-2 px-16 w-16 flex justify-center bg-brand-blue border ">
                SUBMIT
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <MobileForm />
      </div>
    </div>
  );
}
