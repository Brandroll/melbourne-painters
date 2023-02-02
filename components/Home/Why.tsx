import { useReasons } from "@/framework/rest/reasons";
import Image from "next/image";
import ButtonGroup from "../UI/ButtonGroup";
import Fade from "react-reveal/Fade";
import config from "react-reveal/globals";

config({ ssrFadeout: true });
export default function Why() {
  const { reasons, error } = useReasons();

  return (
    <div className="bg-why-section py-8 md:px-8">
      <Fade bottom>
        <div className="max-w-site-full mx-auto">
          <h3 className="text-center mb-16  px-10 md:my-8 text-brand-blue text-why font-medium">
            WHY SHOULD YOU MAKE MELBOURNE PAINTERS YOUR FIRST CHOICE?
          </h3>
          <div className="grid gap-2 px-4  md:gap-4  mt-16 lg:mt-0  md:grid-cols-3">
            {!error &&
              reasons &&
              reasons[0].acf.reasons &&
              reasons[0].acf.reasons.map((i: any) => (
                <>
                  <div className="flex gap-4  md:gap-6 items-center lg:justify-center pb-4 border border-r-0 border-l-0 border-t-0  border-white">
                    <Fade right>
                      <div className=" bg-white p-3 rounded-full ">
                        <Image
                          alt=""
                          style={{
                            objectFit: "contain",
                            maxWidth: "51px",
                            maxHeight: "43px",
                          }}
                          src={i.image}
                          width={90}
                          height={150}
                        />
                      </div>
                    </Fade>
                    <div className=" font-isidorasans_medium text-md mb-2 font-normal  ">
                      {i.info}
                    </div>
                  </div>
                </>
              ))}
          </div>
          <div className="my-8 px-10 lg:px-0">
            <h4 className=" text-md   font-medium my-8 text-brand-blue  text-center">
              Are You Ready To Make Melbourne's Leading Painting Firm Your
              Choice?
            </h4>
            <p className="lg:px-16 font-isidorasans_regular text-gray-900 text-center font-light">
              With only a few clicks you can book a time with one of experts and
              discuss your painting requirements. Our painting experts can
              assist with all aspects of you painting requirements. Book a time
              today for a free measure and quote consultation.
            </p>
          </div>
          <div className=" lg:w-2/3 px-4 md:px-0 mt-20 md:mt-0 mx-auto">
            <ButtonGroup />
          </div>
        </div>
      </Fade>
    </div>
  );
}
