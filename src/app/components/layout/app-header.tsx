import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
export default function Header() {
  return (
    <header className="flex justify-center items-center border-border sticky  z-50 w-full h-20 ">
      <div className="w-11/12 lg:w-3/6 h-20  bg-white opacity-90  flex flex-row items-center justify-between  fixed     ">
        <>
          <Image
            width={50}
            height={50}
            src="/images/Bd-1-black.png"
            alt="Login"
          />
        </>

        <div className=" space-x-5 hidden lg:flex flex-row">
          <div className="w-fit h-fit py-1 px-3">
            <Link href="/">Blog</Link>
          </div>
          <div className="w-fit h-fit py-1 px-3 rounded-2xl  bg-gray-900 text-white">
            {" "}
            <Link href="/">Portfolio</Link>
          </div>
        </div>
        <div className="h-fit w-fit rounded-full ring-1 ring-gray-500 p-2 lg:hidden">
          <HiOutlineMenuAlt4 />
        </div>
      </div>
    </header>
  );
}
