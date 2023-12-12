"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { toast } from "react-toastify";
import { useGQLMutation } from "@/utils/hooks/useGQLMutation";
import { FORGOT_PASSWORD } from "@/graphql/mutations/forgotPassword";
import { useRouter } from "next/navigation";
import { CustomInput } from "../form-field/custom/CustomInput";

const ResetPasswordForm = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState<string>("");
  const { mutate } = useGQLMutation(FORGOT_PASSWORD);

  // TODO: validate email before submit

  const onForgotPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast("Please enter your email", { type: "warning" });
      return;
    }

    mutate(
      { email },
      {
        onSuccess: (res: any) => {
          push("/auth/login?success=true&message=" + res.forgotPassword.message);
        },
        onError: (res: any) => {
          console.log("res", res);
          const msg = res.forgotPassword.message;
          toast(msg, { type: "error" });
        },
      },
    );
  };

  return (
    <>
      <form className="flex flex-col gap-8" onSubmit={(e) => onForgotPassword(e)}>
        <CustomInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          label="Email"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <Button type="submit" className="bg-blue-600 px-4 py-2 hover:bg-blue-700">
          Reset Password
        </Button>
      </form>

      <Link href="/auth/login" className="my-3 flex justify-center">
        <span className="text-sm font-medium text-blue-600">Back to Sign In</span>
      </Link>
    </>
  );
};

export default ResetPasswordForm;
