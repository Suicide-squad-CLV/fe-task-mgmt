import { GraphQLClient } from "graphql-request";
import { useSession } from "next-auth/react";

export const mutationRequest = async (query: any, variables: any = {}, token: string = "") => {
  const endpoint = process.env.BACKEND_API_URL ?? "http://localhost:5001/graphql";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return await graphQLClient.request(query, variables);
};
