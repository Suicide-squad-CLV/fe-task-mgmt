"use client";

import React, { useEffect } from "react";
import LoginForm from "@/components/form/LoginForm";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  console.log("session", session);

  if (status === "authenticated") {
    redirect("/task-management");
  }

  useEffect(() => {
    const notify = searchParams.get("success");
    if (notify == "true") {
      const msg = searchParams.get("message");
      toast(msg, { type: "success" });
    }
  }, []);

  return (
    <>
      <div className="mb-8">
        <span className="text-3xl font-semibold">Welcome to</span>
        <span className="text-4xl font-semibold text-blue-600">TaskBan</span>
      </div>
      <LoginForm />
      <Link href="/auth/signup" className="my-3 flex justify-center gap-1">
        <span className="text-sm font-medium">Not registered yet?</span>
        <span className="text-sm font-medium text-blue-600">Create an account</span>
      </Link>
    </>
  );
};

export default LoginPage;
