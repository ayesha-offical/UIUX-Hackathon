import Image from "next/image";

const Cartpage = () => {
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
            Cart
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
            <span className="font-normal">Cart</span>
          </p>
        </div>
      </div>
      <div className="cartsection gap-8  justify-center flex flex-col  tab:flex-row mt-10">
        {" "}
        <div className="ml-10  flex flex-col">
          {/* Header section */}
          <div className="4words h-14 flex bg-[#F9F1E7] flex-row justify-center gap-12 sm:gap-32 pt-4">
            <div className="flex flex-row gap-16 sm:gap-52">
              <p className="text-sm sm:text-base">Product</p>
              <p className="text-sm sm:text-base ">Price</p>
            </div>
            <div className="flex flex-row gap-8 sm:gap-24 -ml-16 sm:-ml-20">
              <p className="text-sm sm:text-base lg:block hidden">Quantity</p>
              <p className="text-sm sm:text-base lg:block hidden">Subtotal</p>
            </div>
          </div>

          {/* Cart Item */}
          <div className="cartitem flex flex-wrap sm:flex-nowrap flex-row gap-4 sm:gap-6 rounded-md">
            <Image
              className="rounded-[12px] bg-[#F9F1E7] mt-4 sm:mt-12"
              src={"/cartitem.svg"}
              alt="item"
              width={105}
              height={105}
            />

            <div className="flex flex-row gap-12 sm:gap-24 items-center justify-center text-center mt-4 sm:mt-12">
              <p className="text-sm sm:text-base text-[#9F9F9F]">
                Asgaard sofa
              </p>
              <p className="text-sm sm:text-base text-[#9F9F9F]">
                Rs. 250,000.00
              </p>
            </div>

            <div className="pl-8 sm:pl-11 flex flex-row gap-8 sm:gap-16 items-center justify-center text-center mt-4 sm:mt-12">
              <p className="text-sm sm:text-base border border-gray-400 w-8 h-7 flex text-center justify-center rounded-[6px]">
                1
              </p>
              <p className="text-sm sm:text-base ">Rs. 250,000.00</p>
              <Image
                className="lg:block hidden"
                src={"/cartbin.svg"}
                alt="cartbin"
                width={28}
                height={28}
              />
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <div className="bg-[#F9F1E7]  flex flex-wrap h-80 w-96 max-w-full mx-auto sm:mx-0 flex-col justify-center items-center text-center p-4">
            <h6 className="font-semibold text-[24px] sm:text-[32px] items-center justify-center text-center flex -mt-4">
              Cart Totals
            </h6>
            <div className="flex flex-row gap-4 sm:gap-8 pt-6 sm:pt-12">
              <p className="font-medium text-base sm:text-lg">Subtotal</p>
              <p className="font-medium text-[#9F9F9F] text-base sm:text-lg">
                Rs. 250,000.00
              </p>
            </div>
            <div className="flex flex-row gap-4 sm:gap-8 pt-4 sm:pt-9">
              <p className="font-medium text-base sm:text-lg">Total</p>
              <p className="font-medium text-[#B88E2F] text-base sm:text-lg">
                Rs. 250,000.00
              </p>
            </div>
            <button className="mt-8 sm:mt-10 flex justify-center items-center gap-2 bg-transparent w-[150px] h-[45px] border-[1.5px] border-black rounded-[10px] hover:bg-black hover:text-white transition-all duration-300">
              <span>Check Out</span>
            </button>
          </div>
        </div>
      </div>{" "}
      <div className="bg-[#FAF3EA] h-auto mt-16 py-7 flex justify-center items-center ">
        <div className="flex items-center justify-center py-20 text-center ">
          <Image
            src="/foterlogos.svg"
            alt="Footer Logos"
            width={1200}
            height={200}
          />
        </div>
      </div>{" "}
    </main>
  );
};

export default Cartpage;
