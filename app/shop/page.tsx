import Image from "next/image";
const Shoppage = () => {
  return (
    <main className="flex flex-col">
      <div
        className="mt-3 h-[200px] sm:h-[250px] md:h-[316px] "
        style={{ backgroundImage: "url('/blurpic.svg')" }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            className="flex flex-col mt-20"
            src="headerlogo.svg"
            alt="Logo"
            width={50}
            height={32}
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium flex pt-3">
            Shop
          </h1>
          <p className="flex flex-row font-medium gap-2 mt-4">
            <a href="/home" className="hover:underline">
              Home
            </a>
            <Image
              className="pt-1"
              src="vector.svg"
              alt="icon"
              width={8}
              height={8}
            />
            <span className="font-normal">shop</span>
          </p>
        </div>
      </div>
      <div className="bg-[#F9F1E7] mt-5 h-auto md:h-[100px] flex flex-col md:flex-row gap-4 md:gap-14 items-center  p-2 md:p-4 lg:p-0">
        <Image
          className="ml-0 md:ml-32"
          src="filter.svg"
          alt="icon"
          width={85}
          height={30}
        />
        <Image src="secondicon.svg" alt="icon" width={28} height={28} />
        <Image src="thirdicon.svg" alt="icon" width={28} height={28} />
        <Image
          className="lg:block hidden"
          src="line.svg"
          alt="icon"
          width={2}
          height={0}
        />
        <p className="hidden lg:flex justify-center items-center text-center text-base md:text-lg lg:text-xl mt-4 md:mt-0">
          Showing 1-16 of 32 results
        </p>
        <div className="flex items-center justify-center flex-row gap-4 mt-4 md:mt-0">
          <div className="flex flex-row gap-2 items-center justify-center">
            <p className="text-base md:text-lg lg:text-xl hidden xl:flex">
              Show
            </p>
            <p className="flex items-center justify-center w-12 h-10 bg-white text-[#9F9F9F]">
              16
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-row gap-4 mt-4 md:mt-0">
          <div className="flex flex-row gap-2 items-center justify-center">
            <p className="text-base md:text-lg lg:text-xl hidden xl:flex">
              Sort by
            </p>
            <p className="flex items-center justify-center w-32 h-10 bg-white text-[#9F9F9F]">
              Default
            </p>
          </div>
        </div>
      </div>
      <div className="mt-11  main  flex flex-col items-center gap-8">
        <div className=" row1 h-[47%] flex md:flex-row flex-col items-center justify-center gap-5 ">
          <div className=" hidden lg:flex flex-col  bg-[#F7F7F7]">
            <Image src={"/pic1.svg"} alt="logo" height={301} width={250} />

            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Syltherine
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Stylish cafe chair(-30%)
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 2.5000.000{" "}
                  <span className="text-[#B0B0B0] p-3 text-base line-through">
                    Rp 3.500.000
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="  flex flex-col  bg-[#F7F7F7]">
            <Image src={"/pic2.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Leviosa
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Stylish cafe chair
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 2.5000.000{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="  hidden xl:flex flex-col  bg-[#F7F7F7]">
            <Image src={"/pic3.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Lolito
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Luxury big sofa(-50%)
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 7.000.000{" "}
                  <span className="text-[#B0B0B0] p-3 text-base line-through">
                    Rp 14.000.000
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="  flex  flex-col  bg-[#F7F7F7]">
            <Image src={"/pic4.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Respira
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Outdoor bar table and stool
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 5000.000{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" main mt-7 flex flex-col items-center gap-8">
        <div className=" row2 h-[47%] flex md:flex-row flex-col items-center justify-center gap-5 ">
          <div className=" hidden lg:flex flex-col  bg-[#F7F7F7]">
            <Image src={"/pic1.svg"} alt="logo" height={301} width={250} />

            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Syltherine
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Stylish cafe chair(-30%)
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 2.5000.000{" "}
                  <span className="text-[#B0B0B0] p-3 text-base line-through">
                    Rp 3.500.000
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="  flex flex-col  bg-[#F7F7F7]">
            <Image src={"/pic2.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Leviosa
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Stylish cafe chair
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 2.5000.000{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="  hidden xl:flex flex-col  bg-[#F7F7F7]">
            <Image src={"/pic3.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Lolito
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Luxury big sofa(-50%)
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 7.000.000{" "}
                  <span className="text-[#B0B0B0] p-3 text-base line-through">
                    Rp 14.000.000
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="  flex  flex-col  bg-[#F7F7F7]">
            <Image src={"/pic4.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Respira
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Outdoor bar table and stool
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 5000.000{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" main  mt-7 flex flex-col items-center gap-8">
        <div className=" row3 h-[47%] flex md:flex-row flex-col items-center justify-center gap-5 ">
          <div className=" hidden lg:flex flex-col  bg-[#F7F7F7]">
            <Image src={"/pic1.svg"} alt="logo" height={301} width={250} />

            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Syltherine
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Stylish cafe chair(-30%)
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 2.5000.000{" "}
                  <span className="text-[#B0B0B0] p-3 text-base line-through">
                    Rp 3.500.000
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="  flex flex-col  bg-[#F7F7F7]">
            <Image src={"/pic2.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Leviosa
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Stylish cafe chair
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 2.5000.000{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="  hidden xl:flex flex-col  bg-[#F7F7F7]">
            <Image src={"/pic3.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Lolito
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Luxury big sofa(-50%)
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 7.000.000{" "}
                  <span className="text-[#B0B0B0] p-3 text-base line-through">
                    Rp 14.000.000
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="  flex  flex-col  bg-[#F7F7F7]">
            <Image src={"/pic4.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Respira
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Outdoor bar table and stool
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 5000.000{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" main  mt-7 flex flex-col items-center gap-8">
        <div className=" row4 h-[47%] flex md:flex-row flex-col items-center justify-center gap-5 ">
          <div className=" hidden lg:flex flex-col  bg-[#F7F7F7]">
            <Image src={"/pic1.svg"} alt="logo" height={301} width={250} />

            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Syltherine
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Stylish cafe chair(-30%)
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 2.5000.000{" "}
                  <span className="text-[#B0B0B0] p-3 text-base line-through">
                    Rp 3.500.000
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="  flex flex-col  bg-[#F7F7F7]">
            <Image src={"/pic2.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Leviosa
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Stylish cafe chair
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 2.5000.000{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="  hidden xl:flex flex-col  bg-[#F7F7F7]">
            <Image src={"/pic3.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Lolito
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Luxury big sofa(-50%)
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 7.000.000{" "}
                  <span className="text-[#B0B0B0] p-3 text-base line-through">
                    Rp 14.000.000
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="  flex  flex-col  bg-[#F7F7F7]">
            <Image src={"/pic4.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Respira
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Outdoor bar table and stool
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 5000.000{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="flex items-center justify-center text-center px-6 mx-auto cursor-pointer max-w-[90%] md:max-w-[70%] lg:max-w-[50%]"
        src="number.svg"
        alt="numbers"
        width={350}
        height={80}
      />
      <div className="bg-[#FAF3EA] h-auto mt-16 py-7 flex justify-center items-center ">
        <div className="flex items-center justify-center py-20 text-center ">
          <Image
            src="/foterlogos.svg"
            alt="Footer Logos"
            width={1200}
            height={200}
          />
        </div>
      </div>
    </main>
  );
};

export default Shoppage;
