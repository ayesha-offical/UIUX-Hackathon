import Image from "next/image";

const Range = () => {
  return (
    <main className="mt-9 flex items-center justify-center flex-col">
      <div className="w-full max-w-7xl flex justify-center items-center flex-col gap-3 px-4 md:px-8">
        {" "}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#333333] text-center">
          {" "}
          Browse The Range{" "}
        </h3>{" "}
        <p className="text-base sm:text-lg md:text-xl text-center">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>{" "}
      </div>
      <div className="allranges flex-col flex mobile:flex-row gap-7 items-center justify-center pt-9 w-[55%] mobile:w-[80%]">
        <div className="range1">
          <Image src={"range1.svg"} alt="pic" width={381} height={480} />
          <span className="flex items-center justify-center text-[#333333] font-semibold text-[24px] p-1 flex-col">
            Dining
        </span>
        </div>
    
        <div className="range2">
          <Image src={"range2.svg"} alt="pic" width={381} height={480} />
          <span className="flex items-center justify-center text-[#333333] font-semibold p-1 text-[24px] flex-col">
            Living
        </span>
        </div>

        <div className="range3">
          <Image src={"range3.svg"} alt="pic" width={381} height={480} />
          <span className="flex items-center justify-center text-[#333333] p-1 font-semibold text-[24px] flex-col">
            Bedroom
        </span>
        </div>
       
      </div>
    </main>
  );
};

export default Range;
