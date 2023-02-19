import ContactForm from "@/components/Contact/Form";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ProjectDetail from "./ProjectDetail";
import YourInfo from "./YourInfo";
import YourProject from "./YourProject/index";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

type ProjectDetails = {
  details: string;
  street_address: string;
  suburb: string;
  state: string;
  postcode: string;
  apartment: string;
};

type Info = {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  contact_time:
    | "Morning 9am  12pm"
    | "Afternoon 12pm - 5pm"
    | "Evening 5pm - 7pm"
    | "Late evening 7pm - 9pm"
    | "Any time"
    | "ASAP"
    | "";
};
const _heading = [
  " YOUR Requirements",
  " PROJECT address and further DETAILS",
  " YOUR INFO",
];
export default function CreateOrUpdateAddressForm() {
  const [currentForm, setCurrentForm] = useState(1);
  const [isError, setIsError] = useState(false);
  const [projectInfo, setProjectInfo] = useState({
    time_to_start: "",
    type: "",
    services: [],
  });
  const [projectDetail, setProjectDetail] = useState<ProjectDetails>({
    details: "",
    street_address: "",
    suburb: "",
    state: "",
    postcode: "",
    apartment: "",
  });
  const [info, setInfo] = useState<Info>({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    contact_time: "",
  });
  const recaptchaRef = React.createRef();

  const gotoNextStep = () => {
    switch (currentForm) {
      case 1:
        step1Validation();
        break;
      case 2:
        step2Validation();
        break;
      case 3:
        step3Validation();
    }
  };

  const step1Validation = () => {
    Object.keys(projectInfo).forEach((key) => {
      if (projectInfo[key].length > 0) {
        setIsError(false);
      } else {
        toast.error("Please Fill All the Required Details ");
        setIsError(true);
      }
    });
    const values = Object.values(projectInfo).filter((t) => t.length > 0);
    if (values.length == 3) {
      setCurrentForm(2);
    }
  };

  const step2Validation = () => {
    Object.keys(projectDetail).forEach((key) => {
      if (projectDetail[key].length > 0) {
        setIsError(false);
      } else {
        setIsError(true);

        toast.error("Please Fill All the Required Details ");
      }
    });
    const values = Object.values(projectDetail).filter((t) => t.length > 0);

    if (values.length >= 5) {
      setCurrentForm(3);
    }
  };
  const step3Validation = () => {
    Object.keys(info).forEach((key) => {
      if (info[key].length > 0) {
        setIsError(false);
      } else {
        setIsError(true);

        toast.error("Please Fill All the Required Details ");
      }
    });
    const values = Object.values(info).filter((t) => t.length > 0);

    if (values.length == 5) {
      submitForm();
    }
  };
  const onReCAPTCHAChange = (captchaCode: string) => {
    if (!captchaCode) {
      return;
    }
  };
  const submitForm = () => {
    recaptchaRef.current.execute();

    const token = recaptchaRef.current.getValue();

    const values = {
      ...projectInfo,
      ...projectDetail,
      ...info,
      token,
    };

    axios
      .post("/api/popup-form", {
        data: { ...values },
      })
      .then((res) => {
        if (res.data.message) {
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };
  return (
    <div className="min-h-screen w-full bg-form lg:px-16  p-5 sm:p-8 md:min-h-0 md:rounded-xl">
      <div className="hidden">
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          onChange={onReCAPTCHAChange}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_INV_SITE_KEY}
        />
      </div>

      <div className="hidden lg:block">
        <h5 className="font-roboto uppercase  font-semibold mb-4 text-form-btn text-xl">
          {_heading[currentForm - 1]}
        </h5>
        <div className="flex mb-3 gap-8 justify-center">
          {[
            { src: "1-done.png", label: "1 YOUR PROJECT" },
            { src: "2-done.png", label: "2 PROJECT DETAILS" },
            { src: "3-done.png", label: "3 YOUR INFO" },
          ].map((i, n) => (
            <div
              className={`${
                currentForm - 1 === n
                  ? "opacity-100 text-form-btn"
                  : "opacity-50"
              }  `}
            >
              <Image
                className="hidden md:block"
                src={`/imgs/${i.src}`}
                alt={i.label}
                width={100}
                height={50}
              />
            </div>
          ))}
        </div>
        <hr />
        {currentForm === 1 ? (
          <YourProject
            setCurrentForm={setCurrentForm}
            projectInfo={projectInfo}
            isError={isError}
            setProjectInfo={setProjectInfo}
          />
        ) : null}
        {currentForm === 2 ? (
          <ProjectDetail
            projectDetail={projectDetail}
            setProjectDetail={setProjectDetail}
            isError={isError}
          />
        ) : null}
        {currentForm === 3 ? (
          <YourInfo isError={isError} info={info} setInfo={setInfo} />
        ) : null}

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
                className="info-btn py-2 bg-brand-blue hover:bg-brand-blue-dark hover:cursor-pointer"
              >
                Previous
              </button>
            )}

            {currentForm != 3 && (
              <button
                onClick={gotoNextStep}
                className="info-btn py-2 bg-brand-blue hover:bg-brand-blue-dark hover:cursor-pointer"
              >
                Next
              </button>
            )}

            {currentForm == 3 && (
              <button
                onClick={gotoNextStep}
                className="info-btn py-2 bg-brand-blue hover:bg-brand-blue-dark hover:cursor-pointer"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="lg:hidden mt-4">
        {/* <MobileForm /> */}
        <ContactForm />
      </div>
    </div>
  );
}
