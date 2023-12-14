"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import UploadAvatarPopup from "../popup/UploadAvatarPopup";
import { useSession } from "next-auth/react";

const Header = () => {
  const imageUrl = "https://github.com/shadcn.png";
  const { data } = useSession();

  const [showPopup, setShowPopup] = useState<boolean>(false);
  const handleCloseDialog = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="fixed left-0 right-0 z-50 bg-white">
        <header className="flex items-center justify-center">
          <div className="mt-7 flex min-w-[260px] items-center justify-center gap-2">
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
          <div className="flex flex-1 flex-wrap items-center gap-20 border-b border-l border-solid">
            <div className="relative flex-1 py-3 pl-12">
              <Input placeholder="Search" />
              <MagnifyingGlassIcon className="absolute bottom-0 right-3 top-0 my-auto h-6 w-6 text-gray-500" />
            </div>
            <div className="group relative mr-10 h-11 w-11 cursor-pointer rounded-full bg-gray-300">
              <Avatar className="m-auto h-full w-full" onClick={() => setShowPopup(true)}>
                <AvatarImage src={data?.user?.avatar ?? imageUrl} />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <div
                className="absolute bottom-0 right-0 hidden h-4 w-4 rounded-full bg-gray-100 group-hover:flex"
                onClick={() => {
                  setShowPopup(true);
                }}
              >
                <PencilIcon className="m-auto block h-2 w-2" />
              </div>
            </div>
          </div>
        </header>
      </div>

      {showPopup && (
        <UploadAvatarPopup
          isShow={showPopup}
          currentAvatar={data?.user?.avatar ?? ""}
          handleCloseDialog={handleCloseDialog}
        />
      )}
    </>
  );
};

export default Header;
