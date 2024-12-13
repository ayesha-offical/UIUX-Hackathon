import Image from "next/image"

const Page = () => {
    return (
    <main className="flex flex-col">
    <div
      className="mt-3 h-[200px] sm:h-[250px] md:h-[316px] "
      style={{ backgroundImage: "url('/blurpic.svg')" }}>
      <div className="flex flex-col items-center justify-center text-center">
        <Image
          className="flex flex-col mt-20"
          src="headerlogo.svg"
          alt="Logo"
          width={50}
          height={32}
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium flex pt-3">
          Blog
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
          <span className="font-normal">Blog</span>
        </p>
      </div>
    </div>

<div>

</div>
<div className="lg:w-[100%] place-content-center justify-center item-center flex py-16  sm:flex-row flex-col gap-28">
<div className="flex flex-col  tab:w-1/2 px-10 gap-8 lg:pl-16">

             <div className="blogimage flex gap-6 flex-col ">
                  <Image
                  src={"blogimage.svg"}
                  alt="image"
                  width={817}
                  height={500}
                  />
                   <Image
                  src={"blogbottom.svg"}
                  alt="image"
                  width={349}
                  height={24}
                  />
             </div>
             <div className="flex flex-col gap-5">
                   <h2 className="font-medium mini:text-[text-16px] small:text-[20px] md:text-[30px]">Exploring new ways of decorating</h2>
                   <p className="text-[#9F9F9F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
             </div>
             
             <p className="underline"> Read more</p>

             <div className="flex flex-col gap-4 mt-8">
                   <Image
                   src={"blogimage2.svg"}
                   alt="image"
                   width={817}
                   height={500}
                   />
                     <Image
                  src={"blogbottom.svg"}
                  alt="image"
                  width={349}
                  height={24}
                  />
             </div>
             <div className="flex flex-col gap-5">
                   <h2 className="font-medium mini:text-[text-16px] small:text-[20px] md:text-[30px]">Going all-in with millennial design</h2>
                   <p className="text-[#9F9F9F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
             </div>
             
             <p className="underline"> Read more</p>
             <div className="blogimage flex gap-6 flex-col">
                  <Image
                  src={"blogimage3.svg"}
                  alt="image"
                  width={817}
                  height={500}
                  />
                   <Image
                  src={"blogbottom.svg"}
                  alt="image"
                  width={349}
                  height={24}
                  />
             </div>
             <div className="flex flex-col gap-5">
                   <h2 className="font-medium mini:text-[text-16px] small:text-[20px] md:text-[30px]">Going all-in with millennial design</h2>
                   <p className="text-[#9F9F9F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
             </div>
             
             <p className="underline"> Read more</p>
      

</div>


   <div className="sideportion w-1/2 tab:flex hidden flex-col ml-10 gap-10">
   <div className="sm:flex gap-0    hidden ">
  <input type="text"  className=" border rounded-r-none h-10 w-64 text-center rounded-[8px]"
   
   />
   <Image className= "cursor-pointer rounded-[8px] border rounded-l-none p-1"
    src="searchicon.svg"
    alt="Search"
    width={35}
    height={35}
    />
    
    </div>

    <div className="flex flex-col ">
        <span className="font-medium text-[24px] flex flex-row">Categories</span>
        <div className="flex flex-row gap-40 mt-8 ">
        <ul className="flex flex-col gap-6 text-[#9F9F9F]">
            <li>Craft</li>
            <li>Design</li>
            <li>Handmade</li>
            <li>Interior</li>
            <li>Wood</li>
        </ul>
        <ul className="flex flex-col gap-6 text-[#9F9F9F]">
            <li>2</li>
            <li>8</li>
            <li>7</li>
            <li>1</li>
            <li>6</li>
        </ul>
        </div>
    </div>
    <div className="flex flex-col mt-8">
        <span className="font-medium text-[24px]">Recent Posts</span>
        <div className="flex flex-col mt-5 gap-10">
        <Image
        src={"post1.svg"}
        alt="post1"
        width={211}
        height={80}
        />
        <Image
        src={"post2.svg"}
        alt="post2"
        width={211}
        height={80}
        />
        <Image
        src={"post3.svg"}
        alt="post3"
        width={211}
        height={80}
        />
        <Image
        src={"post4.svg"}
        alt="post4"
        width={211}
        height={80}
        />
        <Image
        src={"post5.svg"}
        alt="post5"
        width={211}
        height={80}
        />
</div>
    </div>
   </div>
  
   </div>
   <Image
 className="flex justify-center items-center text-center px-6 mx-auto cursor-pointer max-w-[90%] md:max-w-[70%] lg:max-w-[50%]"
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
  )
}

export default Page