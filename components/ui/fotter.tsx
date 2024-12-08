
const Fotter = () => {
  return (
<main className="flex flex-col md:flex-row md:justify-between md:items-start w-full  mt-12 px-4 md:px-8">
  <div className="flex flex-col gap-4 md:gap-9 mt-10 md:mt-20">
    <h6 className="font-bold text-xl md:text-2xl text-black">Funrio</h6>
    <p className="text-[#9F9F9F] flex flex-col text-sm md:text-base">
      400 University Drive Suite 200
      <span>Coral</span>
      <span>FL 33134 USA</span>
    </p>
    <div className="sm:flex justify-center md:justify-end mt-10 md:mt-44 hidden">
      2024 Funrio. All rights reserved.
    </div>
  </div>

  <div className="flex flex-col gap-4 md:gap-12 mt-10 md:mt-20">
    <p className="text-[#9F9F9F] font-medium text-sm md:text-base">Link</p>
    <ul className="flex flex-col gap-4 md:gap-10">
      <li>
        <a href="/shop" className="text-black font-medium hover:text-[#B88E2F]">Shop</a>
      </li>
      <li>
        <a href="/productdetail" className="text-black font-medium hover:text-[#B88E2F]">Product detail</a>
      </li>
      <li>
        <a href="/cart" className="text-black font-medium hover:text-[#B88E2F]">Cart</a>
      </li>
      <li>
        <a href="/contact" className="text-black font-medium hover:text-[#B88E2F]">Contact</a>
      </li>
    </ul>
  </div>

  <div className="flex flex-col gap-4 md:gap-12 mt-10 md:mt-20">
    <p className="text-[#9F9F9F] font-medium text-sm md:text-base">Help</p>
    <ul className="flex flex-col gap-4 md:gap-10">
      <li>
        <a href="#" className="text-black font-medium hover:text-[#B88E2F]">Payment Option</a>
      </li>
      <li>
        <a href="#" className="text-black font-medium hover:text-[#B88E2F]">Returns</a>
      </li>
      <li>
        <a href="#" className="text-black font-medium hover:text-[#B88E2F]">Privacy Policies</a>
      </li>
    </ul>
  </div>

  <div className="flex flex-col gap-4 md:gap-12 mt-10 md:mt-20">
    <p className="text-[#9F9F9F] font-medium text-sm md:text-base">Newsletter</p>
    <div className="flex flex-col md:flex-row gap-4 md:gap-5">
      <input
        type="email"
        placeholder="Enter your email"
        className="border-b-[1.5px] border-black text-start w-full md:w-auto"
      />
      <p className="border-black border-b-[1.5px] w-full md:w-20 text-black flex justify-center font-medium cursor-pointer">
        SUBSCRIBE
      </p>
    </div>
  </div>
  <div className="flex justify-center md:justify-end mt-10 md:mt-44 sm:hidden">
      2024 Funrio. All rights reserved.
    </div>
</main>

  );
};

export default Fotter;
