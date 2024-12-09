import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

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
            Checkout
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
            <span className="font-normal">checkout</span>
          </p>
        </div>
      </div>

      <div className=" ml-16 mt-10 font-semibold text-[36px]">
        Billing details
      </div>
      <div className="w-[90%] justify-center flex py-16 gap-24 lg:flex-row flex-col">
        <div className="flex flex-col w-1/2 gap-16 pl-16">
          <div className="flex flex-row gap-5">
            <div className="grid w-full max-w-sm items-center gap-7">
              <Label className="" htmlFor="email">
                First name
              </Label>
              <Input
                className=" boder border-gray-500 rounded-[7px] p-6"
                type="email"
                id="email"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-7 ">
              <Label htmlFor="email">Last Name</Label>
              <Input
                className="boder border-gray-500 rounded-[7px] p-6"
                type="email"
                id="email"
              />
            </div>
          </div>
          <div className="grid w-full max-w-sm items-center gap-7">
            <Label htmlFor="email">Comappny Name (Optional)</Label>
            <Input
              className="boder border-gray-500 rounded-[7px] p-6 w-[350px]"
              type="email"
              id="email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-7">
            <Label htmlFor="email">Country / Region</Label>
            <Select>
              <SelectTrigger className="w-[350px] bg-white text-gray-500 p-6 rounded-[7px]">
                <SelectValue placeholder="Country/Region" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="Srilanka">SriLanka</SelectItem>
                <SelectItem value="dark">Dubai</SelectItem>
                <SelectItem value="system">America</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full max-w-sm items-center gap-7">
            <Label htmlFor="email">Street address</Label>
            <Input
              className="boder border-gray-500 rounded-[7px] p-6 w-[350px]"
              type="email"
              id="email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-7">
            <Label htmlFor="email">Town / City</Label>
            <Input
              className="boder border-gray-500 rounded-[7px] p-6 w-[350px]"
              type="email"
              id="email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-7">
            <Label htmlFor="email">Province</Label>
            <Select>
              <SelectTrigger className="w-[350px] bg-white text-gray-500 p-6 rounded-[7px]">
                <SelectValue placeholder="Province" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="Srilanka">Sindh</SelectItem>
                <SelectItem value="dark">Punjab</SelectItem>
                <SelectItem value="system">Balochistan</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full max-w-sm items-center gap-7">
            <Label htmlFor="email">ZIP code</Label>
            <Input
              className="boder border-gray-500 rounded-[7px] p-6 w-[350px]"
              type="email"
              id="email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-7">
            <Label htmlFor="email">Phone</Label>
            <Input
              className=" text-gray-500 rounded-[7px] p-6 w-[350px]"
              type="email"
              id="email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-7">
            <Label htmlFor="email">Email address</Label>
            <Input
              className="boder border-gray-500  text-gray-500 rounded-[7px] p-6 w-[350px]"
              type="email"
              id="email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-7">
            <Input
              className="boder border-gray-500  text-gray-500 rounded-[7px] p-6 w-[350px]"
              type="email"
              id="email"
              placeholder="Additinal Information"
            />
          </div>
        </div>

        <div className="sideportion w-1/2 flex flex-col ml-10">
          <div className="flex flex-row gap-24">
            <div className="flex gap-3 flex-col">
              <p className="font-medium text-[24px]">Product</p>
              <ul className="flex gap-4 flex-col">
                <li className="text-[#9F9F9F]">
                  {" "}
                  Asgaard sofa <span className="text-black">x 1</span>
                </li>
                <li>Subtotal</li>
                <li>Total</li>
              </ul>
            </div>
            <div className="flex gap-3 flex-col ">
              <p className="font-medium text-[24px] ">Subtotal</p>
              <ul className="flex gap-4 flex-col">
                <li> Rs. 250,000.00</li>
                <li>Rs. 250,000.00</li>
                <li className="font-bold text-[#B88E25] text-[24px] -">
                  Rs. 250,000.00
                </li>
              </ul>
            </div>
          </div>
          <div className="border-b pt-8 "></div>

          <div className="flex flex-col mt-5">
            <div className="flex flex-col gap-4">
              <span>Direct Bank Transfer</span>
              <span className="text-[#9F9F9F]">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </span>
            </div>

            <div className="flex flex-col gap-4 mt-3">
            <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm text-[#9F9F9F] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Direct Bank Transfer
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm text-[#9F9F9F] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>


    <div className="flex flex-col">
    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
    </div>

    <div className=" cart2 flex flex-row justify-center items-center text-center gap-5 bg-white w-[180px] h-[45px] border-[1.3px] border-black rounded-[10px]">
                <p className="">Place Order</p>
              </div>
            </div>
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
      </div>{" "}
    </main>
  );
};

export default page;
