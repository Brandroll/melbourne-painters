import Image from "next/image";

export default function Why() {
  return (
    <div className="bg-gray-200 md:py-16 md:px-16">
      <h3 className="text-center md:my-8 text-brand-blue text-4xl font-medium">
        WHY SHOULD YOU MAKE MELBOURNE PAINTERS YOUR FIRST CHOICE?
      </h3>
      <div className="grid md:gap-8  md:grid-cols-3">
        {[0, 1, 2, 3, 2, 5].map((i) => (
          <>
            <div className="flex md:mt-8 md:gap-8 items-center pb-4 border border-r-0 border-l-0 border-t-0  border-white">
              <div className="bg-white p-6 rounded-full ">
                <Image
                  alt=""
                  //   style={{ objectFit: "contain" }}
                  src={
                    "https://www.melbourne-painters.com.au/wp-content/uploads/2022/06/icon.png"
                  }
                  width={100}
                  height={100}
                />{" "}
              </div>
              <div className="font-isidorasans_medium font-normal text-xl">
                Receive peace of mind knowing you are being looked after by a
                highly qualified expert
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="my-8">
        <h4 className="md:text-2xl font-medium md:my-8 text-brand-blue  text-center">
          Are You Ready To Make Melbourne's Leading Painting Firm Your Choice?
        </h4>
        <p className="px-16 font-isidorasans_regular text-gray-900 text-center text-xl font-light">
          With only a few clicks you can book a time with one of experts and
          discuss your painting requirements. Our painting experts can assist
          with all aspects of you painting requirements. Book a time today for a
          free measure and quote consultation.
        </p>
      </div>
      <div className="flex justify-center font-semibold mt-16  ">
        <button className="p-5 px-16 rounded-l-3xl bg-brand-blue text-xl text-white">
          FREE <span>QUOTE</span>{" "}
        </button>
        <button className="p-5 rounded-r-3xl px-16 bg-brand-blue-dark  text-xl text-white">
          VIEW <span>PROJECTS</span>
        </button>
      </div>
    </div>
  );
}
