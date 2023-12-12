"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { UPDATE_PASSWORD } from "@/graphql/mutations/resetPassword";
import { useGQLMutation } from "@/utils/hooks/useGQLMutation";
import { CustomInput } from "../form-field/custom/CustomInput";

const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isShowRtPassword, setIsShowRtPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [cfPassword, setCfPassword] = useState<string>("");
  const { mutate } = useGQLMutation(UPDATE_PASSWORD);

  const onResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== cfPassword) {
      toast("Your confirm password does not match");
      return;
    }
    const payload = {
      password: password,
      token: searchParams.get("token"),
    };

    mutate(payload, {
      onSuccess: (res: any) => {
        console.log("success", res);
        push("/auth/login?success=true&message=" + res.updatePassword.message);
      },
      onError: (e) => {
        console.log("error", e);
      },
    });
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={(e) => onResetPassword(e)}>
      <CustomInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        label="Password"
        name="password"
        placeholder="Enter your password"
        type={!isShowPassword ? "password" : "text"}
        Icon={!isShowPassword ? EyeIcon : EyeSlashIcon}
        onIconClick={() => setIsShowPassword(!isShowPassword)}
      />
      <CustomInput
        value={cfPassword}
        onChange={(e) => setCfPassword(e.target.value)}
        id="confirm"
        label="Confirm Password"
        name="confirm"
        placeholder="Confirm Password"
        type={!isShowRtPassword ? "password" : "text"}
        Icon={!isShowRtPassword ? EyeIcon : EyeSlashIcon}
        onIconClick={() => setIsShowRtPassword(!isShowRtPassword)}
      />
      <Button className="bg-blue-600 px-4 py-2 hover:bg-blue-700">Change Password</Button>
    </form>
  );
};

export default NewPasswordForm;
