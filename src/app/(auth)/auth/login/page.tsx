import React from "react";
import LoginForm from "@/components/form/LoginForm";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/config/next-auth/authOptions";

const LoginPage = async () => {
  const session: any = await getServerSession(authOptions);
  console.log(session);
  if (session?.accessToken) {
    redirect("/task-management");
  }
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
