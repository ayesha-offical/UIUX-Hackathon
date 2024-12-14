
import Image from "next/image"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
const Page = () => {
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
           Contact
          </h1>
          <p className="flex fflex-row font-medium gap-2 mt-4">
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
            <span className="font-normal">Contact</span>
          </p>
        </div>
      </div>

<div className="content flex flex-col justify-center items-center text-center mt-12 gap-3">
       <span className="font-semibold text-[36px]">Get In Touch With Us</span>
       <div className="flex flex-col">
       <span className="text-[#9F9F9F]  flex justify-center items-center text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us </span>
        <span className="text-[#9F9F9F]">An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</span>
        </div>
</div>


<div className="flex lg:flex-row flex-col justify-center items-center mt-11 gap-8">

    <Image className="-mt-32 lg:block hidden"
    src={"adress.svg"}
    alt="adress"
    width={393}
    height={597}
    />
                   <div className="flex flex-col gap-10">
<div className="grid w-full max-w-sm items-center gap-7">
              <Label className="" htmlFor="email">
                Your name
              </Label>
              <Input
                className=" boder text-[#9F9F9F] border-gray-500 rounded-[7px] p-6"
                type="email"
                id="email"
                placeholder="Abc" 
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-7 ">
              <Label htmlFor="email">Email address</Label>
              <Input
                className="boder text-[#9F9F9F] border-gray-500 rounded-[7px] p-6"
                type="email"
                id="email"
                placeholder="Abc@def.com" 
              />
            </div>
      
          <div className="grid w-full max-w-sm items-center gap-7">
            <Label htmlFor="email">Subject</Label>
            <Input
              className="boder border-gray-500 text-[#9F9F9F] rounded-[7px] p-6 w-[350px]"
              type="email"
              id="email"
              placeholder="This is an optional" 
            />
          </div>
          <Label htmlFor="message">Message</Label>
          <Textarea className="boder border-gray-500 text-[#9F9F9F] rounded-[7px]"placeholder="Hi! i'd like to ask about" />
          <div className="flex items-center justify-center">
                <Button className="bg-[#B88E2F] rounded-[3px]  text-white w-[237px] h-[50px]">
                    Submit
                </Button>
                </div>
                </div>   
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
      </div>
                

      </main>
  )
}

export default Page