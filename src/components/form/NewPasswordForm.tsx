"use client";
import React, { useState } from "react";
import { CustomInput } from "../form-control/CustomInput";
import { Button } from "../ui/button";
import Link from "next/link";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

type Props = {};

const NewPasswordForm = (props: Props) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isShowRtPassword, setIsShowRtPassword] = useState<boolean>(false);

  const handleIconClick = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleRtIconClick = () => {
    setIsShowRtPassword(!isShowRtPassword);
  };
  return (
    <form className="flex flex-col gap-8">
      <CustomInput
        inputId="password"
        label="Password"
        name="password"
        placeholder="Enter your password"
        type={!isShowPassword ? "password" : "text"}
        Icon={!isShowPassword ? EyeIcon : EyeSlashIcon}
        onIconClick={handleIconClick}
      />
      <CustomInput
        inputId="confirm"
        label="Confirm Password"
        name="confirm"
        placeholder="Confirm Password"
        type={!isShowRtPassword ? "password" : "text"}
        Icon={!isShowRtPassword ? EyeIcon : EyeSlashIcon}
        onIconClick={handleRtIconClick}
      />
      <Button className="bg-blue-600 px-4 py-2 hover:bg-blue-700">Change Password</Button>
    </form>
  );
};

export default NewPasswordForm;
