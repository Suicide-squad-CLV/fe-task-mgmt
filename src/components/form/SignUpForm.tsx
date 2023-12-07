"use client";
import React, { useState } from "react";
import { CustomInput } from "../form-control/CustomInput";
import { Button } from "../ui/button";
import Link from "next/link";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

type Props = {};

const SignUpForm = (props: Props) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isShowRtPassword, setIsShowRtPassword] = useState<boolean>(false);

  const handleIconClick = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleRtIconClick = () => {
    setIsShowRtPassword(!isShowRtPassword);
  };
  return (
    <>
      <div className="my-8">
        <span className="text-2xl font-semibold">
          Get started with <span className="text-3xl font-semibold text-blue-600">TaskBan</span>
        </span>
      </div>

      <div className="flex flex-col gap-8">
        <CustomInput id="fullname" label="Full Name" name="fullname" placeholder="Enter your name" type="text" />
        <CustomInput id="email" label="Email" name="email" placeholder="Enter your email" type="email" />
        <CustomInput
          id="password"
          label="Password"
          name="password"
          placeholder="Enter your password"
          type={!isShowPassword ? "password" : "text"}
          Icon={!isShowPassword ? EyeIcon : EyeSlashIcon}
          onIconClick={handleIconClick}
        />
        <CustomInput
          id="confirm"
          label="Confirm Password"
          name="confirm"
          placeholder="Confirm Password"
          type={!isShowRtPassword ? "password" : "text"}
          Icon={!isShowRtPassword ? EyeIcon : EyeSlashIcon}
          onIconClick={handleRtIconClick}
        />
        <Button className="bg-blue-600 px-4 py-2 hover:bg-blue-700">Sign Up</Button>
      </div>
      <Link href="/auth/login" className="my-3 flex justify-center">
        <span className="text-sm font-medium">
          Already have an account? <span className="text-sm font-medium text-blue-600">Sign In</span>
        </span>
      </Link>
    </>
  );
};

export default SignUpForm;
