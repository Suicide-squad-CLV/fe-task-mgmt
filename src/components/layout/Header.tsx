import React from "react";
import { Input } from "../ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="fixed left-0 right-0 z-50 bg-white">
      <header className="flex items-center justify-center">
        <div className="mt-7 flex min-w-[261px] items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.7488 14.1421L14.1422 3.53553L3.53555 14.1421L14.1422 24.7487L24.7488 14.1421ZM14.1422 0L1.54972e-05 14.1421L14.1422 28.2843L28.2843 14.1421L14.1422 0Z"
              fill="#2563DC"
            />
          </svg>
          <span className="text-xl font-medium">TaskBan</span>
        </div>
        <div className="flex flex-1 flex-wrap items-center gap-20 border-b border-solid">
          <div className="relative flex-1 border-l py-3 pl-10">
            <Input placeholder="Search" />
            <MagnifyingGlassIcon className="absolute bottom-0 right-3 top-0 my-auto h-6 w-6 text-gray-500" />
          </div>
          <div className="mr-10 h-11 w-11 rounded-full bg-gray-300"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
