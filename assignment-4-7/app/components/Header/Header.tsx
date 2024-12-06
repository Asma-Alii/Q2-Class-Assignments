import Image from "next/image";
import { DM_Sans } from "next/font/google";
import Link from "next/link";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export default function Header() {
  return (
    <>
      <div
        className="flex justify-between h-10 w-[90vw] lg:w-[83vw] m-auto mt-8 md:mt-14 
        lg:mt-16 xl:mt-[102px]  xl:w-[81.23vw] xl:h-[35px] items-center"
      >
        <div className="w-[12vw] md:w-[9vw] lg:w-[7vw] xl:w-[68px] xl:h-[23px] ">
          <Image
            src="/images/sitee-logo.png"
            alt="logo"
            layout="responsive"
            width={60}
            height={60}
          />
        </div>

        <div className="">
          <ul
            className={` ${dmSans.className} flex gap-5 md:gap-8 lg:gap-16 xl:gap-10  font-medium  text-[3vw] sm:text-[2.5vw] 
                md:text-[2.2vw] lg:text-[1.7vw] xl:text-[20px] `}
          >
            <Link href={"/"}>
              <li>Work</li>
            </Link>
            <Link href={"/about"}>
              <li>About</li>
            </Link>
            <li>Playground</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
