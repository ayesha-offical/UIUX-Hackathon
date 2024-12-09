import Image from "next/image";
import { Button } from "@/components/ui/button";

const Productdetailpage = () => {
  return (
    <main className="">
      <div className="">
        <div className="bg-[#F9F1E7] mt-5  md:h-[100px] flex flex-col md:flex-row gap-4 md:gap-14 items-center p-2 md:p-4 lg:p-0">
          <p className="flex flex-row pb-4 gap-5 mt-4 pl-4 md:pl-24">
            <a href="/home" className="hover:underline text-[#9F9F9F]">
              Home
            </a>
            <Image
              className="pt-1"
              src="vector.svg"
              alt="icon"
              width={8}
              height={8}
            />
            <span className="font-normal text-[#9F9F9F]">
              <a href="/home" className="hover:underline text-[#9F9F9F]">
                shop
              </a>
            </span>
            <Image
              className="pt-1"
              src="vector.svg"
              alt="icon"
              width={8}
              height={8}
            />
          </p>
          <Image
            className=" lg:flex hidden"
            src="line.svg"
            alt="icon"
            width={2}
            height={0}
          />
          <p className="font-medium">Asgaard sofa</p>
        </div>
        <div className="sofaimage mt-8 gap-12 flex flex-col lg:flex-row items-center md:items-start md:ml-20">
          <Image
            className="mb-8 lg:mb-52"
            src="asgardsofa.svg"
            alt="Product"
            width={500}
            height={400}
          />
          <div className="sofadetail p-4">
            <h3 className="font-medium text-[24px] lg:text-[42px]">
              Asgaard sofa
            </h3>
            <p className="font-medium text-xl md:text-[24px] text-[#9F9F9F] pt-7">
              Rs. 250,000.00
            </p>
            <div className="my-3 flex  md:flex-row items-center text-center gap-3">
              <Image src="stars.svg" alt="stars" width={124} height={20} />
              <Image
                className="lg:flex hidden"
                src="line.svg"
                alt="line"
                width={2}
                height={0}
              />
              <p className="text-[#9F9F9F] text-xs md:text-[13px] flex items-center justify-center text-center pl-3">
                5 Customer Review
              </p>
            </div>
            <div className="text flex gap-4 flex-col">
              <p className="text-sm md:text-[13.8px]">
                Setting the bar as one of the loudest speakers in its class...
              </p>
              <p className="text-[#9F9F9F]">size</p>
            </div>
            <Image
              className="mt-3"
              src="num.svg"
              alt="size"
              width={131.26}
              height={30}
            />
            <p className="text-[#9F9F9F] pt-4 ">Color</p>

            <div className="flex flex-row gap-2 pt-2 pb-5 w-[130px] h-[50px] md:h-80">
              <div className="color1 h-[30px] w-[30px] bg-[#816DFA] rounded-[24px]"></div>
              <div className="color2 h-[30px] w-[30px] bg-black rounded-[24px]"></div>
              <div className="color3 h-[30px] w-[30px] bg-[#B88E2F] rounded-[24px]"></div>
            </div>

            <div className="flex flex-wrap sm:flex-row gap-3   md:-mt-64 items-center justify-center">
              <div className="cart1 flex flex-row justify-center items-center gap-5 bg-white w-[110px] h-[47px] border border-gray-400 rounded-[10px]">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
              <div className="cart2 flex flex-row justify-center items-center gap-5 bg-white w-[150px] h-[45px] border-[1.3px] border-black rounded-[10px]">
                <p className="">Add To Cart</p>
              </div>
              <div className="cart3  flex flex-row justify-center items-center gap-5 bg-white w-[150px] h-[45px] border-[1.3px] border-black rounded-[10px]">
                <p className="text-">+ Compare</p>
              </div>
            </div>
            <div className="border-b  pt-6 "></div>
            <div className="flex flex-row gap-7 mt-8">
              <div className="list1 ">
                <ul className="flex gap-3 flex-col">
                  <li className="text-[#9F9F9F]">SKU</li>
                  <li className="text-[#9F9F9F]">Category</li>
                  <li className="text-[#9F9F9F]">Tags</li>
                  <li className="text-[#9F9F9F]">Share</li>
                </ul>
              </div>
              <div className="list2">
                <ul className="flex gap-3 flex-col">
                  <li className="text-[#9F9F9F]">: SS001</li>
                  <li className="text-[#9F9F9F]">: Sofas</li>
                  <li className="text-[#9F9F9F]">: Sofa,Chair,Home,Shop</li>
                  <li className="flex flex-row gap-1 text-[#9F9F9F]">
                    :
                    <Image
                      src={"icons.svg"}
                      alt="icons"
                      width={113}
                      height={25}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b pt-8"></div>

        <div className=" w-screen description flex flex-col mt-5 items-center">
          <div className="flex items-center justify-center  gap-20">
            <h3 className="font-medium text-[13px] md:text-[24px]">
              Description
            </h3>
            <p className="font-medium hidden md:text-[24px] text-[#D9D9D9]">
              Additional Information{" "}
            </p>
            <p className="text-[#9F9F9F] text-[13px] md:text-[24px] font-medium ">
              Reviews[5]
            </p>
          </div>

          <div className="flex items-center justify-center mx-8 md:mx-28 mt-8 gap-9 flex-col">
            <p className="text-[#9F9F9F] text-[13px] md:text-16px]">
              Embodying the raw, wayward spirit of rock `n` roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="text-[#9F9F9F] text-[13px] md:text-16px]">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-center gap-9 place-content-center pt-11 ">
            <Image
              src={"sofa.svg"}
              alt="description"
              width={580}
              height={340}
            />

            <Image
              src={"sofa.svg"}
              alt="description"
              width={580}
              height={340}
            />
          </div>
        </div>
        <div className="border-b pt-8"></div>

        <div className="flex flex-col mt-10 items-center">
          <h3 className="font-medium text-xl md:text-[36px]">Our Product</h3>
          <div className="mt-11 main flex flex-col items-center gap-8">
            <div className="row1 h-[47%] flex flex-col md:flex-row items-center justify-center gap-5">
              <div className="hidden lg:flex flex-col bg-[#F7F7F7]">
                <Image src="/pic1.svg" alt="logo" height={301} width={250} />
                <div className="flex gap-2 p-3 flex-col">
                  <div className="flex justify-between">
                    <span className="font-semibold text-lg md:text-[24px] text-[#333333]">
                      Syltherine
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-base text-[#898989] font-medium">
                      Stylish cafe chair(-30%)
                    </h5>
                    <span className="text-lg md:text-[20px] font-semibold text-[#3A3A3A]">
                      Rp 2.5000.000{" "}
                      <span className="text-[#B0B0B0] p-3 text-base line-through">
                        Rp 3.500.000
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-[#F7F7F7]">
                <Image src="/pic2.svg" alt="logo" height={301} width={250} />
                <div className="flex gap-2 p-3 flex-col">
                  <div className="flex justify-between">
                    <span className="font-semibold text-lg md:text-[24px] text-[#333333]">
                      Leviosa
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-base text-[#898989] font-medium">
                      Stylish cafe chair
                    </h5>
                    <span className="text-lg md:text-[20px] font-semibold text-[#3A3A3A]">
                      Rp 2.5000.000
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden xl:flex flex-col bg-[#F7F7F7]">
                <Image src="/pic3.svg" alt="logo" height={301} width={250} />
                <div className="flex gap-2 p-3 flex-col">
                  <div className="flex justify-between">
                    <span className="font-semibold text-lg md:text-[24px] text-[#333333]">
                      Lolito
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-base text-[#898989] font-medium">
                      Luxury big sofa(-50%)
                    </h5>
                    <span className="text-lg md:text-[20px] font-semibold text-[#3A3A3A]">
                      Rp 7.000.000{" "}
                      <span className="text-[#B0B0B0] p-3 text-base line-through">
                        Rp 14.000.000
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-[#F7F7F7]">
                <Image src="/pic4.svg" alt="logo" height={301} width={250} />
                <div className="flex gap-2 p-3 flex-col">
                  <div className="flex justify-between">
                    <span className="font-semibold text-lg md:text-[24px] text-[#333333]">
                      Respira
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-base text-[#898989] font-medium">
                      Outdoor bar table and stool
                    </h5>
                    <span className="text-lg md:text-[20px] font-semibold text-[#3A3A3A]">
                      Rp 5000.000
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
        </div>
      </div>
      <div className="border-b pt-8"></div>
    </main>
  );
};

export default Productdetailpage;
