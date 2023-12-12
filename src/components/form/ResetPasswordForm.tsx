"use client";
import React from "react";
import { CustomInput } from "../form-control/CustomInput";
import { Button } from "../ui/button";
import Link from "next/link";

const ResetPasswordForm = () => {
  return (
    <>
      <form className="flex flex-col gap-8">
        <CustomInput inputId="email" label="Email" name="email" placeholder="Enter your email" type="email" />
        <Button className="bg-blue-600 px-4 py-2 hover:bg-blue-700">Reset Password</Button>
      </form>
      <Link href="/auth/login" className="my-3 flex justify-center">
        <span className="text-sm font-medium text-blue-600">Back to Sign In</span>
      </Link>
    </>
  );
};

export default ResetPasswordForm;
