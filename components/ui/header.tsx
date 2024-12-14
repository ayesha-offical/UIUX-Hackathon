'use client'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isClick, setisClick] = useState(false);

  const toggle = (): void => {
    setisClick(!isClick);
  };
  return (
    <>
    <main className="flex justify-center items-center">
      <header className="mt-7 w-screen flex lg:flex-row justify-between items-center px-4 lg:px-8">
        <div className="flex gap-1 items-center ">
          <Image src="headerlogo.svg" alt="Logo" width={50} height={32} />
          <h1 className="text-xl sm:text-xl lg:text-3xl xl:text-[34px] font-bold cursor-pointer hover:text-[#B88E2F]">
            <a href="/home">Furnio </a>
          </h1>
        </div>
        <nav className="lg:flex items-center justify-center hidden">
          <ul className="flex justify-between gap-6 lg:gap-16">
            <li>
              <Link href="/shop" className="hover:underline hover:text-[#B88E2F]">
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/productdetail"
                className="hover:underline hover:text-[#B88E2F]"
              >
                Product Detail
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline hover:text-[#B88E2F]">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="hover:underline hover:text-[#B88E2F]"
              >
                Contact
              </Link>
            </li>
          </ul>{" "}
        </nav>{" "}
        <span className=" flex lg:hidden items-center justify-center p-2 rounded-md text-slate-400 hover:text-[#B88E2F]"
        onClick={toggle}
        >
          {isClick ?(
        <Image
 
          src="xmark.svg"
          alt="Menu"
          width={25}
          height={25}
        />

          ) :(
            <Image
 
            src="bars.svg"
            alt="Menu"
            width={25}
            height={25}
          />
          )}


        </span>
        <div className="p-1 lg:flex flex-row gap-4 lg:gap-8 hidden cursor-pointer">

          
        <Link
            href="checkout"
            className="hover:underline hover:text-[#B88E2F]"
          >
             <Image src="users.svg" alt="User Icon" width={28} height={28} />
          </Link>


          <Image src="search.svg" alt="Search Icon" width={28} height={28} />

          <Link
            href="productcomparision"
            className="hover:underline hover:text-[#B88E2F]"
          >
            <Image
              src="hearticon.svg"
              alt="Wishlist Icon"
              width={28}
              height={28}
            />
          </Link>

          <Link href="cart" className="hover:underline hover:text-[#B88E2F]">
            <Image src="carticon.svg" alt="Cart Icon" width={28} height={28} />
          </Link>
        </div>
      </header>
   
    </main>
    {isClick && (
        <div className="flex flex-col">
          <ul className="flex flex-col justify-center items-center gap-6">
            <li>
              <Link href="/home" className="hover:underline hover:text-[#B88E2F]">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="hover:underline hover:text-[#B88E2F]"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link href="/productdetail" className="hover:underline hover:text-[#B88E2F]">
                Product Detail
              </Link>
            </li>
            <li>
              <Link
                href="blog"
                className="hover:underline hover:text-[#B88E2F]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="productcomparision"
                className="hover:underline hover:text-[#B88E2F]"
              >
             Product Comparision
              </Link>
            </li>
            <li>
              <Link
                href="cart"
                className="hover:underline hover:text-[#B88E2F]"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                href="checkout"
                className="hover:underline hover:text-[#B88E2F]"
              >
                Check Out
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="hover:underline hover:text-[#B88E2F]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
