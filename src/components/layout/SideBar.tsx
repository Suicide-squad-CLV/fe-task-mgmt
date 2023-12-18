"use client";
import React from "react";
import { Button } from "../ui/button";
import { ArrowUturnLeftIcon, ListBulletIcon } from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";
import ModifyTaskPopup from "../popup/ModifyTaskPopup";

type Props = {};

const SideBar = ({}: Props) => {
  return (
    <div className="flex h-[calc(100vh-180px)] flex-col">
      <Button className="w-full bg-blue-600 px-4 py-2 hover:bg-blue-700">
        <ListBulletIcon className="mr-2 h-6 w-6" /> Tasks
      </Button>
      <Button
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
        className="mt-auto w-full bg-[#FDF0EC] px-4 py-2 text-[#81290E] hover:bg-[#ddc3bb]"
      >
        <ArrowUturnLeftIcon className="mr-2 h-6 w-6" /> Log out
      </Button>
    </div>
  );
};

export default SideBar;
