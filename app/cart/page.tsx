
import Image from "next/image";

const Cartpage = () => {
  return (
    <main className="flex flex-col items-center">
  <div
    className="mt-3 h-[200px] sm:h-[250px] md:h-[316px] w-full max-w-[1262px]"
    style={{ backgroundImage: "url('/blurpic.svg')" }}
  >
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[48px] font-medium flex mt-16 md:mt-32">
        Cart
      </h1>
      <p className="flex flex-row font-medium gap-2 mt-4">
        <a href="/home" className="hover:underline">Home</a>
        <Image className="pt-1" src="vector.svg" alt="icon" width={8} height={8} />
        <span className="font-normal">cart</span>
      </p>
    </div>
  </div>
  <div className="cartsection gap-8 flex flex-col md:flex-row mt-10 w-full px-4 md:px-0">
    <div className="div1 md:ml-28 bg-[#F9F1E7] w-full md:w-[800px] flex flex-col h-auto md:h-[55px] p-4 md:p-0">
      <div className="4words flex flex-row justify-between md:justify-center gap-4 md:gap-32 pt-4">
        <div className="flex flex-row gap-4 md:gap-60">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">Product</p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">Price</p>
        </div>
        <div className="flex flex-row gap-4 md:gap-20">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">Quantity</p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">Subtotal</p>
        </div>
      </div>
      <div className="cartitem flex flex-col md:flex-row gap-6 rounded-md mt-4">
        <Image className="rounded-[12px] bg-[#F9F1E7] mt-4 md:mt-12" src="cartitem.svg" alt="item" width={105} height={105} />
        <div className="flex flex-col md:flex-row gap-4 md:gap-24 items-center justify-center text-center mt-4 md:mt-0">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#9F9F9F]">Asgaard sofa</p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#9F9F9F]">Rs. 250.000.00</p>
        </div>
        <div className="pl-4 md:pl-11 flex flex-col md:flex-row gap-4 md:gap-16 items-center justify-center text-center mt-4 md:mt-0">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg border border-gray-400 w-8 h-7 flex text-center justify-center rounded-[6px]">1</p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">Rs. 250.000.00</p>
          <Image src="cartbin.svg" alt="cartbin" width={28} height={28} />
        </div>
      </div>
    </div>
    <div className="div2 cursor-pointer w-full md:w-auto mt-6 md:mt-0">
      <Image src="cartlist.svg" alt="cart" width={380} height={390} />
    </div>
  </div>
  <div className="w-full max-w-[1262px] bg-[#FAF3EA] h-auto md:h-[270px] mt-7 px-4 md:px-8">
    <div className="flex items-center justify-center text-center mt-7 mb-5 md:mt-24">
      <Image src="foterlogos.svg" alt="logos" width={1200} height={200} layout="responsive" />
    </div>
  </div>
</main>

  );
};

export default Cartpage;
