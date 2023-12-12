"use client";
import React, { useEffect, useState } from "react";
import { CustomInput } from "../form-control/CustomInput";
import Link from "next/link";
import { Button } from "../ui/button";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useGQLQuery } from "@/utils/hooks/useGQLQuery";
import { useGQLMutation } from "@/utils/hooks/useGQLMutation";
import { LOGIN_USER } from "@/graphql/mutations/login";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

type Props = {};

const LoginForm = (props: Props) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<any>({});
  // const loginMutation = useGQLMutation(LOGIN_USER, { email: "phidv9855@gmail.com", password: "abcd1234" });
  const loginMutation = useGQLMutation(LOGIN_USER, userInfo);

  const handleIconClick = () => {
    setIsShowPassword(!isShowPassword);
  };
  const handleInputChange = (key: string, value: string) => {
    setUserInfo((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: true,
      email: userInfo.email,
      password: userInfo.password,
      callbackUrl: "/task-management",
    });
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleLogin}>
      <CustomInput
        inputId="email"
        label="Email"
        name="email"
        placeholder="Enter your email"
        type="email"
        onChange={(e) => handleInputChange("email", e.target.value)}
      />

      <CustomInput
        inputId="password"
        label="Password"
        name="password"
        placeholder="Enter your password"
        type={!isShowPassword ? "password" : "text"}
        Icon={!isShowPassword ? EyeIcon : EyeSlashIcon}
        onIconClick={handleIconClick}
        onChange={(e) => handleInputChange("password", e.target.value)}
      />

      <Link href="/auth/reset-password" className="-my-3 ml-auto text-sm font-medium text-blue-600">
        Forgot Password?
      </Link>
      <Button className="bg-blue-600 px-4 py-2 hover:bg-blue-700" type="submit">
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
