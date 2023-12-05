"use client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import gql from "graphql-tag";

const query = gql`
  query {
    launchLatest {
      mission_name
    }
  }
`;

export default function Home() {
  const { data }: any = useSuspenseQuery(query);

  return <div>{data.launchLatest.mission_name}</div>;
}
