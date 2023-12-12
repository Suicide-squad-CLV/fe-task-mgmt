import { CustomInput } from "@/components/form-control/CustomInput";
import ResetPasswordForm from "@/components/form/ResetPasswordForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const ResetPasswordPage = (props: Props) => {
  return (
    <>
      <div className="my-8">
        <span className="text-2xl font-semibold">Forgot Password?</span>{" "}
        <p className="mt-4 text-sm">Enter your email for the verification process, we will send code to your email</p>
      </div>
      <ResetPasswordForm />
    </>
  );
};

export default ResetPasswordPage;
