import { LOGIN_USER } from "@/graphql/mutations/login";
import { mutationRequest } from "@/utils/common/mutationRequest";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res: any = await mutationRequest(LOGIN_USER, {
          email: credentials?.email,
          password: credentials?.password,
        });
        if (res) {
          return res.login as any;
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }: any) => {
      if (user) {
        token.email = user.user.email;
        token.accessToken = user.token.token;
      }
      return token;
    },
    session: ({ session, token }: any) => {
      session.email = token.email;
      session.accessToken = token.accessToken;

      return session;
    },
  },
};
