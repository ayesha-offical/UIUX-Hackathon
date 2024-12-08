import Image from "next/image";

const Header = () => {
  return (
    <main className="flex justify-center items-center">
      <header className="mt-7 w-screen flex lg:flex-row justify-between items-center px-4 lg:px-8">
        <div className="flex gap-1 items-center">
          <Image src="headerlogo.svg" alt="Logo" width={50} height={32} />
          <h1 className="text-xl sm:text-xl lg:text-3xl xl:text-[34px] font-bold cursor-pointer hover:text-[#B88E2F]">
            <a href="/home">Furnio </a>
          </h1>
        </div>
        <nav className="lg:flex items-center justify-center hidden">
          <ul className="flex justify-between gap-6 lg:gap-16">
            <li>
              <a href="/shop" className="hover:underline hover:text-[#B88E2F]">
                Shop
              </a>
            </li>
            <li>
              <a
                href="/productdetail"
                className="hover:underline hover:text-[#B88E2F]"
              >
                Product Detail
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:underline hover:text-[#B88E2F]">
                Cart
              </a>
            </li>
            <li>
              <a
                href="contact"
                className="hover:underline hover:text-[#B88E2F]"
              >
                Contact
              </a>
            </li>
          </ul>{" "}
        </nav>{" "}
        <Image
          className="p-1 sm:hidden block cursor-pointer"
          src="bars.svg"
          alt="Menu"
          width={25}
          height={25}
        />
        <div className="p-1 sm:flex flex-row gap-4 lg:gap-8 hidden cursor-pointer">
          <Image src="users.svg" alt="User Icon" width={28} height={28} />
          <Image src="search.svg" alt="Search Icon" width={28} height={28} />
          <Image
            src="hearticon.svg"
            alt="Wishlist Icon"
            width={28}
            height={28}
          />
          <Image src="carticon.svg" alt="Cart Icon" width={28} height={28} />
        </div>
      </header>
    </main>
  );
};

export default Header;
