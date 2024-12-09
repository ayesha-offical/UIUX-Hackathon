import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
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
            Product Comparision
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
            <span className="font-normal">Comparision</span>
          </p>
        </div>
      </div>

      <div className="allitems">
        <div className="rowitems  flex flex-col mini:flex-row justify-center gap-11 items-center px-14">
          <div className="text hidden lg:flex flex-col">
            <span className="text-[20px] font-medium lg:text-[28px] "> Go To product</span>
            <span className=" text-[20px] font-medium lg:text-[28px]">Page for more</span>
            <span className="text-[20px] font-medium lg:text-[28px]">Products</span>
            <p className="text-[#727272] underline pt-4">View More</p>
          </div>

          <div className="images flex flex-row gap-10">
            <div className="image1 mt-6">
              <Image
                src={"sofa1.svg"}
                alt="sofapic1"
                width={280}
                height={177}
              />
              <div className="image1text pt-2 gap-9">
                <h2 className="font-semibold text-[10px] mini:text-[16px] lg:text-[24px]">Asgaard Sofa</h2>
                <p className="font-semibold text-[10px] mini:text-[16px]">Rs. 250,000.00</p>

                <p className="font-semibold flex flex-row gap-2 text-[10px] mini:text-[16px]">
                  4.7
                  <Image 
                    className="pb-3 small:block hidden"
                    src="stars.svg"
                    alt="stars"
                    width={110}
                    height={20}
                  />
                  <Image
                    className="lg:flex hidden"
                    src="line.svg"
                    alt="line"
                    width={2}
                    height={0}
                  />
                  <p className="text-[#9F9F9F] lg:flex hidden text-xs md:text-[13px] pb-3  items-center justify-center text-center pl-3">
                    204 Rewiew
                  </p>
                </p>
              </div>
            </div>

            <div className="image1 mt-6 sm:block hidden">
              <Image
                src={"sofa1.svg"}
                alt="sofapic1"
                width={280}
                height={177}
              />
              <div className="image1text pt-2 gap-9 small:block hidden">
                <h2 className="font-semibold text-[16px] lg:text-[24px]">Outdoor Sofa</h2>
                <p className="font-semibold ">Rs. 224,000.00</p>

                <p className="font-semibold flex flex-row gap-2 ">
                  4.7
                  <Image
                    className="pb-3"
                    src="stars.svg"
                    alt="stars"
                    width={110}
                    height={20}
                  />
                  <Image
                    className="lg:flex hidden"
                    src="line.svg"
                    alt="line"
                    width={2}
                    height={0}
                  />
                  <p className="text-[#9F9F9F] lg:flex hidden text-xs md:text-[13px] pb-3  items-center justify-center text-center pl-3">
                    204 Rewiew
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div className="selctor flex gap-4 flex-col -mt-11">
            <h2 className="font-semibold  text-[24px] ">Add Product</h2>
            <Select>
              <SelectTrigger className="w-[180px] text-white  rounded-[4px]">
                <SelectValue placeholder="Choose a Product" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="bed">Bed</SelectItem>
                <SelectItem value="sofas">Sofas&apos;</SelectItem>
                <SelectItem value="Chairs">Chairs&apos;</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
      
          </div>
        </div>
      </div>
      <div className="border-b pt-8 "></div>

      <div className="columnitem flex flex-row mt-7 ">
          <div className="flex flex-col gap-4 ml-12 ">
            <p className="font-medium text-[28px]">General</p>
            <ul className="flex gap-5 flex-col">
              <li>Sales Package</li>
              <li>Model Number</li>
              <li>Secondary Material</li>
              <li>Configration</li>
              <li>Upholstery Material</li>
              <li>Upholstery Color</li>
            </ul>

            <p className="font-medium text-[28px] mt-12">Product</p>
            <ul className="flex gap-5 flex-col">
              <li>Filling Material</li>
              <li>Finish Type</li>
              <li>Adjustable Headrest</li>
              <li>Maximum Load Capacity</li>
              <li>Origin of Manifacture</li>
           
            </ul>

            <p className="font-medium text-[28px] mt-12">Dimensions</p>
            <ul className="flex gap-5 flex-col">
              <li>Width</li>
              <li>Hieght</li>
              <li>Depth</li>
              <li>Wieght</li>
              <li>Sear Height</li>
              <li>Leg Height</li>
            </ul>

            <p className="font-medium text-[28px] mt-12">Warranty</p>
            <ul className="flex gap-10 flex-col">
              <li>Warranty Summary</li>
              <li>Warranty Service Type</li>
            </ul>


            <p className=" mt-12">Coverd in Warranty</p>
            <ul className="flex gap-24 flex-col mt-11">
              <li>Not Coverded inWarranty </li>
              <li> Domestic Warranty </li>
            </ul>

          </div>

          <div className="border-l pt-8 ml-8 small:block hidden"></div>

          <div className="small:flex flex-col gap-4 ml-12  hidden">
            <p className="font-medium text-[28px] text-white">General</p>
            <ul className="flex gap-5 flex-col">
              <li>1 sectional sofa</li>
              <li>TFCBLIGRBL6SRHS</li>
              <li>Sloid Wood</li>
              <li>L-shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>

            <p className="font-medium text-[28px] mt-12 text-white">Product</p>
            <ul className="flex gap-5 flex-col">
              <li>Foam</li>
              <li>Bright Grey & Lion</li>
              <li>No</li>
              <li>280 KG</li>
              <li>Pakistan</li>
           
            </ul>

            <p className="font-medium text-[28px] mt-12 text-white">Dimensions</p>
            <ul className="flex gap-5 flex-col">
              <li>265.32 cm</li>
              <li>76 cm</li>
              <li>167.76 cm</li>
              <li>45 KG</li>
              <li>41.52 cm</li>
              <li>5.46 cm</li>
            </ul>

            <p className="font-medium text-[28px] mt-12 text-white">Warranty</p>
            <ul className="flex gap-10 flex-col">
              <li>1 Year Manufacturing Warranty</li>
              <li>For Warranty Claims or Any Product </li>
            </ul>


            <p className=" mt-12">Warranty Against Manufacturing</p>
         
            <ul className="flex gap-24 flex-col mt-11">
              <li>The Warranty Does Not Cover </li>

              <li>1 Year </li>

              <button className="bg-[#B88E2F] text-white h-12 w-full md:w-40 p-2 md:p-0 ">
    Add To Cart
  </button>
            </ul>

          </div>

          <div className="border-l pt-8 ml-8 small:block hidden"></div>

             <div className="md:flex flex-col gap-4 ml-12 hidden">
            <p className="font-medium text-[28px] text-white">General</p>
            <ul className="flex gap-5 flex-col">
            <li>1 Three Seater, 2 single </li>
              <li>TFCBLIGRBL6SRHS</li>
              <li>Sloid Wood</li>
              <li>L-shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>

            <p className="font-medium text-[28px] mt-12 text-white">Product</p>
            <ul className="flex gap-5 flex-col">
            <li>Matte</li>
              <li>Bright Grey & Lion</li>
              <li>No</li>
              <li>280 KG</li>
              <li>Pakistan</li>
           
            </ul>

            <p className="font-medium text-[28px] mt-12 text-white">Dimensions</p>
            <ul className="flex gap-5 flex-col">
            <li>265.32 cm</li>
              <li>76 cm</li>
              <li>167.76 cm</li>
              <li>45 KG</li>
              <li>41.52 cm</li>
              <li>5.46 cm</li>
            </ul>

            <p className="font-medium text-[28px] mt-12 text-white">Warranty</p>
            <ul className="flex gap-10 flex-col">
            <li>1.2 Year Manufacturing Warranty</li>
            <li>For Warranty Claims or Any Product </li>
            </ul>


            <p className=" mt-12">Warranty of the product is limited </p>
            <ul className="flex gap-24 flex-col mt-11">
              <li>Not Coverded inWarranty </li>
             

<li>3 Months</li>

<button className="bg-[#B88E2F] text-white h-12 w-full md:w-40 p-2 md:p-0 ">
Add To Cart
</button>
</ul>

          </div>

          <div className="md:block border-l pt-8 ml-8 hidden"></div>
      </div>
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

export default page;
