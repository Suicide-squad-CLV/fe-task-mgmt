import React from "react";
import { CustomInput } from "../form-control/CustomInput";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

const ResetPasswordForm = (props: Props) => {
  return (
    <>
      <div className="my-8">
        <span className="text-2xl font-semibold">Forgot Password?</span>{" "}
        <p className="mt-4 text-sm">Enter your email for the verification process, we will send code to your email</p>
      </div>

      <div className="flex flex-col gap-8">
        <CustomInput id="email" label="Email" name="email" placeholder="Enter your email" type="email" />
        <Button className="bg-blue-600 px-4 py-2 hover:bg-blue-700">Reset Password</Button>
      </div>
      <Link href="/auth/login" className="my-3 flex justify-center">
        <span className="text-sm font-medium text-blue-600">Back to Sign In</span>
      </Link>
    </>
  );
};

export default ResetPasswordForm;
