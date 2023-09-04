import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-center items-center border-border  bg-white opacity-90 sticky  z-50 w-full h-20 ">
      <div className="w-11/12 lg:w-3/6 h-20   flex flex-row items-center justify-between     ">
        <>
          <Image
            width={50}
            height={50}
            src="/images/Bd-1-black.png"
            alt="Login"
          />
        </>

        <div className=" space-x-5 flex flex-row">
          <div className="w-fit h-fit space-x-5 py-1 px-3">
            <Link href="/">Home :)</Link>
            <Link href="/pages/blog">Blog </Link>
          </div>
          <div className="w-fit h-fit py-1 px-3 rounded-xl  bg-gray-900 text-white">
            {" "}
            <Link href="/">Portfolio</Link>
          </div>
        </div>
        {/* will add this functionality as thing begin to grow and we need more functionality */}
        {/* <div className="h-fit w-fit rounded-full ring-1 ring-gray-500 p-2 lg:hidden">
          <HiOutlineMenuAlt4 />
        </div> */}
      </div>
    </header>
  );
}
