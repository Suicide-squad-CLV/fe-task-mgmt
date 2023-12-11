"use client";

import LoginForm from "@/components/form/LoginForm";
import { LOGIN_USER } from "@/graphql/mutations/login";
import { useGQLMutation } from "@/utils/hooks/useGQLMutation";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  const loginMutation = useGQLMutation(LOGIN_USER, { email: "phidv9855@gmail.com", password: "abcd1234" });

  React.useEffect(() => {
    loginMutation.mutate(undefined, {
      onSuccess: (res) => {
        console.log("res", res);
      },
    });
  }, []);

  return <LoginForm />;
};

export default LoginPage;
