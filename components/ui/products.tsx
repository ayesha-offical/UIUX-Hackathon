import Image from "next/image";
import { Button } from "./button";

const Products = () => {
  return (
    <main className="mt-11">
      <div className="flex gap-8 flex-col">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#333333] text-center">
          {" "}
          Our Products{" "}
        </h3>{" "}



        
        <div className=" main  flex flex-col items-center gap-8">
          <div className=" row1 h-[47%] flex md:flex-row flex-col items-center justify-center gap-5 ">
            <div className=" hidden lg:flex flex-col  bg-[#F7F7F7]">
            
              <Image src={"/pic1.svg"} alt="logo" height={301} width={250}
               />
             
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
        <div className=" row2 h-[47%] flex md:flex-row flex-col items-center justify-center gap-6 ">
          <div className="  flex  flex-col  bg-[#F7F7F7]">
            <Image src={"/pic5.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Grifo
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Night lamp
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 1.500.000{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="  flex  flex-col  bg-[#F7F7F7]">
            <Image src={"/pic6.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Muggo
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Small mug(New)
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 150.000{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" hidden lg:flex flex-col  bg-[#F7F7F7]">
            <Image src={"/pic7.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Pingky
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Cute bet set(-50%)
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
          <div className=" hidden xl:flex  flex-col  bg-[#F7F7F7]">
            <Image src={"/pic8.svg"} alt="logo" height={301} width={250} />
            <div />
            <div className=" flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[24px] text-[#333333] ">
                  Potty
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium ">
                  Minimalist Flower pot(New)
                </h5>
                <span className="text-[20px] font-semibold lg:text-base text-[#3A3A3A]">
                  Rp 500.000{" "}
                </span>
              </div>
            </div>
          </div>
       
        </div>
        <div className="justify-center items-center flex w-full px-4 sm:px-8">
  <Button className="h-12 w-full sm:w-40 md:w-56 font-semibold text-[#B88E2F] border border-[#B88E2F] flex justify-center items-center">
    Show More
  </Button>
</div>

      </div>
    </main>
  );
};

export default Products;
