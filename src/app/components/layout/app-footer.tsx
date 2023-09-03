import Link from "next/link";
import Image from "next/image";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { DiGithubBadge } from "react-icons/di";

export default function Footer() {
  return (
    <footer className="w-full flex mt-10 justify-center">
      <div className="flex items-center justify-between w-11/12 lg:w-3/6 p-5 rounded-lg bg-background/70 backdrop-blur-lg ring-1 ring-gray-500">
        <div className="flex text-black dark:text-gray-400 items-center lg:flex-row flex-col">
          <Image
            width={40}
            height={40}
            src="/images/Bd-1-black.png"
            alt="Login"
          />
          <div className="flex flex-col m-2 items-center lg:items-start">
            <p className="font-bold">Blog Bureau</p>
            <p>&copy; 2023 Kennedy Inc.</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex p-1 cursor-pointer divide-x divide-gray-600 space-x-2 text-2xl rounded-2xl ring-1 ring-gray-500">
            <div className="flex space-x-2 text-black dark:text-gray-500">
              <MdOutlineDarkMode />
              <MdOutlineLightMode />
            </div>
            <div className="pl-2 text-black dark:text-gray-500">
              <DiGithubBadge />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
