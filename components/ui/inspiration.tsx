import Image from "next/image";
import { Button } from "./button";

const Inspiration = () => {
  return (
    <main className="flex w-full justify-center items-center  lg:h-[500px] md:h-[450px] bg-[#FCF8F3] mt-12 px-4 md:px-9">
      {" "}
      <div className="gap-7 flex flex-col md:flex-row items-center w-full">
        {" "}
        <div className="flex justify-center flex-col  md:text-left lg:ml-20">
          {" "}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-bold text-[#3A3A3A]">
            {" "}
            50+ Beautiful rooms inspiration{" "}
          </h3>{" "}
          <p className="text-base sm:text-lg md:text-xl text-[#616161] font-medium mt-4 md:mt-2">
            {" "}
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you{" "}
          </p>{" "}
          <Button className="bg-[#B88E2F] text-white h-10 w-full md:w-40 p-2 mt-4">
            {" "}
            Explore More{" "}
          </Button>{" "}
        </div>{" "}
        <div className="flex items-center justify-center md:items-end md:justify-end w-full mt-6 ">
          {" "}
          <Image
            src="/inspirationpic.svg"
            alt="Inspiration Picture"
            width={1198}
            height={582}
            layout="responsive"
          />{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
};

export default Inspiration;
