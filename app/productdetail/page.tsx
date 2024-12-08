import Image from "next/image";
import { Button } from "@/components/ui/button";

const Productdetailpage = () => {
  return (
    <main className="">
  <div className="">
    <div className="bg-[#F9F1E7] mt-5  md:h-[100px] flex flex-col md:flex-row gap-4 md:gap-14 items-center p-2 md:p-4 lg:p-0">
      <p className="flex flex-row pb-4 gap-5 mt-4 pl-4 md:pl-24">
        <a href="/home" className="hover:underline text-[#9F9F9F]">Home</a>
        <Image className="pt-1" src="vector.svg" alt="icon" width={8} height={8} />
        <span className="font-normal text-[#9F9F9F]">
          <a href="/home" className="hover:underline text-[#9F9F9F]">shop</a>
        </span>
        <Image className="pt-1" src="vector.svg" alt="icon" width={8} height={8} />
      </p>
      <Image className=" lg:flex hidden" src="line.svg" alt="icon" width={2} height={0} />
      <p className="font-medium">Asgaard sofa</p>
    </div>
    <div className="sofaimage mt-8 gap-12 flex flex-col md:flex-row items-center md:items-start md:ml-20">
      <Image className="mb-8 md:mb-52" src="asgardsofa.svg" alt="Product" width={500} height={400} />
      <div className="sofadetail">
        <h3 className="font-medium text-[24px] lg:text-[42px]">Asgaard sofa</h3>
        <p className="font-medium text-xl md:text-[24px] text-[#9F9F9F] pt-7">Rs. 250,000.00</p>
        <div className="my-3 flex flex-col md:flex-row items-center text-center gap-3">
          <Image src="stars.svg" alt="stars" width={124} height={20} />
          <Image className="lg:flex hidden"src="line.svg" alt="line" width={2} height={0} />
          <p className="text-[#9F9F9F] text-xs md:text-[13px] flex items-center justify-center text-center pl-3">5 Customer Review</p>
        </div>
        <div className="text flex gap-4 flex-col">
          <p className="text-sm md:text-[13.8px]">Setting the bar as one of the loudest speakers in its class...</p>
          <p className="text-[#9F9F9F]">size</p>
        </div>
        <Image className="mt-3" src="num.svg" alt="size" width={131.26} height={30} />
        <p className="text-[#9F9F9F] pt-4">Color</p>
        <Image className="" src="colors.svg" alt="colors" width={131.26} height={30} />
        <div className="lg:flex md:hidden flex-row gap-3   md:-mt-64 items-center justify-center">
          <Image src="c1.svg" alt="cart" width={70} height={40} />
          <Image src="c2.svg" alt="cart" width={120} height={64} />
          <Image src="c3.svg" alt="cart" width={120} height={64} />
        </div>
        <div className="border-b w-[80%] pt-6 pl-3"></div>
        <div>
          <Image className="mt-3" src="littlefoter.svg" alt="cart" width={200} height={64} />
        </div>
      </div>
    </div>
    <div className="flex flex-col mt-5 items-center">
      <Image src="picture.svg" alt="description" width={1440} height={744} layout="responsive" />
    </div>
    <div className="flex flex-col mt-10 items-center">
      <h3 className="font-medium text-xl md:text-[36px]">Our Product</h3>
      <div className="mt-11 main flex flex-col items-center gap-8">
        <div className="row1 h-[47%] flex flex-col md:flex-row items-center justify-center gap-5">
          <div className="hidden lg:flex flex-col bg-[#F7F7F7]">
            <Image src="/pic1.svg" alt="logo" height={301} width={250} />
            <div className="flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="font-semibold text-lg md:text-[24px] text-[#333333]">Syltherine</span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium">Stylish cafe chair(-30%)</h5>
                <span className="text-lg md:text-[20px] font-semibold text-[#3A3A3A]">Rp 2.5000.000 <span className="text-[#B0B0B0] p-3 text-base line-through">Rp 3.500.000</span></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-[#F7F7F7]">
            <Image src="/pic2.svg" alt="logo" height={301} width={250} />
            <div className="flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="font-semibold text-lg md:text-[24px] text-[#333333]">Leviosa</span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium">Stylish cafe chair</h5>
                <span className="text-lg md:text-[20px] font-semibold text-[#3A3A3A]">Rp 2.5000.000</span>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex flex-col bg-[#F7F7F7]">
            <Image src="/pic3.svg" alt="logo" height={301} width={250} />
            <div className="flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="font-semibold text-lg md:text-[24px] text-[#333333]">Lolito</span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium">Luxury big sofa(-50%)</h5>
                <span className="text-lg md:text-[20px] font-semibold text-[#3A3A3A]">Rp 7.000.000 <span className="text-[#B0B0B0] p-3 text-base line-through">Rp 14.000.000</span></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-[#F7F7F7]">
            <Image src="/pic4.svg" alt="logo" height={301} width={250} />
            <div className="flex gap-2 p-3 flex-col">
              <div className="flex justify-between">
                <span className="font-semibold text-lg md:text-[24px] text-[#333333]">Respira</span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-base text-[#898989] font-medium">Outdoor bar table and stool</h5>
                <span className="text-lg md:text-[20px] font-semibold text-[#3A3A3A]">Rp 5000.000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center flex w-full px-4 sm:px-8">
          <Button className="h-12 w-full sm:w-40 md:w-56 font-semibold text-[#B88E2F] border border-[#B88E2F] flex justify-center items-center">Show More</Button>
        </div>
      </div>
    </div>
  </div>
</main>

  );
};

export default Productdetailpage;
