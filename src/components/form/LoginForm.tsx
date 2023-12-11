"use client";
import React, { useEffect, useState } from "react";
import { CustomInput } from "../form-control/CustomInput";
import Link from "next/link";
import { Button } from "../ui/button";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useGQLQuery } from "@/utils/hooks/useGQLQuery";

type Props = {};

const LoginForm = (props: Props) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const handleIconClick = () => {
    setIsShowPassword(!isShowPassword);
  };

  // const GET_ALL_FILMS = `
  // query {
  //   allFilms {
  //       edges {
  //           node {
  //               title
  //               id
  //           }
  //       }
  //   }
  // }`;
  // const options = {
  //   staleTime: 1000 * 60 * 5, // 5 minutes
  // };

  // const token = "your-bearer-token";
  // const { data } = useGQLQuery("query-key", GET_ALL_FILMS, {}, token);
  // console.log(data);

  return (
    <>
      <div className="mb-8">
        <span className="text-3xl font-semibold">Welcome to</span>
        <span className="text-4xl font-semibold text-blue-600">TaskBan</span>
      </div>
      <div className="flex flex-col gap-8">
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

        <Link href="/auth/reset-password" className="-my-3 ml-auto text-sm font-medium text-blue-600">
          Forgot Password?
        </Link>
        <Button className="bg-blue-600 px-4 py-2 hover:bg-blue-700">Sign In</Button>
      </div>
      <Link href="/auth/signup" className="my-3 flex justify-center gap-1">
        <span className="text-sm font-medium">Not registered yet?</span>
        <span className="text-sm font-medium text-blue-600">Create an account</span>
      </Link>
    </>
  );
};

export default LoginForm;
