

const Hero = () => {
  return (
<main className="flex justify-center items-center w-full min-h-screen mt-3"> 
    <div className="h-screen w-screen bg-cover bg-center flex items-center justify-end " style={{ backgroundImage: "url('/background.svg')" }}> 

    <div className="undercontent gap-4 pl-7 flex-col w-full max-w-lg h-auto md:h-[410px] bg-[#FFF3E3] items-start justify-center flex mr-0 md:mr-9 p-4 md:p-7 ">
  <span className="text-base md:text-lg font-semibold text-[#333333] text-start flex">New Arrival</span>
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#B88E2F]">
    Discover Our New Collection
  </h2>
  <p className="text-sm md:text-lg font-medium text-[#333333]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
  </p>
  <button className="bg-[#B88E2F] text-white h-12 w-full md:w-40 p-2 md:p-0 mt-4">
    BUY NOW
  </button>
</div>

    </div> 
    </main>

  )
}

export default Hero