import Image from "next/image"

export const Furniture = () => {
  return (
<main className="flex  justify-center items-center text-center flex-col ">

<div className="mt-14">
<p className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-[#616161]">
  Share your setup with
</p>

<h5 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] text-[#3A3A3A]">
  #FuniroFurniture
</h5>

    
</div>
    <div  >
        <Image 
        src={"mainpic.svg"}
        alt="pic"
        width={1680}
        height={400}
        />
            <div className=" pt-14 border-b border-opacity-30"></div>
    </div>

    </main>
  )
}
